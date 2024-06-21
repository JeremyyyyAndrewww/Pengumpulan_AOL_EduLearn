import React, { useState } from "react";
import "./CoursesComponent.css";
import 'bootstrap/dist/css/bootstrap.css';
import Data from './Data';
import CourseCard from "./CourseCard";

function CoursesComponent() {
  const [items, setItems] = useState(Data);

  return (
    <>
      <div className="coursesContainer">
        <div className="coursesHeading">
          <h3>Courses</h3>
          <h5>Online Learning Is Now In Your <span className="finger">Fingertips</span></h5>
        </div>

        <div className="courseNavContainer">
          <nav className="courseNav">
            <ul>
              <li className="coursecategory">All</li>
              <li className="coursecategory">Sciences</li>
              <li className="coursecategory">Socials</li>
              <li className="coursecategory">Languages</li>
              <li className="coursecategory">Others</li>
            </ul>
          </nav>
        </div>

        <CourseCard items={items} /> 
      </div>
    </>
  );
}

export default CoursesComponent;
