import React from 'react';
import "./LatestNewsletterStyles.css";
import img from '../../newassest/Newsletter.jpg';

function LatestNewsletter() {
  return (
    <div className='latest-newsletter'>
      <h2>Hello DMC Members,</h2>
      <p>We have an exciting opportunity, especially for all majors looking to get more involved. We're eager to help everyone settle in and become a part of our vibrant community. If you're considering taking a more active role in our organization or joining one of our committees, we'd love to have you on board! Click on the links below to explore opportunities that align with your interests. This year, we're putting a special emphasis on increasing member involvement, and we'd be thrilled for you to be a part of that journey. Feel free to add the relevant links or other information where needed</p>
      
      <div className="image-container">
        <img src={img} alt="DMC" />
      </div>
      <h3>DMC’s Second General Body Meeting (10/18)</h3>
      <p>DMC will host their Second General Body Meeting of the year on Wednesday, October 18th, at 7 p.m. at Stem Building Mark your calendars for the Second GBM of the semester. The event will be filled with opportunities to connect and meet the CEO of Virginia Credit Union plus excellent food. It will be an event you will not want to miss!</p>
      <h3>Sunday Spotlight:</h3>
      <p>DMC Congratulates Darrel Otoo on his internship at Northrop Grumman!</p>
      <h3>Get Involved:</h3>
      <p>If you're looking to take a more active role in our organization or are considering joining one of our committees, we'd love to have you! Click on the links below to explore opportunities that interest you. This year, we're especially focused on increasing member involvement, and we'd be thrilled for you to be a part of that. If you have any questions about the committees the committee chair's emails are down below under the committees.</p>
      <h4>The Committees:</h4>
      <ul>
        <a href="https://web.groupme.com/join_group/90176811/E5gNlYKq" target="_blank" rel="noopener noreferrer">Academic GroupMe</a>
        <li>The Academic Committee is responsible for ensuring the Academic success of all members and provides resources.</li>
        <a href="https://web.groupme.com/join_group/89916463/uBQYKr0c" target="_blank" rel="noopener noreferrer">Community Service GroupMe</a>
        <li>The Community Service Committee is responsible for giving opportunities for us to give back to the community and opportunities to bond while we do good for our community.</li>
        <a href="https://web.groupme.com/join_group/89916400/H3d6zVwp" target="_blank" rel="noopener noreferrer">Professional Development GroupMe</a>
        <li>The Professional Development Committee is in charge of preparing DMC members for after college by helping them secure Professional behavior and learning opportunities.</li>
        <a href="https://web.groupme.com/join_group/89916344/ZkE6p97c" target="_blank" rel="noopener noreferrer">Social GroupMe</a>
        <li>The Social Committee is the committee in charge of preparing events for DMC and ultimately getting members involved to do fun events and bond together.</li>
        <a href="https://web.groupme.com/join_group/96138862/KuAOiW33" target="_blank" rel="noopener noreferrer">Information Technology Committee</a>
        <li>Information Technology Committee: DMC has a brand new committee called the “Information Technology Committee” (IT). This committee will consist of new innovative ideas and technologies being added to the organization. The committee will be actively open to join. </li>
      </ul>
      <h3>Committee Contacts:</h3>
      <p>Social Committee (Mamoudou & Marcus): Mamoudou: diallom2@vcu.edu</p>
      <p>Academic Committee (Tyrus & Ray): Tyrus: somuahtj@vcu.edu, Ray: gravesr2@vcu.edu</p>
      <p>Professional Development Committee (Miguel & Joshua): Miguel: silesm@vcu.edu, Joshua: kankamjt@vcu.edu</p>
      <p>Community Service Committee (Naeem): Naeem: ahmadn11@vcu.edu</p>
      <p>Information Technology Committee (Stephen): Stephen: kouevisk@vcu.edu</p>
      <h3>Group Rules for Groupme</h3>
      <p>The main focus of this DMC chat is on DMC's upcoming events, networking, and new ideas presented by anyone in the chat. <br></br>
Things anyone shouldn’t say in chat: promoting Non-MOC events, cursing, and adding new members who didn’t get approved by an E-Board member<br></br>
If you have any questions, contact the Membership Chair David Foster at fosterde@vcu.edu  <br></br>
If you want to promote an MOC event, connect with the membership chair or another E-Board member, and the E-Board will discuss it</p>
    <p>Follow the DMC Instagram page: <a href='https://www.instagram.com/vcu.dmc/' target="_blank" rel="noopener noreferrer">Instagram</a></p>
    <p>Join the DMC GroupMe: <a href='https://web.groupme.com/join_group/55311378/BIK8Ub1u' target="_blank" rel="noopener noreferrer">The GroupMe</a></p>
    <p>LinkedIn Spotlight Sign-up sheet: <a href='https://docs.google.com/forms/d/e/1FAIpQLSd-dtFfXk6OhQT6Iwgf4cZ0Bd1JckOqkB9wXldOhGWh493Suw/viewform' target="_blank" rel="noopener noreferrer">LinkedIn form Link</a></p>
    <p>Sunday Spotlight Form: <a href='https://forms.gle/YCzMBDhYbAkaHPUx7' target="_blank" rel="noopener noreferrer">here</a></p>
    </div>
  );
}

export default LatestNewsletter;
