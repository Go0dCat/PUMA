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
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
