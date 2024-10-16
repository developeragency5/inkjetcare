import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import SubsPolicy from './pages/SubsPolicy';
import ContactUs from './pages/ContactUs';
import CustomerService from './pages/CustomerService';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms-of-use' element={<TermsOfUse/>}/>
        <Route path='/subscription-policy' element={<SubsPolicy/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path="/customer-service" element={<CustomerService/>} />
      </Routes>

  );
}

export default App;
