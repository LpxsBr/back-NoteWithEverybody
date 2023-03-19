const db = require('mongoose');

const forms = db.model('forms', {
    msg: String
})

module.exports = {
    forms
}