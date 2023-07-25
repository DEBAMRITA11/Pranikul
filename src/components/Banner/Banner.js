import React from 'react';
import Bslide from "../Bslide/Bslide";
import "../Banner/Banner.css";





const Banner = () => {
    return (
        <section className='banner-area'>
            <div className='container d-flex pt-4 pb-2'>
                <div className='banner-content pt-4 pb-2'>
                <h2>New animal at Pranikul</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className='next-back'>
                <button className='back'><i class="fa-solid fa-arrow-left"></i></button>
                <button className='next'><i class="fa-solid fa-arrow-right-long"></i></button>
                </div>
                </div>
                
                
                {/* banner slides area */}
                <div className='banner-slide'>
                 <Bslide />
                </div>
            </div>
            
        </section>
    );
};

export default Banner;
