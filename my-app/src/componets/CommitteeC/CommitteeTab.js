import React from "react";
import "./CommitteeStyles.css";
import Img1 from '../../newassest/Personal.jpg';
import Img2 from '../../assets/2.png';
import Img3 from '../../newassest/community.PNG';
import Img4 from '../../newassest/Com.jpg';
import Img5 from '../../newassest/Comm.jpg';
import Img6 from '../../newassest/Prof.JPG';
import Img7 from '../../newassest/home4.jpg';  
import Img8 from '../../newassest/mixer5.jpg';   
import Img9 from '../../newassest/academic.jpeg';
import Img10 from '../../newassest/academ.jpeg';  
import Img11 from '../../newassest/LinkedIn2.jpg';  
import IMG12 from "../../newassest/home3.jpg"


const CommitteeItems = [
  {
    id: 1,
    images: [IMG12],
    title: "Developing Men of Color GroupMe",
    contact: ["https://web.groupme.com/join_group/55311378/BIK8Ub1u"]
  },
  {
    id: 2,
    name: ["Migue", "Joshua"],
    images: [Img1, Img6],
    title: "Professional Development",
    paragraph: "The professional development committe is a group of members who pride themselves on ensuring the general body is presented with opportunities to help them excel in the professional settings we hope to provide our members with.",
    contact: ["https://web.groupme.com/join_group/89916400/H3d6zVwp"]
  },
  {
    id: 3,
    name: ["Mamoudou", "Marcus"],
    images: [Img2, Img7, Img8 ],
    title: "Social Committee",
    paragraph: "The social committee consists of members who help to host and set up events that will help our members flourish socially.",
    contact: ["https://groupme.com/join_group/89916344/ZkE6p97c"]
  },
  {
    id: 4,
    name: ["Naeem"],
    images: [Img3, Img4, Img5],
    title: "Community Service Committee",
    paragraph: "The community service committe is a group of young men who happen to focus on ways in which Developing Men of Color can help the local community of richmond and also make other members aware of the various opportunities there are to help make the community better",
    contact: ["https://groupme.com/join_group/89916463/uBQYKr0c"]
  },
  {
    id: 5,
    name: ["Rayvean Graves", "Tyrus"],
    images: [Img9,Img10,Img11],
    title: "Academic Committee",
    paragraph: "The academic committee serves as a gateway between the general body and themselves that helps connect the members of Developing Men of Color with the various resources the campuses and club itself has to offer to help the succeed in the classroom.",
    contact: ["https://groupme.com/join_group/90176811/E5gNlYKq"]
  },
  {
    id: 5,
    name: ["Stephen"],
    images: [Img9,Img10,Img11],
    title: "Information Technology Committee",
    paragraph: "Information Technology Committee: DMC has a brand new committee called the “Information Technology Committee” (IT). This committee will consist of new innovative ideas and technologies being added to the organization. The committee will be actively open to join.",
    contact: ["https://web.groupme.com/join_group/96138862/KuAOiW33"]
  },
];

const Committee = (props) => {
  return (
    <div className="committee-container">
      <div className="images-container">
        {props.images ? props.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={props.name} />
          </div>
        )) : null}
      </div>
      <h3 className="committee-title">{props.title}</h3>
      <p className="committee-paragraph">{props.paragraph}</p>
      <h2 className="committee-name">{props.name ? props.name.join(", ") : ''}</h2>
      <div className="committee-contact">
        {props.contact ? props.contact.map((contact, index) => (
          <a href={contact} key={index} target="_blank" rel="noopener noreferrer">
            Join The GroupMe
          </a>
        )) : null}
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
