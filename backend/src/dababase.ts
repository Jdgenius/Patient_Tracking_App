import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const connection = async () => {
    try {
        await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        })
        console.log("connected successfully")
    } catch(error) {
        console.log("error")
    }
}

export default connection