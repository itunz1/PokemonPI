import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postPokemon, getTypes, getPokemons } from '../../redux/actions/index';
import './CreatePokemon.css'
import img from './pikachu.png'



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
        setState({ ...state, [e.target.name]: e.target.value })
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
            <img src={img} alt="img not found"/>
            <div>
                <h1>Crea tu pokemon</h1>
            </div>

            <div className='input-group'>
                <form className='form-create' onSubmit={handleSubmit}>
                    <div>
                        <label className='label'>Name: </label>
                        <input className='input' type='text' name='name' value={state.name} onChange={change} />
                    </div>

                    <div>
                        <label className='label'>HP: </label>
                        <input className='input' type='number' name='hp' value={state.hp} onChange={change} />
                    </div>

                    <div>
                        <label className='label'>Attack: </label>
                        <input className='input' type='number' name='attack' value={state.attack} onChange={change} />
                    </div>

                    <div>
                        <label className='label'>Defense: </label>
                        <input className='input' type='number' name='defense' value={state.defense} onChange={change} />
                    </div>

                    <div>
                        <label className='label'>Speed: </label>
                        <input className='input' type='number' name='speed' value={state.speed} onChange={change} />
                    </div>

                    <div>
                        <label className='label'>Height: </label>
                        <input className='input' type='number' name='height' value={state.height} onChange={change} />
                    </div>

                    <div>
                        <label className='label'>weight: </label>
                        <input className='input' type='number' name='weight' value={state.weight} onChange={change} />
                    </div>

                    <div>
                        <label className='label'>Image: </label>
                        <input className='input' type='text' name='image' value={state.image} onChange={change} />
                    </div>

                    <button className='btn' type='submit'>Create Pokemon</button>

                </form>
            </div>
        </div>
    )
}

export default CreatePokemon