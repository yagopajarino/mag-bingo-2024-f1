import api from "../api/api";
import { useEffect, useState } from "react";
import TilePais from "../components/TilePais";
import ListPaises from "../components/ListPaises";

export default function Paises() {
  const [pais, setPais] = useState(-1);
  const [init, setInit] = useState(false);
  const [paises, setPaises] = useState([]);
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState("");
  const [salidos, setSalidos] = useState([]);
  const [showSalidos, setShowSalidos] = useState(false);

  useEffect(() => {
    const getPaises = async () => {
      const data = await api.paises.getPaises();
      setPaises(data);
    };
    getPaises();
  }, []);

  useEffect(() => {
    if (paises.length > 0) {
      setPais(paises[0]);
    }
  }, [paises]);

  useEffect(() => {
    if (paises.length > 0) {
      setPais(paises[index]);
    }
  }, [index]);

  useEffect(() => {
    const getImage = async () => {
      const data = await api.paises.getFoto(pais.nombre);
      setImg(data);
    };
    getImage();
    if (pais != -1) {
      setSalidos([...salidos, pais]);
    }
  }, [pais]);

  const siguiente = () => {
    if (index < paises.length - 1) {
      setIndex(index + 1);
    }
  };

  const verSalidos = () => {
    setShowSalidos(true);
  };

  return (
    <div>
      {init ? (
        showSalidos ? (
          <ListPaises paises={salidos} setShow={setShowSalidos} />
        ) : (
          <div className="flex flex-col items-center">
            <TilePais pais={pais} img={img} />
            <button onClick={siguiente} className="w-1/4">
              Proximo país
            </button>
            <button onClick={verSalidos} className="w-1/3 mt-3">
              Ver países que salieron
            </button>
          </div>
        )
      ) : (
        <button onClick={() => setInit(true)}>Iniciar</button>
      )}
    </div>
  );
}
