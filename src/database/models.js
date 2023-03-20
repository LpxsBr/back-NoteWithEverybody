const db = require('mongoose');

const forms = db.model('forms', {
    msg: String,
    date: String
})

module.exports = {
    forms
}