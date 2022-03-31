import React from 'react'
import './Signup.css'

import Crypto from '../assets/trade.png'

const Signup = () => {
  return (
    <div className='signup'>
      <div className='container'>
        {/* left */}
        <div className='left'>
          <img src ={Crypto} alt='' />
        </div>

        {/* right */}
        <div className='right'>
          <h2>Stake your crypto to earn passive income</h2>
          <p>Earn up to 52% APY on hundreds of digital assets. </p>
          <div className='input-container'>
            <input type='email' placeholder='Enter Your Email' />
            <button className='btn'>Learn More</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup