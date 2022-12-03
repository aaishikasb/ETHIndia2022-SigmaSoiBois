import { Router, Request, Response, NextFunction } from "express";
import { injectJWTInResponse } from "../middlewares/inject-jwt";
import { validateJWT } from "../middlewares/validate-jwt";
import { getAllSchemas, getIssuerID } from "../services/polygon.service";
import { createSchemaService } from "./schema.service";

const router = Router();

const handlePostCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { schema, mandatoryExpiration, attributes } = req.body;
    const parsedAttributes = JSON.parse(attributes);
    const parsedMandatoryExpiration =
      mandatoryExpiration === "true" ? true : false;
    const schemaId = await createSchemaService(
      schema,
      parsedMandatoryExpiration,
      parsedAttributes,
      res.locals.user.token
    );
    res.setHeader("X-Refresh-Token", res.locals.user.token);
    res.json({
      success: true,
      message: `Schema created with ID: ${schemaId}`,
    });
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
    const issuerId = getIssuerID(res.locals.user.token);
    const data = await getAllSchemas(res.locals.user.token, issuerId);
    res.setHeader("X-Refresh-Token", res.locals.user.token);
    res.json({
      success: true,
      allSchemas: data,
    });
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
    res.setHeader("X-Refresh-Token", res.locals.user.token);
  } catch (err) {
    next(err);
  }
};

router.post("/create", validateJWT, injectJWTInResponse, handlePostCreate);
router.get("/list", validateJWT, injectJWTInResponse, handleGetList);
router.post(
  "/offer/:schemaId",
  validateJWT,
  injectJWTInResponse,
  handlePostOffer
);
export default router;
