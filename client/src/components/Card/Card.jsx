import React from "react";
import './Card.css';


export default function Card({ name, image, types }) {

  let typePokemon = types.map((e, index) => {
    const nameType = e.name ? e.name : e;
    return <p key={index}>{nameType}</p>;

  });

  return (


    <div className="card">
      <div className="card-info">
        <img className="imgCard" src={image} alt="img not"/>
        <p className="title">{name}</p>
        <p className="subtitle">{typePokemon}</p>
      </div>
    </div>

  );
}
