import { pool } from "../utils/db.js";
import { response, Router } from "express";
const productsRouter = Router();

productsRouter.get("/", async (req, res) => {
  const category = Number(req.query.category);
  console.log(req.query > category);

  let query = ""; //สร้างขึ้นเพอภาชนะปล่าวเพื่อเก็บค่าที่รับมา
  let values = [];
  if (category === 5) {
    // 5คือ ไทปในเดต้าเบส เช่น 1= men /2= women /5new product
    query = `select * from products ORDER BY created_at desc
      limit 10`; // เลือกมาโดดยเรียงลำดับวลที่สร้างไม่เกิน10 ใหม่ไปเก่าสุด
  } else if (category) {
    query = `select * from products where category_id = $1`; //ถ้าไม่ใช่new product ก่อจะ ไปเรียกเคทีกอรี่อื่นๆๆ
    values = [category]; // จะถูกแทนเข้าไปในเคทีกอรี่
  } else {
    query = `select * from products`; //แต่ถ้าไม่เข้ไรเลยให้โชวโปรดักทั้งหมด
  }

  const results = await pool.query(query, values);

  return res.json({
    //การส่งข้อมูลตามที่เราเรียกแสดงกลับออกมา
    data: results.rows,
  });
});

// productsRouter.get("/newproduct", async (req, res) => {
//   const created = req.query.created;
//   const createProduct = await pool.query(
//     `SELECT *
//       FROM products
//       ORDER BY created_at desc
//       limit 10`
//   );
//   return res.status(200).json({
//     data: createProduct.rows,
//     message: " successfully ",
//   });
// });

// productsRouter.get("/", async (req, res) => {
//   const products = await pool.query(`select * from products limit 12`);
//   return res.status(200).json({
//     data: products.rows,
//     message: " successfully ",
//   });
// });

productsRouter.get("/:id", async (req, res) => {
  const productId = req.params.id;
  console.log(req.params.id);
  const productInfo = await pool.query(
    `select * from products where product_id= $1`,
    [productId]
  );
  return res.status(200).json({
    data: productInfo.rows,
    message: " successfully ",
  });
});

productsRouter.get("/:id", async (req, res) => {
  const productId = req.params.id;
  console.log(req.params.id);
  const productInfo = await pool.query(
    `select 1 from products where product_id= $1`,
    [productId]
  );
  return res.status(200).json({
    data: productInfo.rows,
    message: " successfully ",
  });
});

productsRouter.get("/", async (req, res) => {
  const category = req.query.category;
  const productCategory = await pool.query(
    console.log(productCategory)`select * from products where category_id = $1
   `,
    [category]
  );
  return res.status(200).json({
    data: productCategory.rows,
    message: " successfully ",
  });
});

export default productsRouter;
