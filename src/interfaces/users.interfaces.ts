import { z } from "zod";
import { userSchemaRequest } from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";
import { userSchema, userSchemaResponse, usersSchemaResponse } from "../schemas/users.schemas";

export type TypeUser = z.infer<typeof userSchema>;
export type TypeUserRequest = z.infer<typeof userSchemaRequest>;
export type TypeUserUpdateRequest = DeepPartial<TypeUser>;
export type TypeUserResponse = z.infer<typeof userSchemaResponse>;
export type TypeListUsersResponse = z.infer<typeof usersSchemaResponse>;
