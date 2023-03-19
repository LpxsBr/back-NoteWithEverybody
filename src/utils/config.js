require('dotenv').config();

module.exports = {
    dbHost: String(process.env.MONGODB_URI),
    dbName: String(process.env.DB_NAME),
    serverPort: Number(process.env.PORT),
    frontCLient: String(process.env.FRONT_CLIENT)
}