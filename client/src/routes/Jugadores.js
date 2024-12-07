import api from "../api/api";
import { useEffect, useState } from "react";
import TileJugador from "../components/TileJugador";
import ListJugadores from "../components/ListJugadores";

export default function Jugadores() {
  const [jug, setJug] = useState(-1);
  const [init, setInit] = useState(false);
  const [jugadores, setJugadores] = useState([]);
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState("");
  const [salidos, setSalidos] = useState([]);
  const [showSalidos, setShowSalidos] = useState(false);

  // Effects debbug
  useEffect(() => {
    console.log(jug);
  }, [jug]);

  useEffect(() => {
    console.log(index);
  }, [index]);

  useEffect(() => {
    console.log(jugadores);
  }, [jugadores]);

  useEffect(() => {
    console.log(salidos);
  }, [salidos]);
  // --------------------------------------------------------

  useEffect(() => {
    const getPlayers = async () => {
      const data = await api.jugadores.getJugadores();
      setJugadores(data);
    };
    getPlayers();
  }, []);

  useEffect(() => {
    if (jugadores.length > 0) {
      setJug(jugadores[0]);
    }
  }, [jugadores]);

  useEffect(() => {
    if (jugadores.length > 0) {
      setJug(jugadores[index]);
    }
  }, [index]);

  useEffect(() => {
    const getImage = async () => {
      const data = await api.jugadores.getFoto(jug.Nombre);
      setImg(data);
    };
    getImage();
    if (jug != -1) {
      setSalidos([...salidos, jug]);
    }
  }, [jug]);

  const sigJugador = () => {
    if (index < jugadores.length - 1) {
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
          <ListJugadores jugadores={salidos} setShow={setShowSalidos} />
        ) : (
          <div className="flex flex-col items-center">
            <TileJugador jugador={jug} img={img} />
            <button onClick={sigJugador} className="w-1/3">
              Próximo jugador
            </button>
            <button onClick={verSalidos} className="w-1/3 mt-3">
              Ver jugadores que salieron
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
