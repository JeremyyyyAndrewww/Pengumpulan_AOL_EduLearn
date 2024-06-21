import React from "react";
import Navbar2 from "../assets/Navbar/Navbar2.jsx";
import Desc from "../assets/AboutDesc/Desc.jsx";
import "./AboutMesh.css"
import Footer from "../assets/Footer/Footer.jsx"


function About(){
    return(
      <>       
        {/* <div className="absolute">
        <div className="absolute inset-0 justify-center">
          <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
          <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
          <div className="bg-shape1 bg-purple opacity-50 bg-blur"></div>
        </div>
      </div> */}
        <Navbar2/>
        <Desc></Desc>
        <Footer></Footer>
      </>  
    );
}

export default About

