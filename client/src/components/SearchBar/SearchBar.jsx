import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {searchByName} from '../../redux/actions/index'

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(searchByName(name));
        setName(''); 
    }


    return(
        <div >
            <input onChange={(e) => handleInputChange(e)} type= 'text' placeholder='Ingresar nombre...' value= {name}/>

            <button onClick={(e) => handleSubmit(e)} type= 'submit'
            >Buscar
            </button>
            
        </div>
    )
}