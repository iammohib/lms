import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../helpers/axiosInstance";
const initialState = {
  courseData: [],
};

export const getAllCourses = createAsyncThunk("/courses/get", async () => {
  try {
    const res = axiosInstance.get("/courses");
    toast.promise(res, {
      loading: "Wait! course is loading",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to get course",
    });
    return (await res).data.courses;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const createCourse = createAsyncThunk("/course/create", async (data) => {
  try {
    const res = axiosInstance.post("/courses", data);
    toast.promise(res, {
      loading: "Wait! creating the course",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to create course",
    });
    return (await res).data;
  } catch (error) {
    console.log("error", error);
    toast.error(error?.response?.data?.message);
  }
});

export const deleteCourse = createAsyncThunk("/course/delete", async (id) => {
  try {
    const res = axiosInstance.delete(`/courses/${id}`);
    toast.promise(res, {
      loading: "Wait! deleting course in progress...",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to delete course",
    });
    return (await res).data.courses;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      if (action.payload) {
        state.courseData = [...action.payload];
      }
    });
  },
});

export default courseSlice.reducer;
