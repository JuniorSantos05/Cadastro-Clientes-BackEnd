import { Request, Response } from "express";
import { TContactListResponse, TContactRequest, TContactResponse, TContactUpdate } from "../interfaces/contact.interfaces";
import { createContactServices } from "../services/Contact/createContact.services";
import { listContactsServices } from "../services/Contact/listContacts.services";
import { deleteContactServices } from "../services/Contact/deleteContact.services";
import { updateContactServices } from "../services/Contact/updateContact.services";

export const createContactController = async (req: Request, res: Response): Promise<Response> => {

  const contactData: TContactRequest = req.body
  const userId: number = parseInt(res.locals.userId)

  const newContact: TContactResponse = await createContactServices(contactData, userId)

  return res.status(201).json(newContact);
};

export const listContactController = async (req: Request, res: Response): Promise<Response> => {

  const userId = parseInt(res.locals.userId)

  const contacts: TContactListResponse = await listContactsServices(userId)

  return res.status(200).json(contacts);
};


export const updateContactController = async (req: Request, res: Response): Promise<Response> => {

  const contactId: number = parseInt(req.params.id)
  const updateData: TContactUpdate = req.body

  const updatedContact: TContactResponse = await updateContactServices(updateData, contactId)

  return res.status(200).json(updatedContact);
};

export const deleteContactController = async (req: Request, res: Response): Promise<Response> => {

  const contactId: number = parseInt(req.params.id)

  await deleteContactServices(contactId)
  
  return res.status(204).send();
};
