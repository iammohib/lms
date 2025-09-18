import { v2 as cloudinary } from "cloudinary";
import Razorpay from "razorpay";

import app from "./app.js";
import { connectToDb } from "./configs/db.js";

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME;

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Razorpay configuration
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

app.listen(PORT, async () => {
  // Db connection
  connectToDb();
  console.log(`App is live at http://${HOSTNAME}:${PORT}`);
});
