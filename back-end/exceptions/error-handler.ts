import { ErrorRequestHandler, RequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof BetterError) {
      res.status(error.status).json({ error: error.message });
  } else {
      res.status(500).json({ error: error.message });
  }
};

export class BetterError extends Error {
  constructor(message: string, public status: number) {
      super(message);
  }
}