import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
  createdAt: z.string(),
});

export const userSchemaRequest = userSchema.omit({
  createdAt: true,
  id: true,
});

export const userSchemaUpdateRequest = userSchemaRequest.partial();

export const userSchemaResponse = userSchema.omit({
  password: true,
});

export const usersSchemaResponse = z.array(userSchemaResponse);
