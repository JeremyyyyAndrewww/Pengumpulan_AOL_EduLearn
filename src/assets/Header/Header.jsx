import React from 'react'
import './Header.css'

function Header(){

    

        return(
            <header className="headerContainer">
                <div className="insideHeadImg">
                    <h3>Welcome to <span className='blue'>EduLearn.</span></h3>
                    <p>Unlock the world of knowledge with our innovative learning platform. Dive into interactive lessons, quizzes, and resources designed to fuel your curiosity and ignite your potential.</p>
                    <button className="headButton">Explore!</button>
                </div> 
            </header>

        );
    }

    export default Header