import  express from "express";

//middleware
import { errorMiddleware } from "./middleware/error.js";

const app = express();
app.use(express.json());

//ROUTES IMPORT
import product from "./routes/productRoute.js";

app.use("/api/v1", product);

//MIDDLEWARE FOR ERROR
app.use(errorMiddleware);

export default app;