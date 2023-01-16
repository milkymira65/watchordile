import { pool } from "../utils/db.js";
import { Router } from "express";
import { protect } from "../middlewares/protect.js";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  if (req.query.userId) {
    let result = await pool.query(`select * from users where user_id = $1`, [
      req.query.userId,
    ]);
    return res.json({
      data: result.rows[0],
    });
  }
  const usersInfo = await pool.query(`select * from users `);

  return res.status(200).json({
    data: usersInfo.rows,
    message: " successfully ",
  });
});

userRouter.get("/", async (req, res) => {
  const userId = req.params.id;
  const usersInfo = await pool.query(
    `select * from products where user_id= $1`,
    [userId]
  );
  return res.status(200).json({
    data: usersInfo.rows,
    message: " successfully ",
  });
});

userRouter.get("/delivery", async (req, res) => {
  const address = await pool.query(`select * from delivery`);
  return res.status(200).json({
    data: address.rows,
    message: " successfully ",
  });
});

userRouter.post("/delivery", async (req, res) => {
  const user = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phoneNumber: req.body.phonenumber,
    houseNumber: req.body.house_number,
    zipcode: req.body.zipcode,
    image: req.body.image,
    province: req.body.province,
    district: req.body.district,
    subDistrict: req.body.subdistrict,
    village: req.body.village,
    lane: req.body.lane,
    road: req.body.road,
    created_at: new Date(),
    updated_at: new Date(),
    last_login: new Date(),
  };

  await pool.query(
    `
      insert into delivery(
        firstname,
        lastname,
        phonenumber,
        zipcode,
        image,
        province,
        district,
        subdistrict,
        house_number,
        village,
        lane,
        road
      )
    values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
    [
      user.firstname,
      user.lastname,
      user.phoneNumber,
      user.zipcode,
      user.image,
      user.province,
      user.district,
      user.subDistrict,
      user.houseNumber,
      user.village,
      user.lane,
      user.road,
    ]
  );

  return res.json({
    message: "Your account has been created succesfully",
  });
});

export default userRouter;
