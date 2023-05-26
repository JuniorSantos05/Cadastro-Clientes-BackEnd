import { z } from "zod";
import { userSchemaRequest } from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";
import { userSchema, userSchemaResponse } from "../schemas/users.schemas";

export type TUser = z.infer<typeof userSchema>;
export type TUserRequest = z.infer<typeof userSchemaRequest>;
export type TUserUpdate = DeepPartial<TUser>;
export type TUserResponse = z.infer<typeof userSchemaResponse>;
