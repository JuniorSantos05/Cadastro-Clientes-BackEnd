import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schemas";
import {
  TypeUserRequest,
  TypeUserResponse,
} from "../../interfaces/users.interfaces";

export const createUserServices = async (
  data: TypeUserRequest
): Promise<TypeUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const newUser: User = userRepository.create(data);

  await userRepository.save(newUser);

  const uservalid: TypeUserResponse = userSchemaResponse.parse(newUser);

  return uservalid;
};
