import Navbar2 from "../../../Navbar/Navbar2";
import Footer from "../../../Footer/Footer";
import "./StartCourse.css"
import EnglishVBL from "./VBL/EnglishVBL";
import EnglishExercise from "./Exercise/EnglishExercise";
import EnglishNote from "./Notes/EnglishNotes.jsx"

function StartCourse(){

    return(
        <>
            <Navbar2></Navbar2>
                <div className="startCourseContainer">
                    <div className="startCourseHeading">
                        <h2>Grammar Basics</h2>
                        <h3>Middle School <span className="changeBlue">Level</span></h3>
                    </div>
                    
                    <EnglishVBL></EnglishVBL>
                    <EnglishExercise></EnglishExercise>
                    
                    <EnglishNote></EnglishNote>
                </div>
            <Footer></Footer>
        </>
    );
}

export default StartCourse