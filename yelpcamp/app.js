const express=require('express');
const app=express();
const path=require('path');
const ejsMate=require('ejs-mate');
const joi=require('joi');
const expressError=require('./utilities/expressError');
const methodOverride=require('method-override');
const campRoutes=require('./routes/campRoutes');
const reviewRoutes=require('./routes/reviewRoutes');
const userRoutes=require('./routes/userRoutes');
const mongoose=require('mongoose');
const Session=require('express-session');
const flash=require('connect-flash');
const passport=require('passport');
const localStrategy=require('passport-local');
const User=require('./models/user');



app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));

const sessionConfig={
    secret:'notagoodsecret',
    resave:false,
    saveUninitialized:true,
    cookie:{
        expire: Date.now()+1000*60*60*24*7,
        maxAge:1000*60*60*24*7,
        httpOnly:true
    }
}
app.use(Session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate())); 

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    console.log(req.session);
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    res.locals.currentUser=req.user;
    next();
})

app.use('',userRoutes);
app.use('',campRoutes);
app.use('',reviewRoutes);


app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));




main().catch(err => console.log(err));
async function main() {
  console.log("connection to database");
  await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
}




app.listen('8247',(req,res)=>{
    console.log('listening');
});

app.get('/',(req,res)=>{
    res.render('home');
});


app.use((err,req,res,next)=>{
    const {statusCode=500}=err;
    if(!err.message)err.message='something went wrong';
    res.status(statusCode);
    res.render('error',{err});
})
app.all('*',(req,res,next)=>{
    next(new expressError('Page Not Found',404));
})
