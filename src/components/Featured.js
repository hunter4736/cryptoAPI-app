import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {FiArrowUpRight, FiArrowDownRight} from 'react-icons/fi'
import './Featured.css'

const Featured = () => {

  const [data, setData] = useState(null)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
    }).catch((error)=> {
      console.log(error)
    })
  }, [])

  console.log(data)

  if (!data) return null

  return (
    <div className='featured'>
      <div className='container'>
        {/* Left Side */}
        <div className='left'>
          <h2> Explore Hundreds of Cryptocurrencies and Tokens</h2>
          <p> Explore all available assets: Coins & NFT's. DeFi is a regulated cryptocurrency trading platform. In approved states, customers can use DeFi to buy and sell hundreds cryptocurrencies with low fees.</p>
          <button className='btn'>Explore</button>
        </div>
          {/* Right Side */}

        <div className='right'>
          <div className='card'>
            <div className='top'>
              <img src={data[0].image} alt='/' />
            </div>
            <div>
              <h5>{data[0].name}</h5>
              <p>${data[0].current_price.toLocaleString()}</p>
            </div>

            {data[0].price_change_percentage_24h < 0 ? (
              <span className='red'>
                <FiArrowDownRight />
                {data[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>  
          <div className='card'>
            <div className='top'>
              <img src={data[1].image} alt='/' />
            </div>
            <div>
              <h5>{data[1].name}</h5>
              <p>${data[1].current_price.toLocaleString()}</p>
            </div>

            {data[1].price_change_percentage_24h < 0 ? (
              <span className='red'>
                <FiArrowDownRight />
                {data[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>  
          <div className='card'>
            <div className='top'>
              <img src={data[2].image} alt='/' />
            </div>
            <div>
              <h5>{data[2].name}</h5>
              <p>${data[2].current_price.toLocaleString()}</p>
            </div>

            {data[2].price_change_percentage_24h < 0 ? (
              <span className='red'>
                <FiArrowDownRight />
                {data[2].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[2].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>  
          <div className='card'>
            <div className='top'>
              <img src={data[3].image} alt='/' />
            </div>
            <div>
              <h5>{data[3].name}</h5>
              <p>${data[3].current_price.toLocaleString()}</p>
            </div>

            {data[3].price_change_percentage_24h < 0 ? (
              <span className='red'>
                <FiArrowDownRight />
                {data[3].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[3].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>  
          <div className='card'>
            <div className='top'>
              <img src={data[4].image} alt='/' />
            </div>
            <div>
              <h5>{data[4].name}</h5>
              <p>${data[4].current_price.toLocaleString()}</p>
            </div>

            {data[4].price_change_percentage_24h < 0 ? (
              <span className='red'>
                <FiArrowDownRight />
                {data[4].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[4].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>  
          <div className='card'>
            <div className='top'>
              <img src={data[5].image} alt='/' />
            </div>
            <div>
              <h5>{data[5].name}</h5>
              <p>${data[5].current_price.toLocaleString()}</p>
            </div>

            {data[5].price_change_percentage_24h < 0 ? (
              <span className='red'>
                <FiArrowDownRight />
                {data[5].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className='green'>
                <FiArrowUpRight />
                {data[5].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Featured