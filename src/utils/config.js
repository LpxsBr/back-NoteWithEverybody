require('dotenv').config();

module.exports = {
    dbHost: String(process.env.MONGODB_URI),
    dbName: String(process.env.DB_NAME),
    port: Number(process.env.PORT)
}