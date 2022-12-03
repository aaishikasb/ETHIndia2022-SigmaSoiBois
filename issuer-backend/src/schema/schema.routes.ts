import { Router, Request, Response, NextFunction } from "express";
import { injectJWTInResponse } from "../middlewares/inject-jwt";
import { validateJWT } from "../middlewares/validate-jwt";
import {
  createClaimOffer,
  getAllSchemas,
  getIssuerID,
} from "../services/polygon.service";
import { createSchemaService } from "./schema.service";
import {
  sendDeepLinkViaDiscord,
  sendImageViaDiscord,
} from "../services/discord.service";

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
    const { discordId, attributes } = req.body;
    const parsedAttributes = JSON.parse(attributes);
    const { schemaId } = req.params;
    const issuerId = getIssuerID(res.locals.user.token);
    const { qrBuffer, qrCode } = await createClaimOffer(
      issuerId,
      schemaId,
      parsedAttributes,
      res.locals.user.token
    );
    await sendDeepLinkViaDiscord(discordId, qrCode);
    await sendImageViaDiscord(discordId, qrBuffer);
    res.setHeader("X-Refresh-Token", res.locals.user.token);
    res.json({
      success: true,
      qrData: qrCode,
    });
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
