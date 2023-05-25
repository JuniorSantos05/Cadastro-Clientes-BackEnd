import { Request, Response } from "express";

export const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(201);
};

export const listContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200);
};

export const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200);
};

export const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(204);
};
