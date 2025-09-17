import { Router } from "express";
import {
  createCourse,
  getAllCourses,
  addLectureToCourseById,
  getLecturesByCourseId,
  removeLectureFromCourse,
  updateCourseById,
  deleteCourseById,
} from "../controllers/course.controller.js";
import { isLoggedIn, authorizeRoles } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const courseRouter = Router();

courseRouter
  .route("/")
  .get(getAllCourses)
  .post(
    isLoggedIn,
    authorizeRoles("ADMIN"),
    upload.single("thumbnail"),
    createCourse
  )
  .delete(isLoggedIn, authorizeRoles("ADMIN"), removeLectureFromCourse);

courseRouter
  .route("/:id")
  .get(isLoggedIn, getLecturesByCourseId)
  .post(
    isLoggedIn,
    authorizeRoles("ADMIN"),
    upload.single("lecture"),
    addLectureToCourseById
  )
  .put(
    isLoggedIn,
    authorizeRoles("ADMIN"),
    upload.single("thumbnail"),
    updateCourseById
  )
  .delete(isLoggedIn, authorizeRoles("ADMIN"), deleteCourseById);

export { courseRouter };
