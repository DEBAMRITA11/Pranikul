import React from 'react';
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import Visiting from "../Visiting/Visiting";
import Upcoming from "../Upcoming/upcoming";
import "./Home";
import Enviroment from '../Enviroment/Enviroment';

const Home = () => {
    return (
        <div>
           <Hero/>
           <Banner/>
           <Enviroment />
           <Visiting /> 
           <Upcoming /> 
        </div>
    );
};

export default Home;