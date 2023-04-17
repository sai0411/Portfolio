import React from "react";
import './styles/Section.scss'; 
import img2 from './assets/4.jpeg';

const Section = () => {
    return (
        <div id="about-section" className="sections">
            <div className="section_container">
                <div className="section_img">
                    <img width="400" height='400'   src={img2} alt=" "/>
                </div>
            </div>

            <div className="section_content">
                <p>Experience in front end and backend development</p>
                <p>Javascript development</p>
                <p>Java</p>
                <p>Cpp</p>
                <p>Professional UI and UX Designer</p>
            </div>
        </div>
    )
}

export default Section;