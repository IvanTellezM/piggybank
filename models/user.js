const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  balance: Number,
  transactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Transaction"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
