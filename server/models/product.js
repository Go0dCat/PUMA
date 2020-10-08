const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  ProductId: {
    type:String,
    required: [true, 'ProductId is required']
  },
  ProductNumber: {
    type: String,
    required: [true, 'ProductNumber is required']
  },
  ProductNameBold: {
    type: String,
    required: [true, 'ProductNameBold is required']
  },
  ProductNameThin: {
    type: String,
    required: false
  },
  Category: {
    type: String,
    required: [true, 'Category is required']
  },
  BottleTextShort: {
    type: String,
    required: false
  },
  Seal: {
    type: String,
    required: false
  },
  AlcoholPercentage: {
    type: Number,
    required: [true, 'AlcoholPercentage is required']
  },
  Volume: {
    type: Number,
    required: [true, 'Volume is required']
  },
  Price: {
    type: Number,
    required: [true, 'Price is required']
  },
  SubCategory: {
    type: String,
    required: [true, 'SubCategory is required']
  },
  Type: {
    type: String,
    required: [true, 'Type is required']
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
