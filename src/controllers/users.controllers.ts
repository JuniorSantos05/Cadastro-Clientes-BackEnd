import { Request, Response } from "express";
import { createUserServices } from "../services/Users/createUserServices";
import { retrieveUserServices } from "../services/Users/retrieveUserServices";
import { TUserRequest, TUserResponse, TUserUpdate } from "../interfaces/users.interfaces";
import { deleteUserServices } from "../services/Users/deleteUserService";
import { updateUserServices } from "../services/Users/updateUserServices";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {

  const userData: TUserRequest = req.body;

  const newUser: TUserResponse = await createUserServices(userData);

  return res.status(201).json(newUser);
};

export const retrieveUserController = async (req: Request, res: Response): Promise<Response> => {

  const userId: number = parseInt(req.params.id);

  const user: TUserResponse = await retrieveUserServices(userId);

  return res.status(200).json(user);
};

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {

  const userData: TUserUpdate = req.body;

  const userId: number = parseInt(req.params.id);  

  const updateUser = await updateUserServices(userData, userId);

  return res.status(200).json(updateUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
  
  const userId: number = parseInt(req.params.id);

  await deleteUserServices(userId);

  return res.status(204).send();
};
