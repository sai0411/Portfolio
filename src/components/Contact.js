import React from "react";
import './styles/Contact.scss'; 
import { Link } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

const Contact = () => {
    return (
        <div id="contact-section" className="contact">
           
            <div className="inputs">
                <div className="head">
                    <h1>Contact Me</h1>
                </div>
                
                <form className="" action="mailto:saineelima00@gmail.com" method="post" encType="" >
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Message" className="message"/>
                    <input type="submit" name=""></input>
                </form>
            </div>
            <div>
                <footer>
                    <p>@saineelima❤️</p>
                </footer>
            </div>
        </div>
    )
}

export default Contact;