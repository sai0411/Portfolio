import React from "react";
import './styles/Header.scss'
import {Link} from "@material-ui/core"
import {CSSTransition} from 'react-transition-group';

const Header = ( ) =>{    
    return(
        <div  className="header">
            <div className="header_logo">
                <h1>Portfolio</h1>
            </div>
            <nav>
            <div className="menu">
                <ul className="menu-items"> 
                    <li><a href="#home-section">Home</a></li>
                    <li><a href="#about-section">About</a></li>
                    <li><a href="#contact-section">Contact Me</a></li>
                    <li><a href="https://drive.google.com/file/d/1me1X557AFeIDPhjg1XbBLHSYKSXbY1ix/view?usp=drivesdk">Resume</a></li>
                </ul>
            </div>
            </nav>
            
        </div>
            

       
    )
}

export default Header