// Desc: send JWT Token To client

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  //OPTIONS FOR COOKIE
  const options = {
    epires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).jaon({
    sucess: true,
    user,
    token,
  });
};


export default sendToken;