const mongodb = require('mongodb');
const Schema = mongodb.Schema;

const Books = new Schema({
    name: { type: String},
    image: {type: String},
    price: {type: String},
    CreatedAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

module.exports = mongodb.model('Books', Books);