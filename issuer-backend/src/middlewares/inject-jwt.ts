import { Request, Response, NextFunction } from "express";
import { refreshToken } from "../services/polygon.service";
export const injectJWTInResponse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = res.locals.user.token;
    const updatedToken = await refreshToken(token);
    res.locals.user.token = updatedToken;
    next();
  } catch (err) {
    next(err);
  }
};
