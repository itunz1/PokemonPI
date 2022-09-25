import React from 'react'
import pikaGif from './1604090_a14a5.gif'
import './Loading.css';

function Loading() {
  return (
    <div className='loading'>
        <div className='loading-son'>
            <img className='img-loading' src={pikaGif} alt="img Not Found"/>
        </div>
    </div>
  )
}

export default Loading