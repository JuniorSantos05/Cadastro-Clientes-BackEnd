import { Repository } from "typeorm";
import { Contact } from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";
import { TContactResponse, TContactUpdate } from "../../interfaces/contact.interfaces";
import { contactSchema } from "../../schemas/contacts.schemas";

export const updateContactServices = async (payload: TContactUpdate, contactId: number): Promise<TContactResponse> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

    const contact: Contact | null = await contactRepository.findOneBy({ id: contactId })

    const updateContact = {
        ...contact,
        ...payload
    }
    
    await contactRepository.save(updateContact)

    return contactSchema.parse(updateContact)
    
}