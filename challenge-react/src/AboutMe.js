import React from 'react';
import './Home.css';
import logo from "./img/logo-ALTA.png";
import fotoAnne from "./img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import titikTitik from "./img/img-dot@2x.png";
import logoKecil from "./img/logo-ALTA-v2.png";
import fb from "./img/ic_fb.png";
import twitter from "./img/ic-twitter.png";
import ig from "./img/ic-instagram.png";
import linken from "./img/ic-linkedin.png";
var style1 = {
    position: "relative",
    left: "30px"
}
var style2 = {
    position: "absolute",
    bottom: "-274px",
    left: "-39px",
    width: "90px"
}
var style3 = {
    width:"453px",
    height:"116px"
}

var style4 = {
    width:  "109.54px",
    height: "56.83px"
}


function AboutMe(){
return(
    <div>
        <header>
                <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="header-logo">
                                    <img src={logo} alt="" srcset="" />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="header-notif text-right">
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
        
        <section className="about-me">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about-me-kata">
                                ABOUT ME.
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="isi">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7">
                        <div className="hello">
                            <p>
                                Hello! I’m Anne Sullivan, a full-stack engineer based in Malang, IDN who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.
                            </p>
                            <p>
                                Shortly after graduating from Alterra Academy, I joined the engineering team at Alterra where I work on a wide variety of interesting and meaningful projects on a daily basis.
                            </p>    
                            <p>
                                Here’s few technologies I’ve been working with recently :
                            </p>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="table">
                            <table className="table-hp" style={style3} >
                                <tr>
                                    <td>HTML & CSS</td>
                                    <td>Serverless</td>
                                    <td>Scrum</td>
                                </tr>
                                <tr>
                                    <td>Programming</td>
                                    <td>Restful API</td>
                                    <td>Test-Driven Dev</td>
                                </tr>
                                <tr>
                                    <td>Database</td>
                                    <td>Javascript</td>
                                    <td>Software Testing</td>
                                </tr>
                                <tr>
                                    <td>Git & Github</td>
                                    <td>Single Page App</td>
                                    <td>UX/UI Designer</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-5">
                    <div className="tes" style={style1}>                        
                    <img className="gambar-anne" src={fotoAnne} />
                        
                            <img src={titikTitik} style={style2} />
                            </div>
                    </div>
                </div>
            </div>

        </section>
        <section className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <div className="footer-logo">
                            <img src={logoKecil} style={style4} />
                        </div>
                    </div>
                    <div className="col-md-4">
                            <div className="sosmed">
                                <p>Social Media</p>
                                <img className="sosmed-pic" src={fb} />
                                <img className="sosmed-pic" src={twitter} alt="" />
                                <img className="sosmed-pic" src={ig} alt="" />
                                <img className="sosmed-pic" src={linken} alt="" />
                            </div>
                    </div>
                    <div className="col-md-3">
                        <div className="copyright">
                            Copyright © 2019 Alterra
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    )    
}

export default AboutMe;