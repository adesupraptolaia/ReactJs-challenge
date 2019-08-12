import React from 'react';
import './Home.css';
import logo from './img/logo-ALTA.png';
import fotoAnne from './img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';

function Home(){
    return (
        <div>
            <header>
                    <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="header-logo">
                                        <img src={logo} alt="" srcset="" />
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="header-notif text-right flex-column">
                                        <div className="menu">
                                            <ul>
                                                    <a href="index.html"><li>Home</li></a>
                                                    <a href="aboutme.html"><li>About</li></a>
                                                    <a href="http://"><li>Experience</li></a>
                                                    <a href="contact-us.html"><li>Contact</li></a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </header>
    
            <section className="isi-utama">
                <div className="container mt-3">
                    <div className="cust_class">
                        
                        <div className="row">
                            <div className="col-md-5">
                                <div className="profile-picture">
                                    <img src={fotoAnne} />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="text-first-page">
                                    <div className="hi">
                                        Hi , my name is
                                    </div>
                                    <div className="name">
                                        Anne Sullivian
                                    </div>
                                    <div className="description">
                                        I build things for the web
                                    </div>
                                    
                                    <div className="button-fp">
                                            <button type="button" className="btn btn-custom">Get In Touch</button>
                                    </div>
            
                                
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}


export default Home;