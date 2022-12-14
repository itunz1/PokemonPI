import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/actions/index';
import './PokemonDetail.css'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading';

function PokemonDetail(props) {

  const dispatch = useDispatch();

  const pokeDetail = useSelector(state => state.detail);

  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])

  const loading = useSelector((state) => state.loading);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className='fullpokedex'>
    <div className="pokedex">
      <div className="pokedex-left">
        <div className="pokedex-left-top">
          <div className='light is-sky is-big' />
          <div className="light is-red" />
          <div className="light is-yellow" />
          <div className="light is-green" />
        </div>
        <div className="pokedex-screen-container">
          <h3>{pokeDetail.name} #{pokeDetail.id}</h3>
          {console.log(pokeDetail)}
          <div className='details'>
            <img src={pokeDetail.image} alt="img Not Found" />
            <div className='letters'>
              <p>HP: {pokeDetail.hp}</p>
              <p>Attack: {pokeDetail.attack}</p>
              <p>Defense: {pokeDetail.defense}</p>
              <p>Speed: {pokeDetail.speed}</p>
              <p>Type: {pokeDetail.types?.join(" - ")}</p>
            </div>
            </div>

          </div>
          <div className="pokedex-left-bottom">
            <div className="pokedex-left-bottom-lights">
              <div className="light is-blue is-medium" />
              <div className="light is-green is-large" />
              <div className="light is-orange is-large" />
            </div>
          </div>
          <Link to='/home'>
            <button className="btn-back">volver</button>
          </Link>
        </div>
      </div>
      </div>
      )
}

      export default PokemonDetail