import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import Event from './routes/Event'; 
import Home  from'./routes/Home';
import About  from'./routes/About';
import Contact  from'./routes/Contact';
import Newsletter  from'./routes/Newsletter';
import Mentorship  from'./routes/Mentorship';
import Committee  from'./routes/Committee';
import Gallery  from'./routes/Gallery'
import SportsDmc from'./routes/SportsDmc';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SportsDmc" element={<SportsDmc />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Newsletter" element={<Newsletter />} />
        <Route path="/Mentorship" element={<Mentorship />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Committee" element={<Committee />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}
//<Route path="/Event" element={<Event />} />
