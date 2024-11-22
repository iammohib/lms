import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../helpers/axiosInstance";

const initialState = {
  key: "",
  subscription_id: "",
  isPaymentVerified: false,
  allPayments: {},
  finalMonths: {},
  monthlySalesRecord: [],
};

export const getRazorpayId = createAsyncThunk("/razorpay/getId", async () => {
  try {
    const res = await axiosInstance.get("/payments/razorpay-key");
    console.log(res.data);
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
});

export const buySubscription = createAsyncThunk(
  "/buySubscription",
  async () => {
    try {
      const res = await axiosInstance.post("payments/subscribe");
      console.log(res.data);
      return res.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const verifySubscription = createAsyncThunk(
  "/verifySubscription",
  async (data) => {
    try {
      const res = await axiosInstance.post("payments/verify", data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const cancelSubscription = createAsyncThunk(
  "/cancelSubscription",
  async () => {
    try {
      const res = axiosInstance.post("payments/unsubscribe");
      toast.promise(res, {
        loading: "unsubscribing the subscription",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to subscription",
      });
      console.log((await res).data);
      return (await res).data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const getAllPayments = createAsyncThunk("/allPayments", async () => {
  try {
    const res = axiosInstance.get("payments?count=100");
    toast.promise(res, {
      loading: "Getting the payment records",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to get payment records",
    });
    console.log((await res).data);
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const razorpaySlice = createSlice({
  name: "razorpay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRazorpayId.fulfilled, (state, action) => {
        state.key = action?.payload?.key;
      })
      .addCase(buySubscription.fulfilled, (state, action) => {
        state.subscription_id = action?.payload?.subscription_id;
      })
      .addCase(verifySubscription.fulfilled, (state, action) => {
        state.isPaymentVerified = action?.payload?.success;
      })
      .addCase(verifySubscription.rejected, (state, action) => {
        state.isPaymentVerified = action?.payload?.success;
      })
      .addCase(getAllPayments.fulfilled, (state, action) => {
        state.allPayments = action?.payload?.allPayments;
        state.finalMonths = action?.payload?.finalMonths;
        state.monthlySalesRecord = action?.payload?.monthlySalesRecord;
      });
  },
});

export default razorpaySlice.reducer;
