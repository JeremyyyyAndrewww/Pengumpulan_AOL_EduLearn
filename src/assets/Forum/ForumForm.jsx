import React,{useState} from "react";
import Navbar2 from "../Navbar/Navbar2.jsx";
// import $ from "jquery"
import './Forum.css'
import { myFunction } from './Forumfill.js'
import { Link } from "react-router-dom";

function ForumForm(){
    const [forumInput, setForumInput] = useState("");
    const [messages,setMessage]=useState([])
    const [subject,setSubject]=useState("")
    const handleChange = (event) => {
        setForumInput(event.target.value);
    };
    
    const handleSubject=(event)=>{
        setSubject(event.target.value)
    }

    const handleClick=(event)=>{
        event.preventDefault();
        const message = {
            subject: subject,
            text: forumInput
        };
        myFunction(message,messages,setMessage);
        setForumInput("");
        setSubject("");
    }

    return(
        <>
            <div className="Formforum">
                <Navbar2></Navbar2>
                <div className="header">
                    <h1>Discuss Here</h1>
                </div>
                <div className="form_boxes">
                    <form className="fill_form">
                        <input id="userInput" placeholder="forum"
                        value={forumInput} onChange={handleChange}/>
                        <select
                            id="subjectInput"
                            value={subject}
                            onChange={handleSubject}
                        >
                            <option value="Default">Default</option>
                            <option value="History">History</option>
                            <option value="Science">Science</option>
                            <option value="English">English</option>
                            <option value="Math">Math</option>
                        </select>
                        <button onClick={handleClick}>Create Forum</button>
                    </form>
                </div>
                <div className="stack">
                        {messages.map((message, index) => (
                            <div key={index} className="messagebox">
                            <p>Susan Wijaya</p>
                            <div className="name">
                            <p>subject:{message.subject}</p>
                            <p>{message.text}</p>
                            </div>
                            <div className="reply"><Link>Reply</Link></div>
                            </div>
                        ))}
                </div>
            </div>

        </>
    );
}
export default ForumForm;