import React from 'react'
import Header from '../components/header/Header'
import About from '../components/aboutus/About'
import Article from '../components/article/Article'
import "./home.css"
import Footer from '../components/footer/Footer'
const Home = () => {
  return (  
    <div className='homepage'>
        <Header />
        <About />
        <Article />
        <Footer />
    </div>
  )
}

export default Home
