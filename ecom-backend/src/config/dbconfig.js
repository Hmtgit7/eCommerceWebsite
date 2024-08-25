const mongoose = require("mongoose");
const mongodbURL="mongodb+srv://hmtloharcoding3579:Hmtlohar@cluster0.bhyqv8j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = () => {
  return mongoose.connect(mongodbURL);
};

module.exports={connectDB} 