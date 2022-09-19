import React from 'react'
import { Link } from "react-router-dom";
import img from './pokemon.jpg'
import './LandingPage.css'


function LandingPage() {
  return (
    <div className='landing'>
      <img className='imgLanding' src={img} alt='Img Not Founddddd' />
      <Link to='/home'>
        <button className='btnn'>Ingresar</button>
      </Link>
    </div>
  )
}

export default LandingPage