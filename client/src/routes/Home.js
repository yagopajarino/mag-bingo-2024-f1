import { Link } from "react-router-dom";
import GameSelector from "../components/GameSelector";

export default function Home() {
  return (
    <div className="mt-8 w-full h-1/3 flex items-center justify-around">
      <Link to={"../jugadores"} className="w-1/3 h-full">
        <GameSelector>Jugadores</GameSelector>
      </Link>
      <Link to={"../paises"} className="w-1/3 h-full">
        <GameSelector>Paises</GameSelector>
      </Link>
    </div>
  );
}
