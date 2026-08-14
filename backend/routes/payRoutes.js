const express = require("express");
const { createOrder } = require("../controller/createOrder");
const protect = require("../middleware/authMiddleware");

const { verifyPayment } = require("../controller/verifyPayment");

const router = express.Router();

router.post(
  "/create-order",
  protect,
  createOrder
);

router.post(
  "/verify-payment",
  protect,
  verifyPayment
);

module.exports = router;