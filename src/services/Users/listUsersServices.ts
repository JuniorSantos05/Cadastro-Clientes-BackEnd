import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";
import { TypeListUsersResponse } from "../../interfaces/users.interfaces";
import { usersSchemaResponse } from "../../schemas/users.schemas";
import { AppDataSource } from "../../data-source";

export const listUsersServices = async (): Promise<TypeListUsersResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] = await userRepository.find();

  const usersValid: TypeListUsersResponse = usersSchemaResponse.parse(users);

  return usersValid;
};

