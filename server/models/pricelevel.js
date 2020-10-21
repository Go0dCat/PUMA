const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PriceLevelSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Price level name is required']
  },
  limits: [{
    beverage: {
      type: String,
      required: [true, 'Beverage name is required']
    },
    lowerlimit: {
      type: Number,
      default: 0,
      min: 0,
      required: false,
    },
    upperlimit: {
      type: Number,
      min: 0,
      required: false,
    },
  }]
});

const PriceLevel = mongoose.model('PriceLevel', PriceLevelSchema);

module.exports = PriceLevel;
