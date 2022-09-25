import React from "react";
import './Paginado.css'

export default function Paginado({ pokemonsPerPage, allPokemons, paginado }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <div className="paginado">
        {pageNumber &&
          pageNumber.map((n ) => (
            <button className="paginado-btn" onClick={() => paginado(n)} key={n}>
              {n}
            </button>
          ))}
      </div>
    </div>
  );
}
