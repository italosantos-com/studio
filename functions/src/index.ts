/**
 * Firebase Cloud Functions – Spark plan (free tier)
 * Region: southamerica-east1
 *
 * Rules for zero cost:
 *  - HTTP functions only (no cron, no WebSockets, no streaming)
 *  - Auth required on protected endpoints (short-circuit on missing token)
 *  - Restricted CORS origin list
 */

import * as admin from "firebase-admin";
import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/https";
import * as logger from "firebase-functions/logger";
import cors from "cors";
import type {Request, Response} from "express";

admin.initializeApp();

// Cap concurrent containers to control cost on Spark plan.
setGlobalOptions({maxInstances: 10});

const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS ?
  process.env.ALLOWED_ORIGINS.split(",") :
  ["https://your-app.vercel.app"];

const corsHandler = cors({
  origin: ALLOWED_ORIGINS,
  methods: ["GET", "POST"],
});

/**
 * Verifies the Firebase Auth ID token in the Authorization header.
 * Throws if missing or invalid.
 * @param {Request} req - The incoming HTTP request.
 */
async function verifyAuth(req: Request): Promise<admin.auth.DecodedIdToken> {
  const header = req.headers.authorization;
  if (!header) throw new Error("No authorization header");
  const parts = header.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    throw new Error("Invalid authorization header format");
  }
  return admin.auth().verifyIdToken(parts[1]);
}

/** Public health-check endpoint. */
export const ping = onRequest(
  {region: "southamerica-east1"},
  (req: Request, res: Response) => {
    corsHandler(req, res, () => {
      logger.info("ping called");
      res.json({ok: true});
    });
  }
);

/** Auth-protected endpoint – returns the caller's Firebase UID. */
export const securePing = onRequest(
  {region: "southamerica-east1"},
  (req: Request, res: Response) => {
    corsHandler(req, res, async () => {
      try {
        const user = await verifyAuth(req);
        res.json({uid: user.uid});
      } catch (err) {
        logger.warn("Unauthorized request", err);
        res.status(401).end();
      }
    });
  }
);
