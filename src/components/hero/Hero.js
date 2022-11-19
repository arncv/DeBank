import React from 'react'
import './HeroStyle.css';

const Hero = () => {
    return (

        <header className="hero-section">
            <div className="hero-text-container">
                {/* <h1>My Bank</h1> */}

                <h3>Decentralized Banking For Everyone!</h3>
                <p><br /> P2P lending made easy. </p>
            </div>

            <div className="hero-img-container">
                {/* <img src="../../images/hero1.jpg" alt="no image" srcset=""> </img> */}
                <img src={require("../../images/hero1.jpg")} />
            </div>

        </header >

    ) 
}

export default Hero