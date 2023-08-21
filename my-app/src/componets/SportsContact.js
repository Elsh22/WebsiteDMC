import { motion } from 'framer-motion';
import styles from './styles';
import { TitleText, TypingText } from './TypingText';
import { fadeIn, staggerContainer } from './motion';
import Map from '../newassest/map.png'
import './ContactFormStyles.css';
import {db} from './firebaseConfig'
import {useState} from "react"
import { addDoc,collection } from 'firebase/firestore';

const SportsContact = () => {
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
    return(
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Sports Contact form | " textStyles="text-center" />
      <TitleText
        title={(
          <>Have any Questions about sports 
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src={Map} alt="map" className="w-full h-full object-cover" />

      </motion.div>
      <div className='outer-container'>
            <p>Sports Contact form</p>

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
    </motion.div>
  </section>
  );
};

export default SportsContact;