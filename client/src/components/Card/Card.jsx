import React from "react";
import { removePoke } from '../../redux/actions/index';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './Card.css';


export default function Card({ name, image, types, createInData, id }) {

  let typePokemon = types.map((e, index) => {
    const nameType = e.name ? e.name : e;
    return <p key={index}>{nameType}</p>;
  });

  const dispatch = useDispatch()

  function deletePoke(){
    if(createInData) {
      return <button className="delete-btn" onClick={() => dispatch(removePoke(id))}>X</button>
  }
}

  return (

    <div className="card">
      <div className="">
        {deletePoke()}
      </div>
      <Link to={`/pokemon/${id}`}>
      <div className="card-info">
        <img className="imgCard" src={image} alt="img not"/>
        <p className="title">{name}</p>
        <span className="subtitle">{typePokemon}</span>
      </div>
        </Link>
    </div>

  );
}
