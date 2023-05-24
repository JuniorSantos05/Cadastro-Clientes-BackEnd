import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const email = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUserByEmail: User | null = await userRepository.findOneBy({
    email: req.body.email,
  });

  if (findUserByEmail) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

const isUserExist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
  const userId = parseInt(req.params.id);

  const foundUser: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (!foundUser) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export default { email, isUserExist };
