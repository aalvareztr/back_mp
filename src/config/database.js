import mysql from 'mysql2/promise';
import 'dotenv/config'


export const connection = await mysql.createConnection(process.env.DATABASE_URL);



