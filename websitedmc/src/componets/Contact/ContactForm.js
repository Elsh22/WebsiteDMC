import './ContactFormStyles.css';
import {db} from '../Firebase/firebaseConfig'
import {useState} from "react"
import { addDoc,collection } from 'firebase/firestore';


function ContactForm() {
    const [name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Subject, setSubject] = useState();
    const [Message, setMessage] = useState();

    const userCollectionRef = collection(db, "contactdata")

    const handleSubmit =()=> {
        addDoc(userCollectionRef, {
            name: name,
            Email: Email,
            Subject: Subject,
            Message: Message
        }).then(()=>{
            if(!alert("Form Submitted Successfully!")) document.location = '/'
        }).catch((error)=>{
            alert(error.message)
        })
            
    }


    return (
        <div className='outer-container'>
            <p>Contact Form</p>

            <form className="contactform">
                <label className="gold-label">Full name</label>
                <input type='text' placeholder="Enter your Full Name"
                onChange={(event)=>{
                    setName(event.target.value)
                }}/>

                <label className="gold-label">Email</label>
                <input type='text' placeholder="Enter your Email" 
                onChange={(event)=>{
                    setEmail(event.target.value)
                }}/>

                <label className="gold-label">Subject</label>
                <input type='text' placeholder="Enter your Subject"
                onChange={(event)=>{
                    setSubject(event.target.value)
                }}/>

                <label className="gold-label">Your Message</label>
                <textarea placeholder="Enter your Message" onChange={(event)=>{
                    setMessage(event.target.value)
                }}></textarea>
            </form>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default ContactForm;