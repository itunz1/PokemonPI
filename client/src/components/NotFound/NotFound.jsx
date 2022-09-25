import React from 'react'
import pikachu from './pikachu.png'
import './NotFound.css'
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='not-found'>
            <img className='pikachu-img' src={pikachu} alt="Img not found" />

            <h1 className='tittle-404'>404 Error! Page not found</h1>

            <p className='text-notfound'>
                The requested URL was not found on this server.
            </p>
            <Link to='/home'>
                Back to home
            </Link>

        </div>
    )
}

export default NotFound