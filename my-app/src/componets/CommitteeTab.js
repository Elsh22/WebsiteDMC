import React from "react";
import "./CommitteeStyles.css";
import Img1 from '../newassest/Personal.jpg';
import Img2 from '../assets/2.png';
import Img3 from '../newassest/community.PNG';
import Img4 from '../newassest/Com.jpg';
import Img5 from '../newassest/Comm.jpg';
import Img6 from '../newassest/Prof.JPG';
import Img7 from '../newassest/home4.jpg';  
import Img8 from '../newassest/mixer5.jpg';   
import Img9 from '../newassest/academic.jpeg';
import Img10 from '../newassest/academ.jpeg';  
import Img11 from '../newassest/LinkedIn2.jpg';  


const CommitteeItems = [
  {
    id: 1,
    name: ["Corey Long", "Chad Sims", "Josh"],
    images: [Img1, Img6],
    title: "Professional Development",
    paragraph: "The professional development committe is a group of members who pride themselves on ensuring the general body is presented with opportunities to help them excel in the professional settings we hope to provide our members with.",
    contact: ["https://www.google.com/url?q=https://vcu.campusgroups.com/click?email_links_id%3D2899%26member_id%3D17575761&source=gmail-imap&ust=1681144836000000&usg=AOvVaw2bL0xfuid9BLElSayAYZ5A"]
  },
  {
    id: 2,
    name: ["Souleye", "Junior", "Sami"],
    images: [Img2, Img7, Img8 ],
    title: "Social Committee",
    paragraph: "The social committee consists of members who help to host and set up events that will help our members flourish socially.",
    contact: ["https://groupme.com/join_group/89916344/ZkE6p97c"]
  },
  {
    id: 3,
    name: ["Zion", "David Foster"],
    images: [Img3, Img4, Img5],
    title: "Community Service Committee",
    paragraph: "The community service committe is a group of young men who happen to focus on ways in which Developing Men of Color can help the local community of richmond and also make other members aware of the various opportunities there are to help make the community better",
    contact: ["https://groupme.com/join_group/89916463/uBQYKr0c"]
  },
  {
    id: 4,
    name: ["Rayvean Graves", "Will"],
    images: [Img9,Img10,Img11],
    title: "Academic Committee",
    paragraph: "The academic committee serves as a gateway between the general body and themselves that helps connect the members of Developing Men of Color with the various resources the campuses and club itself has to offer to help the succeed in the classroom.",
    contact: ["https://groupme.com/join_group/90176811/E5gNlYKq"]
  },
];

const Committee = (props) => {
  return (
    <div className="committee-container">
      <div className="images-container">
        {props.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={props.name} />
          </div>
        ))}
      </div>
      <h3 className="committee-title">{props.title}</h3>
      <p className="committee-paragraph">{props.paragraph}</p>
      <h2 className="committee-name">{props.name.join(", ")}</h2>
      <div className="committee-contact">
        {props.contact.map((contact, index) => (
          <a href={contact} key={index}>
            Join The GroupMe
          </a>
        ))}
      </div>
    </div>
  );
};

const CommitteeTab = () => {
  return (
    <div className="committee-tab-container">
      {CommitteeItems.map((item) => (
      <Committee
       key={item.id}
       title={item.title}
       paragraph={item.paragraph}
       name={item.name}
       images={item.images}
       contact={item.contact}
     />
  ))}
</div>
);
};

export default CommitteeTab;
