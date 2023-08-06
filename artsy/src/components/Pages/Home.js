import React  from "react";
import NavBar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import heroimg from "../../images/car1.jpg";
import Popular from "../PopularProducts/PopularProducts";
import Footer from "../Footer/Footer";

function Home(){
    return(
        <>
            <NavBar/>
            <Hero cName="hero"
            heroimg={heroimg}
            title="Welcome to Artsy"
            description="Get your aesthetic enjoyment here"
            buttontext='Shop Now'
            btnClass='show'
            url='/products'
            />   
            <Popular/>
            <Footer/>

        </>


    )
}

export default Home