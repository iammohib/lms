import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./slices/authSlice";
import courseSliceReducer from "./slices/courseSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    course: courseSliceReducer,
  },
});

export default store;
