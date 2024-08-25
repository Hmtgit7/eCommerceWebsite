const app = require(".");
const {connectDB}=require("./config/dbconfig.js")

const PORT = process.env.PORT || 5454;

app.listen(PORT, async() => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});
