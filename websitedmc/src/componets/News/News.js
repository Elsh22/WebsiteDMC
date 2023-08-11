import React, { useState } from 'react';
import './NewsStyles.css';
import {db} from '../Firebase/firebaseConfig'
import { addDoc,collection } from 'firebase/firestore';


function NewsletterSignUp() {
  const [email, setEmail] = useState('');

  const userCollectionRef = collection(db, "contactdata")

  const handleSubmit =()=> {
    addDoc(userCollectionRef, {
        email: email,

    }).then(()=>{
        if(!alert("Form Submitted Successfully!")) document.location = '/'
    }).catch((error)=>{
        alert(error.message)
    })
        
}

  return (
    <div>
      <form >
      <input type='text' placeholder="Enter your Email" onChange={(event)=>{setEmail(event.target.value)}}/>
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default NewsletterSignUp;
