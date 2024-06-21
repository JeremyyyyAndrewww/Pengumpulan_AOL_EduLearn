import "./VBL.css"
import video from "./English.mp4"
import ReactPlayer from "react-player";


function EnglishVBL(){

    return(
        <>
            <div className="videoContainer">
                <h2>Past Tense - Basics Explanation</h2>

                <ReactPlayer controls={true} url={video} height="500px" width="750px"/>
            </div>
        </>
    );

}
export default EnglishVBL