import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { userSchemaResponse } from "../../schemas/users.schemas";
import {
  TypeUserResponse,
  TypeUserUpdateRequest,
} from "../../interfaces/users.interfaces";

export const updateUserServices = async (
  data: TypeUserUpdateRequest,
  userId: number
): Promise<TypeUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const newUserData = {
    ...oldUserData,
    ...data,
  };

  await userRepository.save(newUserData);

  const updateUser = userSchemaResponse.parse(newUserData);

  return updateUser;
};
