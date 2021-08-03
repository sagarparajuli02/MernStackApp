import express from "express";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const PORT = 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/post", postRoutes);

const DB_CONNECTION =
  "mongodb+srv://sagarparajuli02:hellboy02@cluster0.q3hks.mongodb.net/PostDatabase?retryWrites=true&w=majority";

mongoose
  .connect(DB_CONNECTION, { useNewUrlParser: true })
  .then(console.log("connected"))
  .catch((err) => console.log(err.message));

app.listen(PORT);
