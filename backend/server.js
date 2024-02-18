import app from "./app.js";
import dotenv from "dotenv";

import connectDB from "./config/database.js";



//Handling uncaught Exception
process.on("uncaughtException",err=>{
  console.log(`Error : ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);

  process.exit(1)
})




//CONFIG
dotenv.config({ path: "backend/config/.env" });


//DATABASE CONNECTION
connectDB();


// VARIABLE
const PORT=process.env.PORT||4000;


app.get("/", (req, res) => {
  res.send("hiiii");
  console.log("I am working");
});

const  server=app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});


//unhandled promise rejection

process.on("unhandledRejection",err=>{
  console.log(`Error : ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(()=>{
    process.exit(1);
  })
})