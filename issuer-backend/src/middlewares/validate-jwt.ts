import { Request, Response, NextFunction } from "express";

export const validateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  if (!authorization) {
    next({
      statusCode: 403,
      message: "Malformed or missing JWT",
    });
  } else if (!/^Bearer .+$/.test(authorization)) {
    next({
      statusCode: 403,
      message: "JWT must be in Bearer Token format",
    });
  } else {
    res.locals.user = { token: authorization.split(" ")[1] };
    next();
  }
};
