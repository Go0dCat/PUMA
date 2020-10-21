const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SiteSchema = new Schema({
  SiteId: {
    type:String,
    required: [true, 'SiteId is required']
  },
  Address: {
    type: String,
    required: [true, 'Address is required']
  },
  DisplayName: {
    type: String,
    required: [true, 'DisplayName is required']
  },
  PostalCode: {
    type: String,
    required: [true, 'PostalCode is required']
  },
  City: {
    type: String,
    required: [true, 'City is required']
  },
  County: {
    type: String,
    required: [true, 'County is required']
  },
  OpeningHours: {
    type: String,
    required: [true, 'OpeningHours is required']
  },
  Name: {
    type: String,
    required: [true, 'Name is required']
  },
  Position: [{
      Long: {
        type: Number,
        required: [true, 'Position long is required']
      },
      Lat: {
          type: Number,
          required: [true, 'Position lat is required']
      },
  }]
});

const Site = mongoose.model('Site', SiteSchema);

module.exports = Site;
