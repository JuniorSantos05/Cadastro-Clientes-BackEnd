import { Request, Response } from "express";

export const createTokenController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(201);
};
