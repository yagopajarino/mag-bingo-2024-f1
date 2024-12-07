import { useEffect, useState } from "react";

export default function ListF1({ items, setShow }) {
  const toTitle = (str) => {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  };
  return (
    <div>
      {items
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
                {index + 1}. {toTitle(i.nombre) + " " + i.tipo}
              </p>
            </>
          );
        })}
      <button onClick={() => setShow(false)}>Volver</button>
    </div>
  );
}
