import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HTMain from './views/HT_Main';
import HTServices from './views/HT_Services';
import HTAbout from './views/HT_About';
import HTCareers from './views/HT_Careers';
import HTDevices from './views/HT_Devices';
// import HTLogin from './views/HT_Login';
// import HTSignup from './views/HT_Signup';
import HT404 from './views/HT_404'

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<HTMain />} />
          <Route path="/services" element={<HTServices />} />
          <Route path="/about" element={<HTAbout />} />
          <Route path="/careers" element={<HTCareers />} />
          <Route path="/devices" element={<HTDevices />} />
          <Route path="*" element={<HT404 />} />
        </Routes>
      </Router>
  );
}

export default App;
