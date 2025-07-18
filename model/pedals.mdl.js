const { Schema, model } = require('mongoose');

const PedalSchema = new Schema({
  productId: String,
  conditionUuid: String,
  title: String,
  brand: String,
  productId: String,
  condition: {
    uuid: String,
    display_name: String,
    slug: String
  },
  price: {
    amount: Number,
    amount_cents: Number,
    currency: String,
    symbol: String,
    display: String
  },
  url: String,
  photos: [String],
  createdAt: { type: Date, default: Date.now }
});

const Pedal = model('Pedal', PedalSchema);
module.exports = Pedal;