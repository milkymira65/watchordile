// โค้ดนี้อยู่ในไฟล์ server/apps/auth.js

//เป็นคอนเทคเอพีไอ การเก้บขอมูลลุกค้า สมัครมาจากหน้ารีจิสเตอร

import bcrypt from "bcrypt";
import { response, Router } from "express";
import { pool } from "../utils/db.js";
import jwt from "jsonwebtoken";
const authRouter = Router();
authRouter.post("/register", async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    created_at: new Date(),
    updated_at: new Date(),
    last_login: new Date(),
  };
  let salt = await bcrypt.genSalt(10);
  console.log(salt);
  user.password = await bcrypt.hash(user.password, salt);

  // console.log(user.password);

  await pool.query(
    `
      insert into users(username, password, email, firstName, lastName,created_at, updated_at,last_login)
    values($1,$2,$3,$4,$5,$6,$7,$8)`,
    [
      user.username,
      user.password,
      user.email,
      user.firstName,
      user.lastName,
      user.created_at,
      user.updated_at,
      user.last_login,
    ]
  );

  return res.json({
    message: "Your account has been created succesfully",
  });
});

authRouter.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await pool.query(
    `select * from users 

  where username = $1

  `,
    [username]
  );

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  // console.log(user);

  // console.log(req.body.password);
  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.rows[0].password
  );

  // console.log(isValidPassword);

  if (!isValidPassword) {
    return res.status(401).json({
      message: "password not valid",
    });
  }
  // console.log(user);
  // console.log(user.rows[0].user_id);
  console.log(user.rows.email);
  const token = jwt.sign(
    {
      id: user.rows[0].user_id,
      firstname: user.rows[0].firstname,
      lastname: user.rows[0].lastname,
      email: user.rows[0].email,
    },

    process.env.SECRET_KEY,
    {
      expiresIn: "900000",
    }
  );
  console.log("naja");
  // console.log(user.rows[0].firstName);
  console.log(user.rows[0]);
  return res.json({
    message: "login succesfully",
    token,
  });

  // return res.json({ user: user });
});
export default authRouter;
