import { Request, Response } from "express";
import { TypeLoginRequest } from "../interfaces/login.interfaces";
import { createTokenServices } from "../services/Login/createToken.services";

export const createTokenController = async (req: Request, res: Response): Promise<Response> => {
  
  const loginData: TypeLoginRequest = req.body;

  const token = await createTokenServices(loginData);

  return res.status(201).json({ token: token });
};
