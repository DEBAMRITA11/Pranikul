import React from 'react';
import "../Upcoming/Upcoming.css";

const upcoming = () => {
    return (
      <section>
        <div className='upcoming-area'>
            <div className='upcoming-header pt-3 pb-3'>
                <h2>Upcoming events</h2>
            </div>
            <div className='upcoming-content d-flex pt-4 pb-2'>
                <div className='event-1 event-box'> 
                 <h4 className='pt-2'>20 <br/>Feb</h4>
                 <h5>Animals return from night pasture</h5>
                </div>
                <div className='event-2 event-box'> 
                 <h4 className='pt-2'>10 <br/> May</h4>
                 <h5 className='pt-4'>Riverbank feeding</h5>
                </div>
                <div className='event-3 event-box'> 
                 <h4 className='pt-2'>10 <br/> May</h4>
                 <h5 className='pt-4'>Penguin Chat</h5>
                </div>
                <div className='event-4 event-box'> 
                 <h4 className='pt-2'>10 <br/> May</h4>
                 <h5 className='pt-4'>Bird feeding</h5>
                </div>
            </div>
            <div className='upcoming-button d-flex'>
                        <button>View all events</button>
                        <a href='#' ><i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
        </div>

      </section>
    );
};

export default upcoming;