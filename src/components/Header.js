import React from 'react';
import Typed from 'react-typed';
const Header = () => {
    return(
        <div className="header-wraper" id="head">
            <div className="main-info">
                <h1>Web development and websites</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web design", "Web development", "Various Apps", "2D Games"]}
                    typeSpeed={40}
                    backSpeed={10}
                    loop
                />
                <a href="#contact" className="btn-main-offer">contact me</a>
                <div  id="main" style={{position: "absolute", bottom: 154, right: 50}}>

            </div>
            </div>
            
        </div>
    )
}

export default Header;