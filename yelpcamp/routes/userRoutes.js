const express=require('express');
const router=express.Router();
const User=require('./../models/user');
const catchAsync=require('./../utilities/catchAsync');
const passport=require('passport');
const { session } = require('passport');



router.get('/register',(req,res)=>{
 res.render('user/register');
});
router.post('/register',async(req,res)=>{
    try
    {const {username,password,email}=req.body;
    const user=new User({username,email});
    const newUser=await User.register(user,password);
    req.login(user, function(err) {
       if (err) { return next(err); }
       req.flash('success','you registered your account');
       res.redirect('/campgrounds');
     });
    }
    catch(e){
        req.flash('error',e.message);
        res.redirect('/register');
    }
 });

 router.get('/login',(req,res)=>{
        res.render('user/login');
 });

 router.post('/login',passport.authenticate('local',{failureFlash: true, failureRedirect:'/login'}),(req,res)=>{
        req.flash('success','welcome Back boy!!');
        console.log(req.session.returnTo);
        const redirectUrl=req.session.returnTo || '/campgrounds';
        res.redirect(redirectUrl);
 });

 router.get('/logout',(req,res,next)=>{
       req.logout((err)=>{
              if(err)return next(err);
       });
       req.flash('success','good bye');
       res.redirect('/campgrounds');
 });


module.exports=router;