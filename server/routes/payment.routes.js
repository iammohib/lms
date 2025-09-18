import { Router } from "express";
import {
  getRazorpayApiKey,
  buySubscription,
  verifySubscription,
  cancelSubscription,
  allPayments,
} from "../controllers/payment.controller.js";
import {
  authorizeRoles,
  authorizeSubscribers,
  isLoggedIn,
} from "../middlewares/auth.middleware.js";

const paymentRouter = Router();

paymentRouter.route("/subscribe").post(isLoggedIn, buySubscription);
paymentRouter.route("/verify").post(isLoggedIn, verifySubscription);
paymentRouter
  .route("/unsubscribe")
  .post(isLoggedIn, authorizeSubscribers, cancelSubscription);
paymentRouter.route("/razorpay-key").get(isLoggedIn, getRazorpayApiKey);
paymentRouter.route("/").get(isLoggedIn, authorizeRoles("ADMIN"), allPayments);

export { paymentRouter };
