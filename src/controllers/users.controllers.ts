import { Request, Response } from "express";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(201);
};

export const listUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(204);
};
