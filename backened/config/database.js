import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Database connected: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log("Database connection error", err);
    });
};

export default connectDB;
