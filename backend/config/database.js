import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect("mongodb+srv://hmtloharcoding3579:hmtlohar123@cluster0.bhyqv8j.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

export default connectDB;