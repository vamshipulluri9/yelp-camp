const express=require('express');
const campRoutes=express.Router();
const catchAsync=require('./../utilities/catchAsync');
const Campground=require('./../models/model');
const expressError=require('./../utilities/expressError');
const {campgroundSchema,reviewSchema}=require('./../schemas');
const {isLoggedIn}=require('./../authMiddleware');

campRoutes.get('/campgrounds',catchAsync(async(req,res)=>{
    const campgrounds=await Campground.find({});
    res.render('campgrounds/first',{campgrounds});
}));
campRoutes.get('/campgrounds/:id',catchAsync(async (req,res,next)=>{
    let {id}=req.params;
    const camp=await Campground.findById(id).populate('reviews');
    if(!camp){
        req.flash('error','cannot find campground');
        res.redirect('/campgrounds');
    }
    res.render('campgrounds/show',{id,camp});
}));
campRoutes.get('/new',isLoggedIn,(req,res)=>{
    
    res.render('campgrounds/new');
});
const validateCampground=function(req,res,next){
    const {error}=campgroundSchema.validate(req.body);
    if(error){
        const msg=error.details.map(el=>el.message);
        throw new expressError(msg,400);
    }
    else next();
}
campRoutes.post('/campgrounds',isLoggedIn,validateCampground,catchAsync(async (req,res,next)=>{
   const newCamp= new Campground(req.body.campground);
   console.log(newCamp);
   await newCamp.save();
   req.flash('success','campground successfully created');
   res.redirect('/campgrounds');
}));
campRoutes.get('/campgrounds/:id/edit',isLoggedIn,catchAsync(async (req,res)=>{
    const {id}=req.params;
    const camp=await Campground.findById(`${id}`);
    res.render('campgrounds/edit',{camp});
}));
campRoutes.put('/campgrounds/:id',isLoggedIn,catchAsync(async (req,res)=>{
    const {id}=req.params;
    const camp=await Campground.findByIdAndUpdate(id,{...req.body});
    req.flash('success','successfully updated');
    res.redirect(`/campgrounds/${id}`);
}));
campRoutes.delete('/campgrounds/:id',isLoggedIn,catchAsync(async (req,res)=>{
    const {id}=req.params;
    const camp=await Campground.findByIdAndDelete(id);
    req.flash('success','successfully deleted campground');
    res.redirect('/campgrounds');
}));

module.exports=campRoutes;