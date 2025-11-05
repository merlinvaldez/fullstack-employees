import express from "express";
const app = express();
export default app;
import router from "#api/employees";

// TODO: this file!
app.use(express.json());

app.use("/", router);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("sorry! Something Went Wrong");
});
