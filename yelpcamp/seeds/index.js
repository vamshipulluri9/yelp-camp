const mongoose=require('mongoose');
main().catch(err => console.log(err));
async function main() {
  console.log("connection to database");
  await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
}
const Campground=require('../models/model');
const cities=require('./cities');
const {places,descriptors}=require('./seedsHelpers');

const sample=(array)=>array[Math.floor(Math.random()*array.length)];

const seedDB=async ()=>{
  await Campground.deleteMany({});
  for(let i=0;i<50;i++){
    const random1000=Math.floor(Math.random()*1000);
    const price=Math.floor(Math.random()*20)+10;
    const camp=new Campground({location:`${cities[random1000].city} ${cities[random1000].state}`,
      title:`${sample(descriptors)} ${sample(places)}`,image:'https://unsplash.com/photos/oL3-V8xhqlI',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque iste perspiciatis labore explicabo similique, necessitatibus vitae itaque tempore eligendi culpa provident eveniet ut ex ipsa ad nam et praesentium quas.',
    price});
    await camp.save();
  }
}

seedDB().then(()=>{
  mongoose.connection.close();
});