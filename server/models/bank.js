import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bankSchema = new Schema({
  name: { type: String },
  balance: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bank', bankSchema);
