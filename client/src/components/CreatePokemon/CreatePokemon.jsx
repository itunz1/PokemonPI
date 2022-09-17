import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom' ;
import { useDispatch, useSelector } from 'react-redux';
import { postPokemon, getTypes, getPokemons } from '../../redux/actions/index';




function CreatePokemon() {

    const dispatch = useDispatch()

    const types = useSelector(state => state.allTypes);

    const [state, setState] = useState({
        name: "",
        types: [],
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: "",
    });

    const change = (e) => {
        setState({...state, [e.target.name]: e.target.value})
      }

    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
    }, [dispatch])


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postPokemon(state))
    }

  return (
    <div>
        <div>
            <h1>Crea tu pokemon</h1>
        </div>

        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type='text' name='name' value={state.name} onChange={change} />

                <label>HP: </label>
                <input type='number' name='hp' value={state.hp} onChange={change} />

                <label>Attack: </label>
                <input type='number' name='attack' value={state.attack} onChange={change} />

                <label>Defense: </label>
                <input type='number' name='defense' value={state.defense} onChange={change} />

                <label>Speed: </label>
                <input type='number' name='speed' value={state.speed} onChange={change} />

                <label>Height: </label>
                <input type='number' name='height' value={state.height} onChange={change} />

                <label>weight: </label>
                <input type='number' name='weight' value={state.weight} onChange={change} />

                <label>Image: </label>
                <input type='text' name='image' value={state.image} onChange={change} />

                <button type='submit'>Create Pokemon</button>

            </form>
        </div>
    </div>
  )
}

export default CreatePokemon