export default function TileJugador({ jugador, img }) {
  return (
    <div className="flex flex-col h-1/2 mt-8 w-full">
      <h1 className=" text-7xl font-medium font-londrina text-center">
        {jugador.Nombre.toUpperCase()}
      </h1>
      <div className="flex pt-8 pb-3 justify-end">
        <img src={img} className="object-cover h-96" />
        <div className="text-5xl font-londrina font-light pl-5 w-1/2">
          <table className="w-full">
            <tbody>
              <tr>
                <td>Partidos</td>
                <td>{jugador.Partidos}</td>
              </tr>
              <tr>
                <td>Goles</td>
                <td>{jugador.Goles}</td>
              </tr>
              <tr>
                <td>Debut</td>
                <td>{jugador.Desde}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
