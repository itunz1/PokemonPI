import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  getTypes,
} from '../../redux/actions/index';
import { Link } from "react-router-dom";
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import Paginado from '../Paginado/Paginado';



function Home() {

  const dispatch = useDispatch();
  let allPokemons = useSelector((state) => state.pokemons);
  const allPokemonsFilter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);


  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const lastPokemon = currentPage * pokemonsPerPage;
  const firstPokemon = lastPokemon - pokemonsPerPage;
  let currentPokemons = allPokemons.slice(firstPokemon, lastPokemon);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1> POKEMON API </h1>
      <button onClick={(e) => {handleClick(e)}}>
        Cargar todos los Pokemons
      </button>
      <SearchBar/>

      <div>
         <div>
        {allPokemons && (
          <Paginado
            pokemonsPerPage={pokemonsPerPage}
            allPokemons={allPokemons.length}
            paginado={paginado}/>)}
        </div>
        <div> 
      {currentPokemons?.map((el, i) => {
        return (
          <>
            <Link to={`/pokemon/${el.id}`}>
          <div key= {i}>
              <Card
                key={i}
                name={el.name}
                image={el.image}
                types={el.types}
              />
          </div>
            </Link>
          </>
        );
      })}
      </div>

      </div>

    </div>
  )
}

export default Home