import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

//import routes
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";

//middlewares
dotenv.config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

// Connect to the database
try {
  mongoose.connect(URI).then(() => {
    console.log("Connected to MongoDB");
  });
} catch (error) {
  console.log("Database connection error:", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
