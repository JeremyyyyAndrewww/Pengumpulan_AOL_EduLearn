import React from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../../Navbar/Navbar2';
import Footer from '../../Footer/Footer';
import './SubjectShow.css';

function SubjectShow() {
  return (
    <>
      <Navbar2 />
      <div className="choiceContainer">
        <div className="choiceHeading">
          <h2>English</h2>
          <h3>Categories: <span className="changeBlue">Languages</span></h3>
        </div>

        <div className="subjectClassContainer">
          <Link to="/courses/english/middle-school" className="subjectBox subBox1">
            <h3>Elementary</h3>
            <span>Grade 1-6</span>
          </Link>

          <Link to="/courses/english/middle-school" className="subjectBox subBox2">
            <h3>Middle School</h3>
            <span>Grade 7-9</span>
          </Link>

          <Link to="/courses/english/middle-school" className="subjectBox subBox3">
            <h3>High School</h3>
            <span>Grade 10-12</span>
          </Link>
        </div>

        <Link to="/courses"><button className="backButton">Back</button></Link>
      </div>
      <Footer />
    </>
  );
}

export default SubjectShow;
