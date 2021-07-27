import express from "express";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

const DB_CONNECTION =
  "mongodb+srv://sagarparajuli02:hellboy02@cluster0.q3hks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(DB_CONNECTION, { useNewUrlParser: true })
  .then(console.log("connected"))
  .catch((err) => console.log(err.message));

app.listen(3000);
