import * as pg from "pg";
import dotenv from "dotenv";
const { Pool } = pg.default;
dotenv.config();
const pool = new Pool({
  connectionString: `	postgres://tuyaktvz:W95jcCscxVJJUEM5YiCsk2_7XEj_jq17@tiny.db.elephantsql.com/tuyaktvz`,
});

export { pool };
