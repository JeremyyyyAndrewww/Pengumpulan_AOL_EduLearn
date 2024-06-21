import React from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../../Navbar/Navbar2';
import Footer from '../../Footer/Footer';
import './SubjectShow.css';

function ClassChoice() {
  const materials = [
    {
      title: 'Grammar Basics',
      description: 'Learn the fundamentals of English grammar.',
      link: '/courses/english/middle-school/materials/grammar-basics',
    },
    {
      title: 'Writing Essays',
      description: 'Tips and tricks for writing compelling essays.',
      link: '/courses/english/middle-school/materials/grammar-basics',
    },
    {
      title: 'Reading Comprehension',
      description: 'Improve your reading skills with these exercises.',
      link: '/courses/english/middle-school/materials/grammar-basics',
    },
  ];

  return (
    <>
      <Navbar2 />
      <div className="choiceContainer">
        <div className="choiceHeading">
          <h2>English - Middle School</h2>
          <h3>Choose <span className="changeBlue">Materials</span></h3>
        </div>

            <div className="materialsContainer">
            {materials.map((material, index) => (
                <Link key={index} to={material.link} className="materialBox">
                <h3>{material.title}</h3>
                <p>{material.description}</p>
                </Link>
            ))}
            </div>

            <Link to="/courses/english"><button className="backButton">Back</button></Link>
        </div>
      <Footer />
    </>
  );
}

export default ClassChoice;
