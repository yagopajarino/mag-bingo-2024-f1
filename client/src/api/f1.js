const getAll = async () => {
  const url = process.env.REACT_APP_API_ENDPOINT + "/f1";
  const result = await fetch(url).then((r) => r.json());
  return result.data;
};

const getFoto = async (id) => {
  const url = process.env.REACT_APP_API_ENDPOINT + "/f1/foto";
  const data = JSON.stringify({
    id: id,
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

const f1 = {
  getAll,
  getFoto,
};

export default f1;
