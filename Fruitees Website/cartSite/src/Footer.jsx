import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaSnapchat} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className='main-footer-containor'>
            <div className='footer-cafe-logo'>Shop Logo</div>
            <div className='footer-content-containor'>
                <div className='footer-contents'>
                    <div className='coulmn-1'>
                        <ul>
                            <li>About Us</li>
                            <li>Blogs</li>
                            <li>Branches</li>
                        </ul>
                    </div>
                    <div className='coulmn-1'>
                        <ul>
                            <li>Career</li>
                            <li><Link to={"/About us"} className='btn'>Contec</Link>t</li>
                            <li><Link to={"/Faq Page"} className='btn'>FAQ</Link></li>
                        </ul>
                    </div>
                    <div className='coulmn-1'>
                        <ul>
                            <li><Link to={"/Services"} className='services-btn'>Services</Link></li>
                            <li>Privacy & Policy</li>
                            <li>Other</li>
                        </ul>
                    </div>
                </div>
                <div className='social-connections'>
                    <FaEnvelope className='social-icons'/>
                    <FaTwitter className='social-icons'/>
                    <FaFacebook className='social-icons'/>
                    <FaInstagram className='social-icons'/>
                    <FaSnapchat className='social-icons'/>
                </div>
            </div>
            <div className='footer-content-3'>
                Some thing content
            </div>
        </div>   
    </>
  )
}

export default Footer
