import { Router, Request, Response, NextFunction } from "express";
import { SignupOrg, SignInOrg } from "./auth.service";

const router = Router();

const handlePostSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    await SignupOrg(email, password);
    res.status(201).json({
      success: true,
      message: "Organization created!",
    });
  } catch (err) {
    next(err);
  }
};

const handlePostSignIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const token = await SignInOrg(email, password);
    res.status(200).json({
      success: true,
      token: token,
    });
  } catch (err) {
    next(err);
  }
};

router.post("/signup", handlePostSignup);
router.post("/signin", handlePostSignIn);
export default router;
