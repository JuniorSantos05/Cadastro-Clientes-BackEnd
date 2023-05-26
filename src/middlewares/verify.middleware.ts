import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { Contact } from "../entities/contact.entity";

const email = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

  const findUserByEmail: User | null = await userRepository.findOneBy({
    email: req.body.email,
  });

  const findContactEmail: Contact | null =  await contactRepository.findOneBy({
    email: req.body.email,
  })

  if (findUserByEmail || findContactEmail) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

const isUserOrOwner = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
  const paramsId = parseInt(req.params.id);
  const userId = parseInt(res.locals.userId);

  const user: User | null = await userRepository.findOneBy({ id: paramsId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (userId !== paramsId) { 
    throw new AppError("Insufficient permission", 403) 
  }; 

  return next();
};

const isContactOrOwner = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
  
  const contactId = parseInt(req.params.id);
  const userId = parseInt(res.locals.userId);

  const contact: Contact | null = await contactRepository.findOne({
    where: { id: contactId }, relations: { user: true }    
  });

  if (!contact) { 
    throw new AppError("Contact not found", 404); 
  };

  if (userId !== contact.user.id) { 
    throw new AppError("Insufficient permission", 403) 
  };

  return next();
}; 


export default { email, isUserOrOwner, isContactOrOwner };
