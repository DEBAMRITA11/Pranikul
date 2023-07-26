import React from 'react';
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import "./Home";
import Enviroment from '../Enviroment/Enviroment';

const Home = () => {
    return (
        <div>
           <Hero/>
           <Banner/>
           <Enviroment />  
        </div>
    );
};

export default Home;