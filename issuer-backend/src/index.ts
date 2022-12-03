import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
const app: Express = express();
import { config as dotenvConfig } from "dotenv";

import authRouter from "./auth/auth.routes";
import polygonIDRouter from "./polygon-id/polygon-id.routes";
import schemaRouter from "./schema/schema.routes";

dotenvConfig();

app.use(cors())
app.use(express.json({}));

app.use("/api/healthcheck", (req: Request, res: Response) => {
  res.json({
    message: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/auth", authRouter);
app.use("/api/polygon-id", polygonIDRouter);
app.use("/api/schema", schemaRouter);

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Not found!",
  });
});

app.use((err: Error | any, req: Request, res: Response, next: NextFunction) => {
  if (err?.statusCode) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      token: res.locals?.user?.token ?? undefined,
    });
  } else {
    console.error("UnhandledAPIError");
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on mode: ${
      process.env.NODE_ENV ?? "development"
    } on port: ${process.env.PORT}`
  );
});

process.on("SIGHUP", () => {
  process.exit(0);
});
process.on("SIGINT", () => {
  process.exit(0);
});
