import React from "react";
import './styles/Main.scss'
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import img1 from "./assets/5.jpeg"

const Main = () => {
    return(
        <div id="home-section" className="main">
        <div className="main_container">
            <div className="text">
                <p>Hello Everyone!</p>
                <h1> I am Sai Neelima</h1>
                <p>Front-end Developer & Designer</p>

                <div className="icons">
                    <a href='https://www.linkedin.com/in/sai-neelima'><LinkedIn className="icon"/></a>
                    <a href='https://instagram.com/_teddy_ber?igshid=MGNiNDI5ZTU='><Instagram className="icon"/></a>
                    <a href='https://twitter.com/Damarouthu87809'><Twitter className="icon"/></a>
                    <a href='https://www.facebook.com/saineelima.damarouthu?mibextid=ZbWKwL'><Facebook className="icon"/></a>
                    
                </div>
                
            </div>
            <div className="main_img">
                <img width="400" height='400' src={img1} alt=" "/>
            </div>
        </div>
        </div>
    )
}
export default Main