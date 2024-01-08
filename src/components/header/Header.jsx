import React from 'react'
import "./header.css"
import img1 from "../../images/1.png"
import img2 from "../../images/2.jpg"
import img3 from "../../images/Vector1.png"

const Header = () => {
    return (
        <div className='header'>
            <div className="left">
                <div className="photo">
                    <div className="img" style={{ backgroundImage: `url(${img2})` }}>
                    </div>
                </div>

                <h1 className='headertext'>Discover the <span className='best'>Best</span> Food and Drinks</h1>

                <div className="paragraph">
                    <p>Naturally made Healthcare Products for the better care & support of your body.</p>
                </div>

                <button className='explore-btn'>Explore Now!</button>
            </div>

                <div className="right" style={{ backgroundImage: `url(${img1})` }}>
                </div>
                <img src={img3} alt="" className='vector' />
        </div>
    )
}

export default Header
