const mongoose = require("mongoose");
const db = require("../models");

// This file empties the expenses collection and inserts the expenses below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/piggybank"
);

const TransactionSeeds = [
  {
    title: "Ivan",
    category: "Entertainment",
    date: "2018-06-19T17:48:39.611Z",
    amount: "50",
    note: "Movies with friends"
  },
  {
    title: "gas money",
    category: 'Transportation',
    date: "2018-06-19917:48:39.611Z",
    amount: "99",
    note: "SUV gas"
  },
  {
    title: "School",
    category: 'Transportation',
    date: "2018-06-19917:48:39.611Z",
    amount: "50",
    note: "BART cliper card"
  },
  {
    title: "dinner with family",
    category: 'Entertainment',
    date: "2018-06-20917:48:39.611Z",
    amount: "240",
    note: "Dinner at Chevys"
  },
  {
    title: "water bill",
    category: "Utilities",
    date: "2018-06-19919:48:39.611Z",
    amount: "120",
    note: "EBMUN water bill"
  },
  {
    title: "PG&E bill",
    category: "Utilities",
    date: "2018-06-13919:48:39.611Z",
    amount: "78",
    note: "Electricity and Gas bill"
  },
  {
    title: "School lunch money",
    category: "Food",
    date: "2018-06-11919:48:39.611Z",
    amount: "50",
    note: "Lunch"
  },
  {
    title: "vacations",
    category: "Other",
    date: "2018-06-11913:48:39.611Z",
    amount: "700",
    note: "booked vacations in Las Vegas"
  },
  {
    title: "Tv repair",
    category: "Other",
    date: "2018-06-12212:48:39.611Z",
    amount: "99",
    note: "Bedroom tv repair"
  },
  {
    title: "fridge repair",
    category: "Other",
    date: "2018-06-11214:45:39.611Z",
    amount: "200",
    note: "Fridge repair"
  },
  {
    title: "Dinner with friends",
    category: "Food",
    date: "2018-06-15311:45:29.611Z",
    amount: "110",
    note: "Dinner with friends at Jupiters"
  },
  {
    title: "Grocery shopping",
    category: "Groceries",
    date: "2018-06-18312:48:39.611Z",
    amount: "340",
    note: "Safeway"
  },
  {
    title: "Camping stuff",
    category: "Other",
    date: "2018-06-13314:45:34.611Z",
    amount: "320",
    note: "Camping gear at Walmart"
  },
  {
    title: "BART",
    category: "Transportation",
    date: "2018-06-13359:48:35.611Z",
    amount: "10",
    note: "Bart ride"
  },
  {
    title: "ticket concert",
    category: "Entertainment",
    date: "2018-06-14349:45:35.411Z",
    amount: "80",
    note: "Guns and Roses ticket"
  }
];

db.Transaction
  .remove({})
  .then(() => db.Transaction.collection.insertMany(TransactionSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
