require('dotenv').config();

module.exports = {
    dbHost: String(process.env.MONGODB_URI),
    port: Number(process.env.PORT)
}