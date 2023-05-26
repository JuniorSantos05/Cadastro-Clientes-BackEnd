import { TContactListResponse } from './../../interfaces/contact.interfaces';
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from '../../entities/user.entity';
import { contactsSchemaResponse } from '../../schemas/contacts.schemas';

export const listContactsServices = async (userId: number): Promise<TContactListResponse> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
  const usersRepository: Repository<User> = AppDataSource.getRepository(User)

  const user: User | null = await usersRepository.findOneBy({ id: userId });

  const contacts: Contact[] = await contactRepository.find({
    where: { user: { id: userId } }
  });

  const contactsValid: TContactListResponse = contactsSchemaResponse.parse(contacts);

  return contactsValid;
};