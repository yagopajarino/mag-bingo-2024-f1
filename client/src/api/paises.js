const getPaises = async () => {
  const url = process.env.REACT_APP_API_ENDPOINT + "/paises";
  const result = await fetch(url).then((r) => r.json());
  return result.data;
};

const getFoto = async (nombre) => {
  const url = process.env.REACT_APP_API_ENDPOINT + "/paises/foto";
  const data = JSON.stringify({
    nombre: nombre,
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

const paises = {
  getPaises,
  getFoto,
};

export default paises;
