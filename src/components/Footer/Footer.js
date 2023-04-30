import React from "react";
import './Footer.css'
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';







const Footer = () => {
    return (
<footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <h2>KAAS</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="footer-contact">
                        <div className="footer-text">
                            <h6>Contact us <FaPhoneAlt /></h6>
                            <h4>+91 9735337548</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <h2>About us</h2>
                    <ul>
                        <li><a href="#">Information</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Doctor profile</a></li>
                        <li><a href="#">Working hours</a></li>
                        <li><a href="#">Appointments</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="col-md-3 col-sm-6">
                    <h2>Pages</h2>
                    <ul>
                        <li><a href="#">Departments</a></li>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Cost calculator</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>

                <div className="col-md-3 col-sm-6">
                    <h2>Subcribe</h2>
                    <form>
                        <input type="email" placeholder="Enter Email"/>
                        <button type="submit">subcribe now</button>
                    </form>
                    <ul className="social">
                        <li><a href="#">Instagram <AiFillInstagram /></a></li>
                        <li><a href="#">facebook <BsFacebook /></a> </li>
                        <li><a href="#">Twitter <AiFillTwitterCircle /></a></li>
                        <li><a href="#">Linkedin <AiFillLinkedin /></a></li>
                    </ul>
                    
                </div>
            </div>
            
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <span>Copyright by BoldThemes 2018. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    )
}


export default Footer;


