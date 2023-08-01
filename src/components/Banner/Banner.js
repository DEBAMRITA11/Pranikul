import React from 'react';
import Bslide from "../Bslide/Bslide";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Banner/Banner.css";
import { Container } from 'react-bootstrap';





const Banner = () => {
    return (
        <section className='banner-area'>
            <Container>
               <Row>
                <Col lg={3} md={12} className='d-flex pt-5 pb-2'>
                <div className='banner-content pb-2'>
                <h2>New animal at Pranikul</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className='next-back'>
                <a className='back'><i class="fa-solid fa-arrow-left p-2"></i></a>
                <a className='next'><i class="fa-solid fa-arrow-right-long p-2"></i></a>
                </div>
                </div>
                </Col>
                
                <Col lg={9} md={12} className='banner-slide'>
                  {/* banner slides area */}
                 <Bslide />  
                </Col>
               </Row>
            </Container>
            
        </section>
    );
};

export default Banner;
