// import React, { useState } from "react";
    import "./ContactUs.css";
// import axios from "axios";

function ContactUs() {
    // const url = "";

    // const [data, setData] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    // });

    // const submit = (e) => {
    //     e.preventDefault();
    //     axios.post(url, {
    //         name: data.name,
    //         email: data.email,
    //         message: data.message,
    //     })
    //     .then(res => {
    //         console.log(res.data); 
    //         setData({
    //             name: '',
    //             email: '',
    //             message: '',
    //         });
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
    // };

    // const handle = (e) => {
    //     const { id, value } = e.target;
    //     setData(prevData => ({
    //         ...prevData,
    //         [id]: value,
    //     }));
    // };

    return (
        <div className="contactContainer">
            <div className="contactHeading">
                <h2>Contact Us</h2>
                <h3>Get in touch!</h3>
            </div>

            <form className="contactForm">
                <input
                    // onChange={handle}
                    // value={data.name}
                    id="name"
                    type="text"
                    placeholder="Username"
                    required
                />
                <input
                    // onChange={handle}
                    // value={data.email}
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                />
                <input
                    id="message"
                    className="contactMsg"
                    type="text"
                    placeholder="Leave a message here..."
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactUs;



// import React, { useState } from "react";
// import "./ContactUs.css"
// import axios, { Axios } from "axios";

// function ContactUs(){

//     const url = ""

//     const [data, setData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });


//     function submit(e){
//         e.preventDefault();
//         Axios.post(url,{
//             name: data.name,
//             email: data.email,
//             message: data.message
//         })
//         .then(res=>{
//             console.log(res.data)
//         })
//     }

//     function handle (e){
//         const newdata = {...data}
//         newdata[e.target.id] = e.target.value
//         setData(newdata)
//         console.log(newdata)
//     };

//     return(
//         <>
//             <div className="contactContainer">
//                 <div className="contactHeading">
//                     <h2>Contact Us</h2>
//                     <h3>Get in touch!</h3>
//                 </div>

//                 <form className="contactForm" onSubmit={(e)=>submit(e)}>
//                     <input onChange={(e)=>handle(e)} value={data.name} type="Name" placeholder="Username"/>
//                     <input onChange={(e)=>handle(e)} value={data.email} type="email" placeholder="Email"/>
//                     <input onChange={(e)=>handle(e)} value={data.message} className="contactMsg" type="text" placeholder="Leave a message here..."/>

//                     <button type="submit">Send</button>
//                 </form>
//             </div>
        
//         </>
//     );

// }

// export default ContactUs