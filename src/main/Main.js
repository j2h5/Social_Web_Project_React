import React from 'react';
import Navbar from './Navbar'
import Hero from './Hero'
import Demo from './Demo'
import MainChallenge from './Mainchallenge';
import MainMoim from './Mainmoim';
import Mainclass from './Mainclass'; 
import Footer from './Footer';
import Map from './Map';
import './index.css'
// import Weather from '../components/Weather';

const Main = () => {
    return (
        <div>
        <Navbar/>
        {/* <Weather/> */}
        <Hero/>
        <Map/>
        <Demo/>
        <MainChallenge/>
        <MainMoim/>
        <Mainclass/>
        <Footer/>
        </div>
    );
};

export default Main;

