import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

// create click event

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)  

//line below: click shows nav-menu active, otherwise just show nav-menu //

  return (
    <div className="header">
      <div className='container'>
        <h1>De<span className='primary'>Fi</span></h1>         
        <ul className={click ? 'nav-menu active' : 'nav-menu' }>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Featured</a>
          </li>
          <li>
            <a href='/'>Earn</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
        </ul>
        <div className='btn-group'>
          <button className='btn'>Connect Wallet</button>
        </div>
        <div className='hamburger' onClick={handleClick}>

{/* upon click show X otherwise show the hamburger bars */}

          {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
        </div>
      </div>

    </div>
  )
}

export default Navbar