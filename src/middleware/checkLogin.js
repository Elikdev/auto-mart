import { verifyJwt } from "../utils/helpers";
import { userService } from "../api/v1/users/users.service";

export const checkToken = async (req, res, next) => {
  //check if token is present
  const authHeader = req.headers["authorization"];

  let token;

  if (!authHeader) {
    return res.status(412).json({
      status: "error",
      message: "Access Denied! Missing credentials. Login to have access",
    });
  }

  //separate the Bearer from the string if it exists
  const separateBearer = authHeader.split(" ");
  if (separateBearer.includes("Bearer")) {
    token = separateBearer[1];
  } else {
    token = authHeader;
  }
  try {
    const grantAccess = verifyJwt(token);

    const { id } = grantAccess;

    const auth_user = await userService.findUserById(id)

    if (!auth_user) {
      return res.status(403).json({
        status: "error",
        message: "Invalid token",
      });
    }

    req.user = auth_user;
    return next();
  } catch (error) {
    console.log(`Error from token verification >>> ${error.message}`);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        status: "error",
        message: "Token expired.",
      });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        status: "error",
        message: "Invalid token format.",
      });
    }
    return res.status(500).json({
      status: "error",
      message: "Something went wrong, please try again later.",
    });
  }
};