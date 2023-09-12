import { Request, Response } from "express";
import { getAuth } from "firebase-admin/auth";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import "../config/firebase";
import { FirebaseScrypt } from "firebase-scrypt";
require("dotenv").config();

const firebaseParameter = {
  memCost: 14,
  rounds: 8,
  saltSeparator: `${process.env.SALT_SEPERATOR}`,
  signerKey: `${process.env.SIGNER_KEY}`,
};

const scrypt = new FirebaseScrypt(firebaseParameter);
const db = getFirestore();

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const hash = await scrypt.hash(password, `${process.env.SALT}`);

    const userRecord = await getAuth().createUser({
      displayName: name,
      email,
      password: hash,
    });

    //Sending Email verification
    const verifyEmail = await getAuth().generateEmailVerificationLink(email);
    console.log("Email Verification Link: ", verifyEmail);

    // Creating Firestore for the user
    const docRef = db.collection("urls").doc(userRecord.uid);
    await docRef.set({
      timestamp: FieldValue.serverTimestamp(),
    });

    return res.status(200).json(userRecord);
  } catch (error: any) {
    console.log("errorMessage: ", error);
    return res.status(400).json(error.errorInfo);
  }
};
