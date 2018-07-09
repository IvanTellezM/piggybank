const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  amount: Number,
  note: String
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
