import fs from "fs";
import { shuffle } from "../helpers.js";

const jugadores = (req, res, next) => {
  const data = getJugadores();
  res.send({
    data: shuffle(data),
  });
};

const getJugadores = () => {
  let rawdata = fs.readFileSync("data/jugadores.json");
  let data = JSON.parse(rawdata);
  return data;
};

const foto = (req, res, next) => {
  const nombre = req.body.Nombre;
  if (nombre == undefined) {
    res.send({ res: "no data" });
  }
  const imgNombre = nombre.toLowerCase().replace(",", "").split(" ").join("_");
  const img = `./data/img_jugadores/${imgNombre}.jpeg`;
  res.sendFile(img, { root: "./" });
};

const checkImages = (req, res, next) => {
  const data = getJugadores();
  const conFoto = data.map((i) => {
    const nombre = i.Nombre.toLowerCase().replace(",", "").split(" ").join("_");
    const url = `./data/img_jugadores/${nombre}.jpeg`;
    if (!fs.existsSync(url)) {
      return url;
    }
  });
  res.send(conFoto.filter((i) => i != null));
};

const controller = {
  jugadores,
  foto,
  checkImages,
};

export default controller;
