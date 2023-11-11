const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/playground');
const courseSchema=new mongoose.Schema({
  name: String,
 author: String,
 tags: [String],
 isPublished: Boolean,
 price: Number,
 date:{type: Date,default:Date.now}
});
const Course=mongoose.model('course',courseSchema);
async function updateCourse(id) {
  const course =await Course.findById(id);
  if(!course){
    console.log('not');
    return;
  };
  course.set({
    isPublished:true,
    author:'Jass Brar'
  });
  //course.isPublished= true;
 // course.author='changed name';
  const result=await course.save();
  console.log(result);
}
updateCourse("654699e8ad45d31354fea75e");