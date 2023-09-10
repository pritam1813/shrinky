import { Request, Response } from "express";
import { getAuth } from "firebase-admin/auth";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const userRecord = await getAuth().createUser({
      displayName: name,
      email,
      password,
    });
    console.log("User: ", userRecord.toJSON());
    return res.status(200).json(userRecord);
  } catch (error: any) {
    console.log("errorMessage: ", error);
    return res.status(400).json(error.errorInfo);
  }
};
