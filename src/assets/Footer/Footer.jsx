import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';


   
   function Footer(){
        return(
           
                <footer>
                    <div className='footerContainer'>
                        <div className='footer Content'>
                            <h3>Contact Us</h3>
                            <p>Email: Info@example.com</p>
                            <p>Phone: +62895702508590</p>
                        </div>

                        <div className='footer Content'>
                            <h3>Quick Links</h3>
                                <ul className='footerList'>
                                    <li> 
                                        <Link to="/">Home</Link>
                                    </li>

                                    <li>
                                        <Link to="/about">About Us</Link>
                                    </li>

                                    <li>
                                        <Link to="/courses">Courses</Link>
                                    </li>

                                    <li>
                                        <Link to="/forum">Forum</Link>
                                    </li>

                                    <li>
                                        <Link to="/Contact">Contact Us</Link>
                                    </li> 
                                </ul>
                        </div>

                        <div className='footer Content'>
                            <h3>Follow Us</h3>
                             <ul className='socialIcons'>
                                <li><a href='#'><FaInstagram></FaInstagram></a></li>
                                <li><a href='#'><FaFacebook></FaFacebook></a></li>
                                <li><a href='#'><FaTiktok></FaTiktok></a></li>
                                <li><a href='#'><FaTwitter></FaTwitter></a></li>
                            </ul>
                        </div>

                        
                    </div>
                        <div className='bottomBar'>
                            <p>&copy; {new Date().getFullYear()} EduLearn</p>
                        </div>

                </footer>
            
        );
    }

    export default Footer