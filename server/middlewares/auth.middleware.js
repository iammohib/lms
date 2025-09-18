import jwt from "jsonwebtoken";
import { AppError } from "../utils/error.util.js";
import asyncHandler from "./asyncHandler.middleware.js";

export const isLoggedIn = async (req, res, next) => {
  try {
    // Exracting token from cookies
    const { token } = req.cookies;
    if (!token) {
      return next(new AppError(400, "Unauthenticated, Please login first"));
    }

    // Verifying the token and get user-id and other details from it
    const userDetails = await jwt.verify(token, process.env.JWT_SECRET);
    if (!userDetails) {
      return next(new AppError(400, "Unauthenticated, Please login first"));
    }
    req.user = userDetails;
    next();
  } catch (error) {
    return next(new AppError(500, error.message));
  }
};

// Middleware for authorization check
export const authorizeRoles =
  (...roles) =>
  async (req, _res, next) => {
    try {
      if (!roles.includes(req.user.role)) {
        return next(
          new AppError(400, "You are not authorized for this action")
        );
      }
      next();
    } catch (error) {
      return next(new AppError(400, "Erver Error !"));
    }
  };

// Middleware to check if user has an active subscription or not
export const authorizeSubscribers = asyncHandler(async (req, _res, next) => {
  // If user is not admin or does not have an active subscription then error else pass
  if (req.user.role !== "ADMIN" && req.user.subscription.status !== "active") {
    return next(new AppError("Please subscribe to access this route.", 403));
  }

  next();
});
