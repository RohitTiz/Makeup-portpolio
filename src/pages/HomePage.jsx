// pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import PortfolioGrid from '../components/PortfolioGrid';
import VideoShowcase from '../components/VideoShowcase';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <PortfolioGrid />
      <VideoShowcase />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;