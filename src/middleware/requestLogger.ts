import { NextFunction, Request, Response } from "express";

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  console.info(`${new Date()}: ${req.method} - ${req.path}`);
  next();
};

export default requestLogger;