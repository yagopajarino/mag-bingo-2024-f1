import { useEffect, useState } from "react";

export default function ListPaises({ paises, setShow }) {
  const toTitle = (str) => {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  };
  return (
    <div>
      {paises
        .sort((a, b) => {
          if (a.nombre > b.nombre) {
            return 1;
          } else {
            return -1;
          }
        })
        .map((i, index) => {
          return (
            <>
              <p className="text-3xl my-3">
                {index + 1}. {toTitle(i.nombre) + " " + i.año}
              </p>
            </>
          );
        })}
      <button onClick={() => setShow(false)}>Volver</button>
    </div>
  );
}
