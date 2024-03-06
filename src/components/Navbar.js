import React, { useState } from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [navItem, setNavItem] = useState('home')
  return (
    <nav className="navbar">
        <ul className='nav-list'>
            <li className={`nav-item ${navItem === 'home' ? 'active' : ''}`}><Link to="" className="nav-link" onClick={() => setNavItem('home')}>Home</Link></li>
            <li className={`nav-item ${navItem === 'about' ? 'active' : ''}`}><Link to="about" className="nav-link" onClick={() => setNavItem('about')}>About</Link></li>
            <li className={`nav-item ${navItem === 'experience' ? 'active' : ''}`}><Link to="" className="nav-link" onClick={() => setNavItem('experience')}>Experience</Link></li>
            <li className={`nav-item ${navItem === 'projects' ? 'active' : ''}`}><Link to="" className="nav-link" onClick={() => setNavItem('projects')}>Projects</Link></li>
            <li className={`nav-item ${navItem === 'contact' ? 'active' : ''}`}><Link to="" className="nav-link" onClick={() => setNavItem('contact')}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar