import express from "express";
import cors from "cors";
import jugadores from "./routes/jugadores.js";
import paises from "./routes/paises.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("Im alive"));
app.use("/jugadores", jugadores);
app.use("/paises", paises);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
