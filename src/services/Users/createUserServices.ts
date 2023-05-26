import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schemas";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";

export const createUserServices = async (payload: TUserRequest): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const newUser: User = userRepository.create(payload);

  await userRepository.save(newUser);

  const uservalid: TUserResponse = userSchemaResponse.parse(newUser);

  return uservalid;
};


