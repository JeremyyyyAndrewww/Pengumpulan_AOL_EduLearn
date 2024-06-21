import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';

function Navbar2() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`nav2 ${sticky ? 'sticky' : ''}`}>
            <h1>Logo.</h1>
            <ul>
                <li className='navText2'>
                    <Link to="/">Home</Link>
                </li>
                <li className='navText2'>
                    <Link to="/about">About Us</Link>
                </li>
                <li className='navText2'>
                    <Link to="/courses">Courses</Link>
                </li>
                <li className='navText2'>
                    <Link to="/forum">Forum</Link>
                </li>

                <li className='navText2'>
                    <Link to="/contact">Contact Us</Link>
                </li>

                <li className='button'>
                    <Link to="/login">Log in</Link>
                </li>

                <li className='goPremiumButton'>
                    <Link to="/premium">Go Premium</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar2;
