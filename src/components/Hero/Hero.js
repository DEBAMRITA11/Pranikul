import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Arrow from "../../images/Arrow 1.png";
import Clock from "../../images/clock.png";
import Map from "../../images/map.png";
import Apple from "../../images/apple-alt.png";
import Evernote from "../../images/evernote.png";

import "../Hero/Hero.css";




const Hero = () => {
    return (
        <section className='hero-area'>
            <Container fluid>
            <div className='hero-content text-center pt-5'>
            <h1 className='mb-3 pt-5'>Discover your wild side</h1>
            <h2 className='mb-4'>Pranikul for the new experience of joy</h2>
            </div>
            <div className='hero-bn d-flex'>
            <Button className='btn-button' >Buy Ticket</Button>
            <Button className='btn-button2'>Donate</Button>
            </div>
            <Container className='service-area pb-3'>
                <Row>
                    <Col lg={3} md={6} >
                    <div className="pt-5 border-right" >
                    <div className='visit d-flex'>
                    <img src={Clock} alt=''/>    
                    <h4>Plan your visit</h4>
                    </div>
                    <div className='today'>
                     <h5>Today, 31. January</h5>
                     <h4>10:00 - 16:00</h4>
                     <h5> Last admission: 15:30</h5>
                    </div>
                    <div className='schedule d-flex pt-3 pb-4 m-2'>
                    <a href='#' className='service-btn'>Schedule</a>
                    <img className='p-2 service-img' src={Arrow} alt=''/>
                    </div>
                </div>
                    </Col>
                    <Col lg={3} md={6}>
                    <div className="pt-5 border-right" >
                    <div className='map pb-2 d-flex'>
                    <img src={Map} alt=''/>    
                    <h4>Map</h4>
                    </div>
                    <div className='animals  list-style-type: circle pb-2'>
                     <ul>
                        <li>crocodile</li>
                        <li>aquarium</li>
                        <li>Elephant tent</li>
                     </ul>
                    </div>
                    <div className='zoo-map d-flex pt-2 pb-4 m-2'>
                    <a href='#' className='service-btn'>Zoo Map</a>
                    <img className='p-2' src={Arrow} alt=''/>
                    </div>
                </div>   
                    </Col>
                    <Col lg={3} md={6}>
                    <div className="pt-5 border-right" >
                    <div className='feeding pb-2 d-flex'>
                    <img src={Apple} alt=''/>    
                    <h4>Next feeding</h4>
                    </div>
                    <div className='feedinf-text pb-3'>
                    <p>Due to covid no public Animal feeding & training sessions are taking place at this time.</p>
                    </div>
                    <div className='donate d-flex pt-2 m-2'>
                    <a href='#' className='service-btn'>Donate</a>
                    <img className='p-2' src={Arrow} alt=''/>
                    </div>
                </div>   
                    </Col>
                    <Col lg={3} md={6}>
                    <div className="pt-5" >
                    <div className='events d-flex'>
                    <img src={Evernote} alt=''/>    
                    <h4>Events</h4>
                    </div>
                    <div className='events-text pb-4'>
                    <p>Join us to enjoy Pranikul events</p>
                    </div>
                    <div className='up-events d-flex pt-1 m-2'>
                    <a href='#' className='service-btn' >Upcoming events</a>
                    <img className='p-2' src={Arrow} alt=''/>
                    </div>
                </div>   
                    </Col>

                </Row>
            </Container>
            </Container>
         
        </section>
    );
};

export default Hero;