import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  getTypes,
  filerByName,
  filterByAttack,
  filterByType,
  filterCreate, } from '../../redux/actions/index';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import Paginado from '../Paginado/Paginado';
import Loading from '../Loading/Loading';
import pokedex from './pokedeex.png'
import './Home.css'



function Home() {

  const [, setFilter] = useState("");

  const dispatch = useDispatch();
  let allPokemons = useSelector((state) => state.pokemons);
  let allPokemonss = useSelector((state) => state.allPokemons);
  const allPokemonsFilter = useSelector((state) => state.filter);
  const {loading} = useSelector(state => state)

  console.log(allPokemonss)


  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const lastPokemon = currentPage * pokemonsPerPage;
  const firstPokemon = lastPokemon - pokemonsPerPage;
  let currentPokemons = allPokemons.slice(firstPokemon, lastPokemon);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const objT = allPokemonsFilter.map(e => e.types);
  const NewArr = [];
  objT.map((e) => e.forEach((l) => NewArr.push(l.name ? l.name : l)));
  const types = [...new Set(NewArr)]


  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
    return console.log("se desmonto")
  }, [dispatch]);


  // function handleClick(e) {
  //   e.preventDefault();
  //   dispatch(getPokemons());
  // }

  function handleType(e) {
    e.preventDefault();
    dispatch(filterByType(e.target.value));
    setCurrentPage(1)
  }

  function handleCreate(e) {
    e.preventDefault();
    dispatch(filterCreate(e.target.value));
    setCurrentPage(1)
  }

  function handleName(e) {
    e.preventDefault();
    dispatch(filerByName(e.target.value))
    setFilter(e.target.value)
    setCurrentPage(1);
    
  }

  function handleAttack(e) {
    e.preventDefault();
    dispatch(filterByAttack(e.target.value))
    setFilter(e.target.value)
    setCurrentPage(1)
  }

  if (loading) {
    return <Loading />;
  }
  

  return (
    <div className='back'>
      <img src={pokedex} alt="Img not found"/>
      {/* <button className='load-btn' onClick={(e) => { handleClick(e) }}>
        Cargar todos los Pokemons
      </button> */}

      <SearchBar />

      <div className='selector'>
        <div>
          <label className='label'>Ordernar por nombre</label>
          <select className='selector-az' onChange={e => { handleName(e) }}>
            <option value="abc">A-Z</option>
            <option value="zxy">Z-A</option>
          </select>
        </div>

        <div>
          <label className='label'>Ordenar por ataque</label>
          <select className='selector-az' onChange={e => { handleAttack(e) }}>
            <option value="attack+">Attack -</option>
            <option value="attack-">Attack +</option>
          </select>
        </div>

        <div>
          <label className='label'>ordenar por tipos</label>
          <select className='selector-az' onChange={e => handleType(e)}>
            <option value="all">All</option>
            {types?.map((e, index) => (
              <option key={index} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>

        <div>
        <label className='label'>Origen o creados</label>
        <select className='selector-az' onChange={e => handleCreate(e)}>
          <option value='all'>All</option>
          {/* <option value='api'>Api</option> */}
          <option value='createDb'>Creados</option>
        </select>
      </div>

      </div>

      <div>
        <div>
          {allPokemons && (
            <Paginado
              pokemonsPerPage={pokemonsPerPage}
              allPokemons={allPokemons.length}
              paginado={paginado} />)}
        </div>
        <div className='cartas'>
          {currentPokemons && currentPokemons.map((el, i) => {
            return (
              <div className='linkPoke' key={i}>
                {/* <Link key={i} to={`/pokemon/${el.id}`}>  */}
                  <Card
                    key={i}
                    name={el.name}
                    image={el.image}
                    types={el.types}
                    createInData={el.createInData}
                    id={el.id}
                    />
                    {/* </Link>  */}
              </div>
            );
          })}
        </div>

      </div>
         
    </div>
  )
}

export default Home