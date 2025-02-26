import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Home from './Pages/Home.js';
import Menu from './Pages/Menu.js';
import Contact from './Pages/Contact.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Css/global.css'; // Importar CSS global

function App() {
    return (
        <Router>
           
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </Router>
    );
}

export default App;
