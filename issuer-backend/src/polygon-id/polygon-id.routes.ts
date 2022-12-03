import { Router, Request, Response, NextFunction } from "express";
import { renderDeepLink } from "./polygon-id.service";

const router = Router();

const handleGetDeepLink = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { link } = req.query;
  if (!link) {
    return res.status(404).json({
      success: false,
      message: "URI invalid!",
    });
  } else {
    const view = renderDeepLink(link as string);
    res.send(view);
  }
};

router.get("/deep-link", handleGetDeepLink);

export default router;
