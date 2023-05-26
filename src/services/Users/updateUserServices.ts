import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { userSchemaResponse } from "../../schemas/users.schemas";
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interfaces";

export const updateUserServices = async (payload: TUserUpdate, userId: number): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({ id: userId });

  const newUserData = {
    ...user,
    ...payload,
  };

  await userRepository.save(newUserData);

  return userSchemaResponse.parse(newUserData);

};
