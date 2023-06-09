import { Repository } from "typeorm";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schemas";

export const retrieveUserServices = async (userId: number): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({ id: userId });

  const userValid = userSchemaResponse.parse(user);

  return userValid;
};


