import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../redux/actions/index'
import './SearchBar.css';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [state, setState] = useState('');

    function handleInputChange(e) {
        e.preventDefault();
        setState(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchByName(state));
        console.log(state)
        setState('');
    }

    return (
        <div className='search-pos'>
            <input className='input-search' name='name' onChange={(e) => handleInputChange(e)} type='text'
                placeholder='Ingresar nombre...' value={state} />
            <button className='search-btn' onClick={(e) => handleSubmit(e)} type='submit'
            >Buscar
            </button>

        </div>
    )
}