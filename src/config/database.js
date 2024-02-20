import mysql from 'mysql2/promise';
import 'dotenv/config'


export const connection = await mysql.createConnection('mysql://rvflhhcjmyhu47ei0uj9:pscale_pw_TrtSV4YivNxreU9dBtSPBgupep5z2B21QjUKuPVLU5A@aws.connect.psdb.cloud/miasesordb?ssl={"rejectUnauthorized":true}')


