const mongoose=require('mongoose');
//connecting to mongo db
 mongoose.connect('mongodb://localhost/mongo-exercises')
 .then(()=>console.log('connected to database'))
.catch(err=>console.error('Not connected to mongo database',err));
 //creating schema
const courseSchema=new mongoose.Schema({
 name: String,
 author: String,
 tags: [String],
 isPublished: Boolean,
 price: Number,
 date:{type: Date,default:Date.now}
});
//create class for schema
const Course=mongoose.model('course',courseSchema);
async function getCourse(){
  return await Course.find({isPublished:true,tags:'backend'})
  .sort({name:1})
  .select({name:1,author:1});
}
async function run(){
  const courses=await getCourse();
  console.log(courses);
}
run();