import React from 'react';

import "../Hero/Hero.css";




const Hero = () => {
    return (
        <section className='hero-area py-5'>
         <div className='hero-content container'>
         <h1>Discover your wild side</h1>
         <h2>Pranikul for the new experience of joy</h2>
         </div>
         <div className='hero-bn d-flex'>
         <button className='btn-button' >Buy Ticket</button>
         <button className='btn-button2'>Donate</button>
         </div>
         
        </section>
    );
};

export default Hero;