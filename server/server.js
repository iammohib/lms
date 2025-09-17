import { v2 as cloudinary } from "cloudinary";

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

app.listen(PORT, async () => {
  // Db connection
  connectToDb();
  console.log(`App is live at http://${HOSTNAME}:${PORT}`);
});
