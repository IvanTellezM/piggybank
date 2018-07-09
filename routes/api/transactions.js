const router = require("express").Router();
const tranactionsController = require("../../controllers/transactionController");

// Matches with "/api/tranactions"
router.route("/")
  .get(tranactionsController.findAll)
  .post(tranactionsController.create);

// Matches with "/api/tranactions/:id"
router
  .route("/:id")
  .get(tranactionsController.findById)
  .put(tranactionsController.update)
  .delete(tranactionsController.remove);

module.exports = router;
