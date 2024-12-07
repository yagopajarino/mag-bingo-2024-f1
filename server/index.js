import express from "express";
import cors from "cors";
import f1 from "./routes/f1.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("Im alive"));
app.use("/f1", f1);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
