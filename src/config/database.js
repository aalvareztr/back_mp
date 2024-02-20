import mysql from 'mysql2/promise';
import 'dotenv/config'


export const connection = await mysql.createConnection('mysql://9zarfabppw4guoget5a4:pscale_pw_tYkGBkQ2V4HGO9m0XRsr1dmPJmQ7zT3I1Rf7xOd6ICs@aws.connect.psdb.cloud/miasesordb?ssl={"rejectUnauthorized":true}')


