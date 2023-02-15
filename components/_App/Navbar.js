import React, { useState } from "react";
import Link from '@/utils/ActiveLink';
import * as Icon from 'react-feather';

const NavbarStyleFour = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        elementId.classList.add("is-sticky");  //by avinas navbar
        document.addEventListener("scroll", () => {
            
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
            elementId.classList.add("is-sticky");
        });
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom navbar-color-white navbar-style-four">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img src="/images/logo-white.png" alt="logo" />
                            </a>
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>
                         
                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link href="/" activeClassName="active">
                                        <a  onClick={toggleNavbar}  className="nav-link">
                                            HOME
                                        </a>
                                    </Link> 
                                </li>

                                <li className="nav-item">
                                    <Link href="/about">
                                        <a onClick={toggleNavbar}   className="nav-link">
                                            ABOUT US
                                        </a>
                                    </Link>  
                                </li>

                                <li className="nav-item">
                                    <Link href="/services">
                                        <a onClick={toggleNavbar} className="nav-link">
                                          SERVICE  
                                        </a>
                                    </Link>                                    
                                </li>

                                <li className="nav-item">
                                    <Link href="/blog">
                                        <a onClick={toggleNavbar} className="nav-link">
                                        BLOG
                                        </a>
                                    </Link> 
                                </li> 
                                 
                                <li className="nav-item">
                                    <Link href="/contact">
                                        <a onClick={toggleNavbar} className="nav-link">CONTACT US</a>
                                    </Link>
                                </li>
                            </ul>
                        </div> 
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavbarStyleFour;