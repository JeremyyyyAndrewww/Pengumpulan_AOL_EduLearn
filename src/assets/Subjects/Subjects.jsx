import React from 'react'
import './Subjects.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import physicsPic from "./Cards/history.jpg"

function Subjects(){

    

    return(
        <div className='cardContainer'>
            <div className='subHeading'>
                <span>This App's</span>
                <h1>Available Subjects</h1>
            </div>
            
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 3,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 2,
                    },
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >

            <div className='card physics'> 
                <h2>Physics</h2>
                <p>TES</p>
                
            </div>

            <div className='card biology'>
               
                <h2>Biology</h2>
                <p>TES</p>
                
            </div>

            <div className='card chemistry'>
               
                <h2>Chemistry</h2>
                <p>TES</p>
                
            </div>

            <div className='card economy'>
               
                <h2>Economy</h2>
                <p>TES</p>
                
            </div>

            <div className='card accounting'>
        
                <h2>Accounting</h2>
                <p>TES</p>
                
            </div>

            <div className='card history'>
                
                <h2>History</h2>
                <p>TES</p>
                
            </div>

            <div className='card geography'>
                
                <h2>Geography</h2>
                <p>TES</p>
                
            </div>

            <div className='card civics'>
                
                <h2>Civics</h2>
                <p>TES</p>
                
            </div>

            <div className='card english'>
            
                <h2>English</h2>
                <p>TES</p>
               
            </div>

            <div className='card bahasa'>
                <h2>Bahasa Indonesia</h2>
                <p>TES</p>
                
            </div>

            <div className='card programming'>
                <h2>Programming</h2>
                <p>TES</p>
                
            </div>

            <div className='card arts'>
                <h2>Arts</h2>
                <p>TES</p>
                
            </div>

            <div className='card more'>
                <h2>More</h2>
                <p>More</p>
                <h4>And Many More</h4>
            </div>
            
            </Carousel>
        </div>
        
        

    );
}

export default Subjects