import app from "./app.js";
import dotenv from "dotenv";

import connectDB from "./config/database.js";

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

app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});