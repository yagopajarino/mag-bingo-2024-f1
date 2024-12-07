import { useEffect, useState } from "react";

export default function ListJugadores({ jugadores, setShow }) {
  return (
    <div>
      {jugadores
        .sort((a, b) => {
          if (a.Nombre > b.Nombre) {
            return 1;
          } else {
            return -1;
          }
        })
        .map((i, index) => {
          return (
            <div className="mx-24">
              <p className="text-3xl my-3">
                {index + 1}. {i.Nombre}
              </p>
            </div>
          );
        })}
      <button className="my-5" onClick={() => setShow(false)}>
        Volver
      </button>
    </div>
  );
}
