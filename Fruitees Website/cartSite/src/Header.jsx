import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {FaShoppingCart} from 'react-icons/fa'
import {FaUserCircle,FaBars} from 'react-icons/fa'


const Header = () => {
  return (
    <>
      <div className='Header-containor'>
        <div className='logo-containor'><Link to={"/"} className='Shop-logo'>Shop Logo</Link></div>
        <div className='Navbar-containor'>
        <ul className='Navbar'>
            <li>
                <Link to={"/"} className='Nav-item'> Home</Link>
            </li>
            <li>
                <Link to={"/About us"} className='Nav-item'>About us</Link>
            </li>
            <li>
                <Link to={"/Menu"} className='Nav-item'>Menu</Link>
            </li>
            <li>
                <Link to={"/Services"} className='Nav-item'>Services</Link>
            </li>
            <li>
              <Link to={"/About us"} className='Nav-item'>Contact</Link>
            </li>
        </ul>
        </div>
        <div>  
        <ul className='Navbar-left-containor'>
          <li>
          <Link to={"/CartView"} className='Nav-item cart-view-1'><FaShoppingCart className='FaShoppingCart'/>Cart View</Link>
          <Link to={"/CartView"} className='Nav-item Cart-view-2'><FaShoppingCart className='FaShoppingCart'/>Cart </Link>
          </li>
          <li>
            <Link to={"/Account"} className='Nav-item account-btn'><FaUserCircle className='FaUserCircle' />Account</Link>
            <FaBars className='burger-menu-icon' />
          </li>          
        </ul>

        </div>
      </div>
    </>
  )
}

export default Header
