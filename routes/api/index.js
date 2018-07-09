const router = require("express").Router();
const userRoutes = require("./users");
const transactionRoutes = require("./transactions");
const login = require("./../")


router.use("/users", userRoutes);
router.use("/tranactions", transactionRoutes);

module.exports = router;
