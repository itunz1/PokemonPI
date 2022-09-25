import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';





function Nav() {
    return (
        <nav className="navbar">
            <div className='btns'>
                <Link className="btn" to='/home'>Home</Link>
                <Link className="btn" to='/create'>Create</Link>
            </div>
        </nav>
    )
}

export default Nav