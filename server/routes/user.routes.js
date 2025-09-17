import { Router } from "express";
import {
  register,
  login,
  logout,
  getUser,
  changePassword,
  changeProfilePic,
  forgotPassword,
  resetPassword,
  updateProfile,
  changeEmail,
  verifyEmail,
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const userRouter = Router();

userRouter.post("/register", upload.single("avatar"), register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.get("/me", isLoggedIn, getUser);
userRouter.post("/change-password", isLoggedIn, changePassword);
userRouter.post(
  "/changeprofilepic",
  isLoggedIn,
  upload.single("avatar"),
  changeProfilePic
);
userRouter.post("/reset", forgotPassword);
userRouter.post("/reset/:resetToken", resetPassword);
userRouter.put(
  "/update/:id",
  isLoggedIn,
  upload.single("avatar"),
  updateProfile
);
userRouter.put("/changeemail", isLoggedIn, changeEmail);
userRouter.put("/verifyemail", isLoggedIn, verifyEmail);

export { userRouter };
