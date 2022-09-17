import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDetail} from '../../redux/actions/index';

function PokemonDetail(props) {

    const dispatch = useDispatch();

    const pokeDetail = useSelector(state => state.detail);

    const id = props.match.params.id;

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

  return (
    <div>
        <h3>{pokeDetail.name}</h3>
        <img src={pokeDetail.image} alt="img Not Found"/>
        <p>HP: {pokeDetail.hp}</p>
        <p>Attack: {pokeDetail.attack}</p>
        <p>Defense: {pokeDetail.defense}</p>
        <p>Speed: {pokeDetail.speed}</p>
    </div>
  )
}

export default PokemonDetail