import api from "../api/api";
import { useEffect, useState } from "react";
import TileF1 from "../components/TileF1";
import ListF1 from "../components/ListF1";

export default function F1() {
  const [item, setItem] = useState(-1);
  const [init, setInit] = useState(false);
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState("");
  const [salidos, setSalidos] = useState([]);
  const [showSalidos, setShowSalidos] = useState(false);

  // Effects debbug
  useEffect(() => {
    console.log(item);
  }, [item]);

  useEffect(() => {
    console.log(index);
  }, [index]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    console.log(salidos);
  }, [salidos]);
  // --------------------------------------------------------

  useEffect(() => {
    const getPlayers = async () => {
      const data = await api.f1.getAll();
      setItems(data);
    };
    getPlayers();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      setItem(items[0]);
    }
  }, [items]);

  useEffect(() => {
    if (items.length > 0) {
      setItem(items[index]);
    }
  }, [index]);

  useEffect(() => {
    const getImage = async () => {
      const data = await api.f1.getFoto(item.id);
      setImg(data);
    };
    getImage();
    if (item != -1) {
      setSalidos([...salidos, item]);
    }
  }, [item]);

  const sigJugador = () => {
    if (index < items.length - 1) {
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
          <ListF1 items={salidos} setShow={setShowSalidos} />
        ) : (
          <div className="flex flex-col items-center">
            <TileF1 item={item} img={img} />
            <button onClick={sigJugador} className="w-1/3">
              Siguiente
            </button>
            <button onClick={verSalidos} className="w-1/3 mt-3">
              Ver todos
            </button>
          </div>
        )
      ) : (
        <button onClick={() => setInit(true)} className="w-1/3">
          Iniciar
        </button>
      )}
    </div>
  );
}
