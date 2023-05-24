import { Repository } from "typeorm";
import { TypeLoginRequest } from "../../interfaces/login.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export const createTokenServices = async (LoginData: TypeLoginRequest): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: { email: LoginData.email },
  });

  if (!user) {
    throw new AppError("Invalid credencials", 401);
  }

  const passwordMatch = await compare(LoginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign(
    { email: user.email },

    process.env.SECRET_KEY!,
    
    { expiresIn: "24h", subject: String(user.id) }
  );

  return token;
};
