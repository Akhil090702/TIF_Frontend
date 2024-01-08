import React from 'react'
import "./footer.css"
import img1 from "../../images/2.jpg"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="items">
                <div className="item">
                    <div className="image" style={{ backgroundImage: `url(${img1})` }}>
                    </div>
                </div>
                <div className="item">
                    <div className="contact">
                        <p className='heading'>Contact Us</p>
                        <div className="textbox">
                            <p className='lorem-text'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                            <p className='mail'>example2020@gmail.com</p>
                            <p className='phone'>(904) 443-0343</p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="combined">
                        <div className="More">
                            <p className='more-heading'>More</p>
                            <ul className='list'>
                                <li>About Us</li>
                                <li>Products</li>
                                <li>Career</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        <div className="Social">
                            <p className='social-heading'>Social Links</p>
                            <div className="buttons">
                                <InstagramIcon className='insta'/>
                                <TwitterIcon className='twitter'/>
                                <FacebookIcon className='facebook'/>
                            </div>
                            <p className='copyright'>© 2022 Food Truck Example</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
