import React from 'react';
import "../Upcoming/Upcoming.css";
import { Col, Container, Row } from 'react-bootstrap';

const upcoming = () => {
    return (
      <section  className='upcoming-area'>
        <Container>
          <div className='upcoming-header pt-5 pb-4'>
                <h2>Upcoming events</h2>
          </div>
          <Row>
            <Col lg={3} md={6} sm={12} >
            <div className='event-1 event-box'> 
                 <h4 className='pt-2'>20 <br/>Feb</h4>
                 <h5>Animals return from night pasture</h5>
                </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <div className='event-2 event-box'> 
                 <h4 className='pt-2'>10 <br/> May</h4>
                 <h5 className='pt-4'>Riverbank feeding</h5>
                </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <div className='event-3 event-box'> 
                 <h4 className='pt-2'>10 <br/> May</h4>
                 <h5 className='pt-4'>Penguin Chat</h5>
                </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <div className='event-4 event-box'> 
                 <h4 className='pt-2'>10 <br/> May</h4>
                 <h5 className='pt-4'>Bird feeding</h5>
                </div></Col>
          </Row>
          <div className='upcoming-button d-flex pt-5'>
                        <a href='#' className=''>View all events</a>
                        <a href='#' className='upcoming-icon'><i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
        </Container>

      </section>
    );
};

export default upcoming;