import { Router, Request, Response, NextFunction } from "express";

const router = Router();

const handlePostCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (err) {
    next(err);
  }
};

const handleGetList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (err) {
    next(err);
  }
};

const handlePostOffer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (err) {
    next(err);
  }
};

router.post("/create", handlePostCreate);
router.get("/list", handleGetList);
router.post("/offer/:schemaId", handlePostOffer);
export default router;
