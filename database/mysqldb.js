import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const pool=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
})

const userDatabase=pool

export default userDatabase;
