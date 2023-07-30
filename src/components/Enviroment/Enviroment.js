import React from 'react';
import Enviroment1 from "../../images/en-1.png";
import Enviroment2 from "../../images/en-2.png";
import Enviroment3 from "../../images/en-3.png";
import Evernote from "../../images/evernote (3).png";
import Users from "../../images/users.png";
import Userf from "../../images/user-friends.png";
import "../Enviroment/Enviroment.css";

const Enviroment = () => {
    return (
        <section className='enviroment-area'>
            <div className='container'>
            <div className='enviroment-header pb-5'>
                <h2>Why visit Pranikul</h2>
            </div>
            <div className='enviroment-content d-flex pt-4'>
                <div className='enviromet-image'>
                <div class="container">
                <div class="row">
                <div class="col-lg-6">
                    <img src={Enviroment3} alt=''/>
                    <img src={Enviroment2} alt=''/>
                </div>
                <div class="col-lg-6">
                <img src={Enviroment1} alt=''/> 
                </div>
                </div>
                </div>
                </div>
                <div className='enviromet-text'>
                 <h3>Natural environment</h3>
                 <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. oq Exercitation veniam consequat sunt nostrud amet.</p>
                <div className='group-icon d-flex'>
                    <div className='smoking-icon d-flex'>
                        <a href='#'><i class="fa-solid fa-ban-smoking"></i></a>
                        <p>Smoking-ban</p>
                    </div>
                    <div className='baby-icon d-flex'>
                        <a href='#'><i class="fa-solid fa-baby-carriage"></i></a>
                        <p>Baby carriage</p>
                    </div>
                    <div className='car-icon d-flex'>
                        <a href='#'><i class="fa-solid fa-car"></i></a>
                        <p>Car parking</p>
                    </div>
                </div>
                <div className='page-icon d-flex'>
                    <div className='Facilities-icon d-flex'>
                        <a href='#'><i class="fa-brands fa-pagelines"></i></a>
                        <p>Facilities</p>
                    </div>
                    <div className='Accessible-icon d-flex'>
                        <a href='#'><i class="fa-brands fa-accessible-icon"></i></a>
                        <p>Accessible</p>
                    </div>
                    <div className='Entertainment-icon d-flex'>
                        <a href='#'><i class="fa-solid fa-person-dots-from-line"></i></a>
                        <p>Entertainment</p>
                    </div>
                </div>
                <div className='total-icon d-flex'>
                    <div className='ever-icon d-flex'>
                        <img src={Evernote} alt='' />
                        <h3>965</h3>
                    </div>
                    <div className='user-icon d-flex'>
                    <img src={Users} alt='' />
                        <h3>1k+</h3>
                    </div>
                    <div className='friends-icon d-flex'>
                    <img src={Userf} alt='' />
                        <h3>2.3k</h3>
                    </div>
                </div>
                <div className='member-text d-flex'>
                    <h5>Total species</h5>
                    <h5>Daily visitor</h5>
                    <h5>Total member</h5>
                </div>
                </div>

                </div>
            </div>
            

            
            
        </section>
    );
};

export default Enviroment;