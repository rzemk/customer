import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: { type: String, required: true },
  account: { type: String },
  stuff: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Customer', customerSchema);
