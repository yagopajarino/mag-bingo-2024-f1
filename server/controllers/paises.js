import fs from "fs";
import { shuffle } from "../helpers.js";

const paises = (req, res, next) => {
  const data = getPaises();
  res.send({ data: shuffle(data) });
};

const getPaises = () => {
  let rawdata = fs.readFileSync("./data/paises.json");
  let data = JSON.parse(rawdata);
  return data;
};

const foto = (req, res, next) => {
  const nombre = req.body.nombre;
  const img = `./data/img_paises/${nombre.replaceAll(" ", "_")}.jpg`;
  res.sendFile(img, { root: "./" });
};

const checkImages = (req, res, next) => {
  const data = getPaises();
  const conFoto = data.map((i) => {
    const nombre = i.nombre.toLowerCase().replaceAll(" ", "_");
    const url = `./data/img_paises/${nombre}.jpg`;
    return fs.existsSync(url);
  });
  const sinFaltantes = conFoto.every((i) => i);
  res.send(sinFaltantes);
};

const controller = {
  paises,
  foto,
  checkImages,
};

export default controller;
