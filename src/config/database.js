import mysql from 'mysql2/promise';
import 'dotenv/config'


export const connection = await mysql.createConnection('mysql://1dqn7fw0yv6jmv88k3f9:pscale_pw_AZtQrEAZsJy6zAKW7pls8KahrRxpNhHe2eSvbgiWVtU@aws.connect.psdb.cloud/miasesordb?ssl={"rejectUnauthorized":true}')


