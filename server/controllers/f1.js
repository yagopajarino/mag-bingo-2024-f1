import fs from "fs";
import { shuffle } from "../helpers.js";

const f1 = (req, res, next) => {
  const data = getf1();
  res.send({
    data: shuffle(data),
  });
};

const getf1 = () => {
  let rawdata = fs.readFileSync("data/f1.json");
  let data = JSON.parse(rawdata);
  return data;
};

const foto = (req, res, next) => {
  const id = req.body.id;
  if (id == undefined) {
    res.send({ res: "no data" });
  }
  const img = `./data/img_f1/${id}.jpg`;
  res.sendFile(img, { root: "./" });
};

const checkImages = (req, res, next) => {
  const data = getf1();
  const conFoto = data.map((i) => {
    const id = i.id;
    const url = `./data/img_f1/${id}.jpeg`;
    if (!fs.existsSync(url)) {
      return url;
    }
  });
  res.send(conFoto.filter((i) => i != null));
};

const controller = {
  f1,
  foto,
  checkImages,
};

export default controller;
