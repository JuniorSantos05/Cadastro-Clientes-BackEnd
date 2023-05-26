import { contactSchema } from './../../schemas/contacts.schemas';
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TContactResponse } from "../../interfaces/contact.interfaces";
import { Contact } from "../../entities/contact.entity";

export const retrieveContactServices = async (contactId: number): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository.findOneBy({ id: contactId });

  return contactSchema.parse(contact);

};


