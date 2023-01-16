import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import authRouter from "./apps/auth.js";
import dotenv from "dotenv";
import userRouter from "./apps/user.js";
import productsRouter from "./apps/products.js";

async function init() {
  dotenv.config();
  let app = express();
  const port = 4000;

  app.use(cors());
  app.use(bodyParser.json());
  app.use("/auth", authRouter);
  app.use("/user", userRouter);
  app.use("/products", productsRouter);
  app.get("/", (req, res) => {
    return res.json({ massage: "naja" });
  });

  app.listen(port, () => {
    console.log("server is runing on port 4000");
  });
}
init();
