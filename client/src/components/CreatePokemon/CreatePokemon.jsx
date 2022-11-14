import React from 'react'
import { useState, useEffect } from 'react';
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
    const [errors, setErrors] = useState({});

    const change = (e) => {
        setState({ ...state, [e.target.name]: e.target.value, });
        setErrors(validate({ ...state, [e.target.name]: e.target.value },));
    }

    const handleTypes = (e) => {
        setState({ ...state, types: [...state.types, e.target.value], })
        setErrors(validate({ ...state, types: [...state.types, e.target.value] },));
    }

    function handleDelete(t, e) {
        e.preventDefault();
        setState({ ...state, types: state.types.filter((x) => x !== t), });
    }

    function validate(state) {
        let errors = {};
        if (!state.name) {
            errors.name = "Name is required"
        } else if (!/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g.test(state.name)) {
            errors.name = "Name cannot contain special characters"
        }
        if (!state.hp) {
            errors.hp = "A number is required"
        } else if (state.hp < 1 || state.hp > 255) {
            errors.hp = "Need a number between 1 and 255"
        }
        if (!state.attack) {
            errors.attack = "A number is required"
        } else if (state.attack < 1 || state.attack > 255) {
            errors.attack = "Need a number between 1 and 255"
        }
        if (!state.defense) {
            errors.defense = "A number is required"
        } else if (state.defense < 1 || state.defense > 255) {
            errors.defense = "Need a number between 1 and 255"
        }
        if (!state.speed) {
            errors.speed = "A number is required"
        } else if (state.speed < 1 || state.speed > 255) {
            errors.speed = "Need a number between 1 and 255"
        }
        if (!state.height) {
            errors.height = "A number is required"
        } else if (state.height < 1 || state.height > 255) {
            errors.height = "Need a number between 1 and 255"
        }
        if (!state.weight) {
            errors.weight = "A number is required"
        } else if (state.weight < 1 || state.weight > 255) {
            errors.weight = "Need a number between 1 and 255"
        }
        if (state.types.length === 0) {
            errors.types = "need a type"
        } else if (state.types.length > 2) {
            errors.types = "Only 2 types are allowed"
        } else if (state.types[0] === state.types[1]) {
            errors.types = "Cant repeat the types"
        }

        return errors;
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postPokemon(state))
        setState({
            name: "",
            types: [],
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            image: "",
        })
    }

    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
    }, [dispatch])



    return (
        <div>
            <img className='img-create' src={img} alt="img not found" />
            <div>
                <h1>Crea tu pokemon</h1>
            </div>

            <div className='input-group'>
                <form className='form-create' onSubmit={e => handleSubmit(e)}>

                    <span className='type'>
                        <div className='label-type'>
                            <label className='label'>Type</label>
                            <select name='types' onChange={e => handleTypes(e)}>
                                {types.map((ele, index) => (
                                    <option key={index} value={ele.name}>
                                        {ele.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {errors.types && (<p className="danger">{errors.types}</p>)}
                        <div className='filter-option'>
                            {state.types.map((t, index) => (
                                <span className='filter' key={index}>
                                    <span className='span-letters'>{t}</span>
                                    <button className='types-btn' onClick={e => handleDelete(t, e)}>x</button>
                                </span>
                            ))}
                        </div>
                    </span>

                    <div>
                        <label className='label'>Name: </label>
                        <input className='input' type='text' name='name' value={state.name} onChange={e => change(e)} />
                        {errors.name && (<p className="danger">{errors.name}</p>)}
                    </div>

                    <div>
                        <label className='label'>HP: </label>
                        <input className='input' type='number' name='hp' placeholder='1-255' value={state.hp} onChange={e => change(e)} />
                        {errors.hp && (<p className="danger">{errors.hp}</p>)}
                    </div>

                    <div>
                        <label className='label'>Attack: </label>
                        <input className='input' type='number' name='attack' placeholder='1-255' value={state.attack} onChange={e => change(e)} />
                        {errors.attack && (<p className="danger">{errors.attack}</p>)}
                    </div>

                    <div>
                        <label className='label'>Defense: </label>
                        <input className='input' type='number' name='defense' placeholder='1-255' value={state.defense} onChange={e => change(e)} />
                        {errors.defense && (<p className="danger">{errors.defense}</p>)}
                    </div>

                    <div>
                        <label className='label'>Speed: </label>
                        <input className='input' type='number' name='speed' placeholder='1-255' value={state.speed} onChange={e => change(e)} />
                        {errors.speed && (<p className="danger">{errors.speed}</p>)}
                    </div>

                    <div>
                        <label className='label'>Height: </label>
                        <input className='input' type='number' name='height' placeholder='1-255' value={state.height} onChange={e => change(e)} />
                        {errors.height && (<p className="danger">{errors.height}</p>)}
                    </div>

                    <div>
                        <label className='label'>Weight: </label>
                        <input className='input' type='number' name='weight' placeholder='1-255' value={state.weight} onChange={e => change(e)} />
                        {errors.weight && (<p className="danger">{errors.weight}</p>)}
                    </div>

                    <div>
                        <label className='label'>Image: </label>
                        <input className='input' type='text' name='image' placeholder='image URL' value={state.image} onChange={e => change(e)} />
                    </div>

                    <button className='btn' type='submit'>Create Pokemon</button>

                </form>
            </div>
        </div>
    )
}

export default CreatePokemon