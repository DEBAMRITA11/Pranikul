import React from 'react';
import Logo from "../../images/pow.png";
import Clock from '../../images/clock.png';
import "./Headertop.css";

const Headertop = () => {
    return (
        <div className='header-top-area d-flex align-items container justify-between'>
            <div className='logo d-flex p-2 mb-3'>
            <img src={Logo} alt=''/>
            <h1>Pranikul</h1>
            </div>
            <div className='header-content d-flex p-2'>
            <img src={Clock} alt=''/> 
            <h5>Open today at 10:00 - 16:00</h5>
            <button className='btn-button'>Buy Tickt</button> 
            </div>
            
        </div>
    );
};

export default Headertop;