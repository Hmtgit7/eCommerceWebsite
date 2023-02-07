const app = require("./app");

const dotenv = require("dotenv");

//config

dotenv.config({path:"backened/config/config.env"});

app.app.listen(process.env.PORT, () => {
  console.log(`Server is working on https://localhost:${process.env.PORT}`);
});
