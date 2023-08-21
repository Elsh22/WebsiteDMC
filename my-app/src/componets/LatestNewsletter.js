import React from 'react';
import "./LatestNewsletterStyles.css";
import img from '../newassest/Newsletter.jpg';
import img2 from '../newassest/Newsletter2.jpg';

function LatestNewsletter() {
  return (
    <div className='latest-newsletter'>
      <h2>Latest Newsletter</h2>
      
      <p>Greetings DMC Members,</p>
      <p>Last Week in Review:</p>

      <div className="image-container">
        <img src={img} alt="DMC" />
      </div>
      <p><b>DMC’s Last General Body Meeting</b> </p>
      <p>DMC has hosted their Final GBM of the semester where we recognized and celebrated graduating Seniors, Sunday Spotlights, Internships, and Intramural Champions. DMC appreciates all members who attend the meetings and events this semester. We want to wish good luck on finals and to enjoy your summer!</p>

      <p><b>DMC Suit Day</b></p>
      <p>On Thursday April 13th DMC hosted a Suit Day event which gave members the opportunity to come for a video and photoshoot highlighting their elegance in business attire. This event was truly special to see people of color in professional business attire.The event pictures will be posted soon, stay tuned!</p>

      <h3><b>Sunday Spotlight</b></h3>
  
      <p>DMC wants to congratulate <b>Jalen Harrison</b> for receiving an internship with Kinsale Insurance. Jalen has a bright future and we can’t wait to see what he does next!</p>
      <p>DMC would like to congratulate <b>Hussein Elshowaya</b> on creating a website for DMC and self learning how to code a website. Hussein is steadily climbing his way to a prosperous future. We are looking forward to what is coming up!</p>
      <p>DMC would like to congratulate <b>Chris Badenga</b> for teaching young students a course about financial literacy. Chris utilized the financial literacy certificate he obtained from the Virginia Federal Credit Union workshop at DMC’s 2nd GBM. Keep inspiring Chris, we look forward to seeing your positive impact flourish.</p>
      <p>DMC would like to congratulate <b>Zion Segears</b> for earning a scholarship from the VCU Board of Visitors and an internship with VCU’s MARC Research Program. We look forward to seeing you continue to walk in the steps of excellence.</p>
      <p>DMC would like to congratulate <b>Jahmil Johnson</b> for obtaining an internship with New Legacy Family Services. We can’t wait to see what you do next. This is an astonishing achievement to have.</p>
      <p>If you have recently earned a job offer, internship, or research opportunity and want to receive a Sunday spotlight to let fellow DMC members celebrate your success with you, here’s a link to fill out the form: <a href="https://forms.gle/YCzMBDhYbAkaHPUx7">Sunday Spotlight Form</a></p>

      <h3>For this Week & Upcoming</h3>
      <div className="image-container">
        <img src={img2} alt="DMC" />
      </div>
      <h3><b>Dear Graduating Seniors</b></h3>
      <p>Congratulations on reaching this incredible milestone in your academic journey! As you prepare to leave this chapter of your life behind and move on to the next, we want you to know how proud we are of your accomplishments. You have worked hard, overcome challenges, and achieved so much during your time in college, and we know that you will continue to accomplish great things in the future. Remember to cherish the memories you've made, stay connected with your peers and mentors, and never stop learning. We wish you all the success and happiness in the world. Congratulations, Graduates!</p>

      <h3><b>Fall Semester Events</b></h3>
      <li><b>DMC Dodgeball Game - August 31st </b></li>
      <li><b>Men of Color Mixer - September 17th</b></li>
      <li><b>The First General Body Meeting - September 20th</b></li>
      <li><b>DMC Linkedin Workshop - September 28th</b></li>
      <li><b>More Events Will be announced in the Fall Semester</b></li>

      <h3><b>Have A Great Summer</b></h3>
      <p>Since the semester is coming to an end, DMC wishes you all a wonderful summer. Whether you're taking classes, traveling, working, or just relaxing, We hope this summer brings you joy, happiness, and some well-deserved rest. Remember to take care of yourself, stay safe, and make the most of this beautiful season. We look forward to seeing you all again in the fall. Have a great summer!</p>

      <h3><b>Good Luck On Finals</b></h3>
      <p>As finals week approaches, DMC wishes you the best of luck in all of your exams and assignments. You've worked hard all semester, and now it's time to show what you've learned. Remember to take breaks, get enough sleep, and stay focused. You got this! Wishing you all the success in the world. Go ace those finals!</p>

      <h4>The Committees</h4>
      <ul>
        <a href="https://web.groupme.com/join_group/90176811/E5gNlYKq">Academic GroupMe</a>
        <li>The Academic Committee is responsible for ensuring the Academic success of all members and provides resources.</li>
        <a href="https://web.groupme.com/join_group/89916463/uBQYKr0c">Community Service GroupMe</a>
        <li>The Community Service Committee is responsible for giving opportunities for us to give back to the community and opportunities to bond while we do good for our community.</li>
        <a href="https://web.groupme.com/join_group/89916400/H3d6zVwp">Professional Development GroupMe</a>
        <li>The Professional Development Committee is in charge of preparing DMC members for after college by helping them secure Professional behavior and learning opportunities. </li>
        <a href="https://web.groupme.com/join_group/89916344/ZkE6p97c">Social GroupMe</a>
        <li>The Social Committee is the committee in charge of preparing events for DMC and ultimately getting members involved to do fun events and bond together.</li>
        <li>Information Technology Committee: DMC has a brand new committee called the “Information Technology Committee” (IT). This committee will consist of new innovative ideas and technologies being added to the organization. The committee will be actively open to join this spring semester. </li>
      </ul>

      <h5>Group Rules for Groupme</h5>
      <ul>
        <li>The main focus of this DMC chat is on DMC's upcoming events, networking, and new ideas presented by anyone in the chat. </li>
        <li>Things anyone shouldn’t say in chat: promoting Non-MOC events, cursing, and adding new members who didn’t get approved by an E-Board member</li>
        <li>If you have any questions, contact the Membership Chair Da’Ron Stuvaints at stuvaintss@vcu.edu </li>
        <li>If you want to promote a MOC event, connect with the membership chair or another E-Board member, and the E-Board will discuss it</li>
      </ul>

    <p>Follow the DMC Instagram page: <a href='https://www.instagram.com/vcu.dmc/'>Instagram</a></p>
    <p>Join the DMC GroupMe: <a href='https://web.groupme.com/join_group/55311378/BIK8Ub1'>The GroupMe</a></p>
    <p>LinkedIn Spotlight Sign-up sheet: <a href='https://docs.google.com/forms/d/e/1FAIpQLSd-dtFfXk6OhQT6Iwgf4cZ0Bd1JckOqkB9wXldOhGWh493Suw/viewform'>LinkedIn form Link</a></p>
    <p>Sunday Spotlight Form: <a href='https://forms.gle/YCzMBDhYbAkaHPUx7'>here</a></p>
    </div>
  );
}

export default LatestNewsletter;
