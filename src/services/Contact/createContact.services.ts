import { Repository } from "typeorm";
import { TContactRequest, TContactResponse } from "../../interfaces/contact.interfaces";
import { Contact } from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../error";
import { contactSchema } from "../../schemas/contacts.schemas";

export const createContactServices = async (payload: TContactRequest, userId: number):Promise<TContactResponse> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ id: userId })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    const newContact = await contactRepository.create({
        ...payload,
        user
    })

    await contactRepository.save(newContact)

    return contactSchema.parse(newContact)
    
}