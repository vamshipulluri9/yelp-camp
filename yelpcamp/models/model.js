const mongoose=require('mongoose');
const Review = require('./Review');
const Schema=mongoose.Schema;

const campgroundSchema=Schema({
    title:String,
    price:Number,
    image:String,
    description: String,
    location: String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});

campgroundSchema.post('findOneAndDelete',async (doc)=>{
    await Review.deleteMany({
        _id:{
            $in:doc.reviews
        }
    })
})

module.exports=mongoose.model('Campground',campgroundSchema);
