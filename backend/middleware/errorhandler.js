import errors from "../dataErrors.js";

const errorhandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case errors.VALIDATION_ERROR:
      res.json({
        title: "Validation faild",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case errors.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case errors.NOT_FOUND:
      res.json({
        title: " prduct not found",
        message: err.message,
        stackTrace: err.strack,
      });
      break;
    case errors.SERVER_ERROR:
      res.json({
        title: " Server error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case errors.UNAUTHORIZED:
      res.json({
        title: "Un Authorized",
        message: err.stack,
      });
      break;
    default:
      console.log("Very thing works fine");
      break;
  }
};

export default errorhandler;
