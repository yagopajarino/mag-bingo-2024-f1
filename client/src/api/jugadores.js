const getJugadores = async () => {
  const url = process.env.REACT_APP_API_ENDPOINT + "/jugadores";
  const result = await fetch(url).then((r) => r.json());
  return result.data;
};

const getFoto = async (nombre) => {
  const url = process.env.REACT_APP_API_ENDPOINT + "/jugadores/foto";
  const data = JSON.stringify({
    Nombre: nombre,
  });
  const result = await fetch(url, {
    method: "POST",
    body: data,
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.blob())
    .then((blob) => URL.createObjectURL(blob));
  return result;
};

const jugadores = {
  getJugadores,
  getFoto,
};

export default jugadores;
