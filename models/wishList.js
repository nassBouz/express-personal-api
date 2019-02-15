const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const WishListSchema = new Schema({
    description: String,
    price:Number,
    amazonLink:String
});

const WList = mongoose.model('WList', WishListSchema);

module.exports = WList;


// const mongoose = require('mongoose'),
//   Schema = mongoose.Schema;

// const CampsiteSchema = new Schema({
//   description: String
// });

// const Campsite = mongoose.model('Campsite', CampsiteSchema);

// module.exports = Campsite;