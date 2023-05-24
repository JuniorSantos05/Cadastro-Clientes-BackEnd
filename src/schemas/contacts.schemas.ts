import { z } from "zod";

export const contactSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  createdAt: z.string(),
});

export const contactSchemaRequest = contactSchema.omit({
  createdAt: true,
  id: true,
});

export const contactSchemaUpdate = contactSchemaRequest.partial();

export const contactsSchemaResponse = z.array(contactSchema);
