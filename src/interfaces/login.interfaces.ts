import { z } from "zod";
import { loginRequestSchema } from "../schemas/login.schemas";

export type TypeLoginRequest = z.infer<typeof loginRequestSchema>;
