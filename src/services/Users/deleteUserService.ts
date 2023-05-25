import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

export const deleteUserServices = async (userId: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  await userRepository.remove(user!);
};
