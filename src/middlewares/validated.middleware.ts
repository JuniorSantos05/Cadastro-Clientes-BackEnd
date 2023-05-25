import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

const body = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {

    const validatedData = schema.parse(req.body);

    req.body = validatedData;

    next();
  };

const token = async (req: Request, res: Response, next: NextFunction) => {
  
  let token: string | undefined = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "invalid token",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) {
      return res.status(401).json({ message: "invalid token" });
    }

    res.locals.userId = decoded.sub;

    return next();
  });
};

export default { body, token };
