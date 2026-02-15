import express, { type Request } from "express";

export interface AuthenticatedRequest extends Request {
  user?: { userId: string; email: string };
}

// Create an Express Router instance
const routes = express.Router();

export default routes;
