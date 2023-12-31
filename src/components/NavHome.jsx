import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavHome() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/home"><h1 className="logo-link"></h1></Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <i className="bi bi-list"></i>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="x-nav list-inline-item" onClick={closeMobileMenu}><i className="bi bi-x"></i></li>
                <li className="nav-item list-inline-item"><Link to="/home" className="nav-links-active" onClick={closeMobileMenu}>HOME</Link></li>
                <li className="nav-item list-inline-item"><Link to="/services" className="nav-links" onClick={closeMobileMenu}>SERVICES</Link></li>
                <li className="nav-item list-inline-item"><Link to="/gallery_one" className="nav-links" onClick={closeMobileMenu}>GALLERY</Link></li>
                <li className="nav-item list-inline-item"><Link to="/contact" className="nav-links" onClick={closeMobileMenu}>CONTACT</Link></li>
                <li className="nav-item list-inline-item"><Link to="/booking" className="nav-links" onClick={closeMobileMenu}>BOOKING</Link></li>
            </ul>
        </nav>
        </>
    )
}