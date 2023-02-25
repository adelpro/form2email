const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const rateLimiter = require("../middlewares/rateLimiter");
const feedbackValidation = require("../validation/feedback");

router
  .route("/")
  .post(rateLimiter, feedbackValidation.validate, feedbackController.feedback);

module.exports = router;
