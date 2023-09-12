import express = require("express");
import { onRequest } from "firebase-functions/v2/https";
import router from "./routes";
import "./config/firebase";
const app = express();

app.use("/api", router);

exports.app = onRequest(app);
