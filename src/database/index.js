const db = require('mongoose')
const { dbHost, dbName } = require('../utils/config')
const { forms } = require('./models')

module.exports = {
    con: async () => {await db.connect(dbHost, {dbName: dbName}); },
    createMsg: async (req, res) => {
        const { msg, date } = req.body;
        const message = new forms({ msg: msg, date: date })
        try {
            message.save()
            res.status(200).json('cadastrado')
        } catch (error) {
            res.status(404).json('não cadastrado')
        }
    },
    viewMsg: async (req, res) => {
        const list = await forms.find();
        if (!list) { return res.status(404).json('vazio') }
        else { return res.status(200).json(list) }
    }
}