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
//first approach
/*async function updateCourse(id) {
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
}*/
//second approach
/*async function updateCourse(id){
  const result=await Course.findByIdAndUpdate(id,{
    $set:{
      isPublished:true,
      author:"Brar"
    }
  },{new:true});
  console.log(result);
}*/
//third approach
/*async function updateCourse(id){
  const result=await Course.update({_id:id},{
    $set:{
      isPublished:false,
      author:"jackson"
    }
  });
  console.log(result);
}*/
//updateCourse("654699549b5fb526a0124a29");
async function removeCourse(id){
  //const result=await Course.deleteOne({_id:id}); //it only deletes one field
  //const result=await Course.deleteMany({_id:id});
  const result=await Course.findByIdAndRemove(id);
  console.log(result);
}
removeCourse("654699549b5fb526a0124a29");