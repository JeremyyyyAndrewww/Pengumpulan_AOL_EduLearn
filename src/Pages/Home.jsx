
  import React from 'react'
  import Header from "../assets/Header/Header.jsx"
  import Footer from "../assets/Footer/Footer.jsx"
  import NavbarReal from "../assets/Navbar/NavbarReal.jsx"
  import Benefits from "../assets/Benefits/Benefits.jsx"
  import Subjects from '../assets/Subjects/Subjects.jsx'
  import Features from '../assets/Features/Features.jsx'
  import Promo from '../assets/Promo(blm)/Promo.jsx'
  import "./backgroundStyle.css"
  

  

function Home() {
  return(
    <div>
      <NavbarReal></NavbarReal>
      <Header></Header>  
      
      <Promo></Promo> 
      <Features></Features> 
      <Subjects></Subjects>
      <Benefits></Benefits>
      <Footer></Footer>
    </div>
  );
}

export default Home
