import React from 'react'
import "./article.css"
import Slider from "react-slick";

const Article = () => {

    const data = [
        {
            name: "Grilled  Tomatoes at Home",
            img: require('../../images/4.jpg'),
            review: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
            name: "Snacks for Travel",
            img: require('../../images/5.jpg'),
            review: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
            name: "Post-workout Recipes",
            img: require('../../images/6.jpg'),
            review: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
            name: "How To Grill Corn",
            img: require('../../images/7.jpg'),
            review: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
            name: "Crunchwrap Supreme",
            img: require('../../images/8.jpg'),
            review: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
            name: "Broccoli Cheese Soup",
            img: require('../../images/9.jpg'),
            review: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div className='article'>
            <div className="headingtext">
                Latest Article
            </div>
            <div className="cards">
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className='imageback'>
                            <div className='imagediv' style={{ backgroundImage: `url(${d.img})` }}>
                            </div>
                            <div className='textbox'>
                                <p className='name'>{d.name}</p>
                                <p className='review'>{d.review}</p>
                                <button className='read-more'>Read More</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Article
