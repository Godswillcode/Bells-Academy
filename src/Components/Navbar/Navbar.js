import React,  {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    return (
        <nav className="navbar fixed top-0 bg-white w-full">
            <h3 className="logo uppercase font-medium text-primary md:pl-8">Bell's Academy</h3>

            <ul className={isMobile ? "nav-links-mobile": "nav-menu"} onClick={() => setIsMobile(false)}>
                <NavLink to="/" className="nav_link" activeClassName="is-active" exact={true}> <li>Home</li> </NavLink>
                <NavLink to="/about" className="nav_link" activeClassName="is-active"> <li>About</li> </NavLink>
                <NavLink to="/academics" className="nav_link" activeClassName="is-active"> <li>Academics</li> </NavLink>
                <NavLink to="/admission" className="nav_link" activeClassName="is-active"> <li>Admission</li> </NavLink>
                <NavLink to="/Gallery" className="nav_link" activeClassName="is-active"> <li>Gallery</li> </NavLink>
                <NavLink to="/payFees" className="nav_link" activeClassName="is-active"> <li>Pay-Fees</li> </NavLink>
                <NavLink to="/contact" className="nav_link" activeClassName="is-active"> <li>Contact</li> </NavLink>
                <NavLink to="/apply" className="apply"> <li>Apply Now</li> </NavLink>
            </ul>
            <div className="mobile-menu-icon md:pr-12" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? ( <i className="fas fa-times"></i> ): (<i className="fas fa-bars"></i>)}
            </div>
        </nav>
    )
}

export default Navbar
