import React from 'react';
import "../Visiting/Visiting.css";
import { Col, Container, Row } from 'react-bootstrap';

const Visiting = () => {
    return (
        <section className='visiting-hour'>
           <Container>
            <Row>
                <Col lg={6} md={12} sm={12}>
                <div className='visiting-container'>    
                <div className='visiting-area d-flex pb-4'>
                <div className='visiting-today'>
                    <div className='today-heading pt-5 pb-5'>
                    <h3>Today at the Pranikul</h3>
                    </div>
                    <div className='today-1 d-flex pt-2 pt-5'>
                        <p className='p-time'>10:00 AM</p>
                        <p className='p-text'>Zoo Opens</p>
                    </div>
                    <hr className='hr-line' />
                    <div className='today-2 d-flex'>
                        <p className='p-time'>2:30 PM</p>
                        <p className='p-text'>Sea Lion Feeding</p>
                    </div>
                    <hr className='hr-line' />
                    <div className='today-3 d-flex'>
                        <p className='p-time'>3:00 PM</p>
                        <p className='p-text'>Penguin Feeding</p>
                    </div>
                    <hr className='hr-line' />
                    <div className='today-4 d-flex'>
                        <p className='p-time'>3:30 PM</p>
                        <p className='p-text'>Animal Exhibits Close</p>
                    </div>
                    <hr className='hr-line' />
                    <div className='today-5 d-flex'>
                        <p className='p-time'>4:00 PM</p>
                        <p className='p-text'>Zoo Closes</p>
                    </div>
                    <div className='today-button d-flex pt-3'>
                        <button>Full Schedule</button>
                        <a href='#' ><i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    </div> 
                    </div>
                </div>
                </Col>
                <Col lg={6} md={12} sm={12} >
                <div className='visiting-info'>
                <div className='info-heading pt-5 pb-5'>
                    <h3>Visitor info</h3>
                    </div>
                    <div className='info-1 d-flex'>
                        <a href='#' ><i class="fa-solid fa-info"></i></a>
                        <h3>Know befor you go</h3>
                    </div>
                    <div className='info-2 d-flex pt-2'>
                        <button>important info</button>
                        <a href='#' ><i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='info-2 d-flex pt-2'>
                        <button>FAQs</button>
                        <a href='#' ><i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='info-2 d-flex pt-2'>
                        <button>Rules</button>
                        <a href='#' ><i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='info-1 d-flex'>
                        <a href='#' ><i class="fa-solid fa-location-dot"></i></a>
                        <h3>Getting Here</h3>
                    </div>
                    <div className='info-2 d-flex pt-2'>
                        <button>Map & Direction</button>
                        <a href='#'><i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                </Col>
            </Row>
           </Container>
        </section>
    );
};

export default Visiting;