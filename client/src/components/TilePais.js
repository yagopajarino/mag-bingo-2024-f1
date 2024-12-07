export default function TilePais({ pais, img }) {
  const toTitle = (str) => {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  };
  return (
    <div className="flex flex-col h-1/2 mt-8 w-full items-center">
      <h1 className=" text-7xl font-medium font-londrina text-center">
        {toTitle(pais.nombre) + " " + pais.año}
      </h1>
      <div className="py-5">
        <img src={img} className="object-cover h-96" />
      </div>
    </div>
  );
}
