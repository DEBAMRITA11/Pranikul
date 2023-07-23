import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Arrow from "../../images/Arrow 1.png";
import Clock from "../../images/clock.png";
import Map from "../../images/map.png";
import Apple from "../../images/apple-alt.png";
import Evernote from "../../images/evernote.png";

import "../Hero/Hero.css";




const Hero = () => {
    return (
        <section className='hero-area pt-5 '>
         <div className='hero-content container'>
         <h1>Discover your wild side</h1>
         <h2>Pranikul for the new experience of joy</h2>
         </div>
         <div className='hero-bn d-flex'>
         <button className='btn-button' >Buy Ticket</button>
         <button className='btn-button2'>Donate</button>
         </div>
         <div className='service-area container'>
            <Container className="service-content d-flex" >
                <div className="pt-3 pb-4 border-right" >
                    <div className='visit d-flex'>
                    <img src={Clock} alt=''/>    
                    <h4>Plan your visit</h4>
                    </div>
                    <div className='today'>
                     <h5>Today, 31. January</h5>
                     <h4>10:00 - 16:00</h4>
                     <h5> Last admission: 15:30</h5>
                    </div>
                    <div className='schedule d-flex pt- pb-4'>
                    <button className='service-btn'>Schedule</button>
                    <img className='service-img' src={Arrow} alt=''/>
                    </div>
                </div>
                <div className="pt-3 pb-4 border-right" >
                    <div className='map d-flex'>
                    <img src={Map} alt=''/>    
                    <h4>Map</h4>
                    </div>
                    <div className='animals  list-style-type: circle pt-2 pb-2'>
                     <ul>
                        <li>crocodile</li>
                        <li>aquarium</li>
                        <li>Elephant tent</li>
                     </ul>
                    </div>
                    <div className='zoo-map d-flex pt-3 pb-4'>
                    <button className='service-btn'>Zoo Map</button>
                    <img src={Arrow} alt=''/>
                    </div>
                </div>
                <div className="pt-3 pb-4 border-right" >
                    <div className='feeding d-flex'>
                    <img src={Apple} alt=''/>    
                    <h4>Next feeding</h4>
                    </div>
                    <div className='feedinf-text pt-2 pb-2'>
                    <p>Due to covid no public Animal feeding & training sessions are taking place at this time.</p>
                    </div>
                    <div className='donate d-flex pt-4'>
                    <button className='service-btn' >Donate</button>
                    <img src={Arrow} alt=''/>
                    </div>
                </div>
                <div className="pt-3 pb-4" >
                    <div className='events d-flex'>
                    <img src={Evernote} alt=''/>    
                    <h4>Events</h4>
                    </div>
                    <div className='events-text pt-2 pb-2'>
                    <p>Join us to enjoy Pranikul events</p>
                    </div>
                    <div className='up-events d-flex pt-4'>
                    <button className='service-btn' >Upcoming events</button>
                    <img src={Arrow} alt=''/>
                    </div>
                </div>
            </Container>
         </div>
        </section>
    );
};

export default Hero;