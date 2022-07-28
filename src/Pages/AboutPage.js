import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AboutUs from '../Components/AboutPage/AboutUs';
import AboutShowcase from '../Components/AboutPage/AboutShowcase';



const AboutPage = () => {
    return ( 
        <>
        <Navbar/>
        <AboutShowcase/>
<AboutUs/>
<Footer/>

        </>
     );
}
 
export default AboutPage;