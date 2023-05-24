import { Request, Response } from "express";
import { createUserServices } from "../services/Users/createUserServices";
import { listUsersServices } from "../services/Users/listUsersServices";
import { retrieveUserServices } from "../services/Users/retrieveUserServices";
import {
  TypeListUsersResponse,
  TypeUserRequest,
  TypeUserResponse,
} from "../interfaces/users.interfaces";
import { deleteUserServices } from "../services/Users/deleteUserService";
import { updateUserServices } from "../services/Users/updateUserServices";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TypeUserRequest = req.body;

  const newUser: TypeUserResponse = await createUserServices(userData);

  return res.status(201).json(newUser);
};

export const listUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: TypeListUsersResponse = await listUsersServices();
  return res.status(200).json(users);
};

export const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  const user: TypeUserResponse = await retrieveUserServices(userId);
  return res.status(200).json(user);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = parseInt(req.params.id);
  const userData = req.body;

  const updateUser = await updateUserServices(userData, userId);

  return res.status(200).json(updateUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  await deleteUserServices(userId);

  return res.status(204).send();
};
