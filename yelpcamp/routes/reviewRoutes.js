const express=require('express');
const router=express.Router();
const catchAsync=require('./../utilities/catchAsync');
const Review=require('./../models/Review');
const Campground=require('./../models/model');
const expressError=require('./../utilities/expressError');
const {campgroundSchema,reviewSchema}=require('../schemas');
const {isLoggedIn}=require('./../authMiddleware');

const validateReview=function(req,res,next){
    const {error}=reviewSchema.validate(req.body);
    console.log(error);
    if(error){
        const msg=error.details.map(el=>el.message);
        throw new expressError(msg,400);
    }
    else next();
}
router.post('/campgrounds/:id/reviews',isLoggedIn,validateReview,catchAsync(async (req,res)=>{
    const newReview=new Review(req.body.review);
    const camp=await Campground.findById(req.params.id);
    camp.reviews.push(newReview);
    await newReview.save();
    await camp.save();
    req.flash('success','successfully created a review');
    res.redirect(`/campgrounds/${req.params.id}`);
}))
router.delete('/campgrounds/:id/reviews/:review_id',isLoggedIn,catchAsync(async(req,res)=>{
    const {id,review_id}=req.params;
    await Campground.findByIdAndUpdate(id,{$pull:{reviews:review_id}});
    await Review.findByIdAndDelete(review_id);
    req.flash('success','successfully deleted review');
    res.redirect(`/campgrounds/${id}`);
}));

module.exports=router;