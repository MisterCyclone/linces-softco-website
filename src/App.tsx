// Import global styles
import './App.css';

// Import routing components
import { Navigate, Route, Routes } from 'react-router-dom';

// Import global components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VelocityPage from './pages/VelocityPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about-us' element={<AboutPage/>}/>
        <Route path='/velocity-enterprise' element={<VelocityPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>

        {/* Redirect any unknown paths to the homepage */}
        <Route path='*' element={<Navigate to='/' replace/>}/>
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
