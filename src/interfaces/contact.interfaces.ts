import { z } from "zod";
import { contactSchema, contactSchemaRequest, contactsSchemaResponse } from "../schemas/contacts.schemas";
import { DeepPartial } from "typeorm";

export type TContactResponse = z.infer<typeof contactSchema>
export type TContactRequest = z.infer<typeof contactSchemaRequest>
export type TContactUpdate = DeepPartial<TContactRequest>
export type TContactListResponse = z.infer<typeof contactsSchemaResponse>