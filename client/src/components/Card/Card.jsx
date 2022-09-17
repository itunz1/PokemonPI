import React from "react";


export default function Card({ name, image, types }) {

  let typePokemon = types.map((e, index) => {
    const nameType = e.name ? e.name : e;
    return <p key={index}>{nameType}</p>;
    
  });

 

  return (
      <div> 
        <div>
        <br/>

      <div>
        <h1>{name}</h1>
      </div>

      <div>
        <img src={image} alt="img not" width="150" height="150" />
      </div>

      <div>
        <h4>{typePokemon}</h4>
      </div>
      <br/>
</div>
      </div>

  );
}
