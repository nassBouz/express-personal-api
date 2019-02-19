const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const WishListSchema = new Schema({
    description: String,
    price: Number,
    amazonLink:String
});

const WList = mongoose.model('WList', WishListSchema);

module.exports = WList;