const db = require('mongoose')
const { dbHost } = require('../utils/config')
const { forms } = require('./models')

module.exports = {
    con: async () => await db.connect(dbHost),
    createMsg: async (req, res) => {
        const { msg } = req.body;
        const message = new forms({ msg: msg })
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