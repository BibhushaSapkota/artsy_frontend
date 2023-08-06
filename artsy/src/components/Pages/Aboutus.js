import React from 'react'
import NavBar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import heroimg from '../../images/car2.jpg'
import Footer from '../Footer/Footer'
import About from '../About/About'
function Aboutus(){
    return(
        <div>
            <NavBar/>
            <Hero cName="hero-mid"
            heroimg={heroimg}
            title="About us"
            description="From 2020, Artsy has been providing the best quality of art to the people. We have a wide range of art products. We have a team of experts who are always ready to help you."
            btnClass='hide'
            />
            <About/>
            <Footer/>
           
        </div>
    )

}

export default Aboutus
