const router = require("express").Router();
const userRoutes = require("./users");
const transactionRoutes = require("./transactions");



router.use("/users", userRoutes);
router.use("/transactions", transactionRoutes);

module.exports = router;
