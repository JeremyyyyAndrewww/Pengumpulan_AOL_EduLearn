// import "./Desc.css"
// import React from "react";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

// function Desc(){
//     const [text] = useTypewriter({
//         words: ['Everywhere...', 'Everywhen...', 'Anytime...', 'in Anywhere...'],
//         loop: true,
//         typeSpeed: 120,
//         deleteSpeed: 80,
//     });

//     return(
//         <div className="descContainer glass">
//             <div className="descTitle">
//                 <span className="aboutUs">About Us</span>
//                 <h2 className="learn">
//                     Learn {' '}
//                     <span className="typeText">
//                         {text}
//                     </span>
                    
//                     <span style={{color: 'black'}}>
//                         <Cursor cursorStyle='|'/>
//                     </span>
//                 </h2>
//             </div>

//             <div className="descContent">
//                 <div className="desc">
//                     <p>Welcome to EduLearn, your ultimate destination for innovative and comprehensive learning solutions. We are committed to transforming education by providing a dynamic platform that caters to the diverse needs of learners worldwide. Whether you are a student looking to enhance your knowledge or a professional aiming to upgrade your skills, EduLearn is here to support your educational journey.</p>
//                 </div>    

//                 <div className="joinPart">
//                     <button className="joinNowDesc">Join Now</button>
//                 </div>
                          
//                 <img className="imgDesc" src="" alt="Learning" />
//             </div>
//         </div>
//     );
// }

// export default Desc;





import "./Desc.css";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import DesIm from "./Desc.jpg";

function Desc() {
    const [text] = useTypewriter({
        words: ['Everywhere...', 'Everywhen...', 'Anytime...', 'in Anywhere...'],
        loop: true,
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <div className="descContainer">
            <div className="descTitle">
                <span className="aboutUs">About Us</span>
                <h2 className="learn">
                    Learn{' '}
                    <span className="typeText">
                        {text}
                    </span>
                    <span style={{color: 'black'}}>
                        <Cursor cursorStyle='|' />
                    </span>
                </h2>
            </div>

            <div className="contentWrapper">
                <div className="descContent">
                    <div className="desc">
                        <p>
                            Welcome to EduLearn, your ultimate destination for innovative and comprehensive learning solutions. We are committed to transforming education by providing a dynamic platform that caters to the diverse needs of learners worldwide. Whether you are a student looking to enhance your knowledge or a professional aiming to upgrade your skills, EduLearn is here to support your educational journey.
                        </p>

                        <p>
                        At EduLearn, we prioritize accessibility, engagement, and effectiveness in education. We tailor our courses to accommodate diverse learning styles and paces, providing comprehensive notes and interactive exercises to facilitate understanding and retention. Join our global learning community today and embark on a journey of lifelong learning with EduLearn.
                        </p>
                    </div>

                    <div className="joinPart">
                        <button className="joinNowDesc">Join Now</button>
                    </div>
                </div>
                <img className="descImg" src={DesIm} alt="Educational Illustration" />
            </div>

        </div>
    );
}

export default Desc;
