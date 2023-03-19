require('dotenv').config();

module.exports = {
    dbHost: String(process.env.DB_HOST),
    port: Number(process.env.PORT)
}