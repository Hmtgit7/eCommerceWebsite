import ErrorHandler from "../utils/errorHandler.js";

export const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";


  //WRONG MONGODB ID ERROR
  if(err.name==="CastError"){
    const message=`Resource Not Found. Invalid ${err.path}`;
    err=new ErrorHandler(message,400)
  }



  res.status(err.statusCode).json({
    sucess: false,
    message: err.message,
  });
};
