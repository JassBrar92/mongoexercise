const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises');
const courseSchema=new mongoose.Schema({
  name: String,
 author: String,
 tags: [String],
 isPublished: Boolean,
 price: Number,
 date:{type: Date,default:Date.now}
});
const Course=mongoose.model('course',courseSchema);
async function getCourse(){
  return await Course.find({isPublished:true,tags:{ $in:['frontend','backend']}})
  .sort({price:-1})
  .select({name:1,author:1});
}
async function run(){
  const courses=await getCourse();
  console.log(courses);
}
run();