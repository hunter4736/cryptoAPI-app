// rafce to create react arrow export component
import React from 'react'
import './Hero.css'
import Crypto from '../assets/blockchain.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>

        {/* Left Side */}
        <div className='left'>
          <p>Buy & Sell 24/7 on a secure platform</p>
          <h1>Invest in Cryptocurrency with your IRA </h1>
          <p>Trade with leverage using Perpetual Futures</p>
          <div className='input-container'>
            <input type='email' placeholder='Enter you Email' />
            <button className='btn'>Learn More</button>
          </div>
        </div>  

          {/* Right Side */}
        <div className='right'>
          <div className='img-container'>
            <img src={Crypto} alt=''/>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Hero