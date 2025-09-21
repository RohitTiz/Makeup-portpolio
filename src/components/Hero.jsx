// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with improved image and gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border border-amber-300/30 z-15"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-amber-300/20 z-15"></div>
      
      {/* Main content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center text-white px-6 max-w-4xl"
      >
        {/* Subtitle with decorative lines */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-px bg-amber-300/50 mr-4"></div>
          <p className="text-amber-300 tracking-widest text-sm uppercase">Luxury Beauty</p>
          <div className="w-16 h-px bg-amber-300/50 ml-4"></div>
        </div>
        
        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal mb-4 tracking-tight">Arohi</h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl font-light mb-8 tracking-wider max-w-2xl mx-auto">
          Elevating beauty with precision and artistry
        </p>
        
        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#FEF3C7" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="px-10 py-4 bg-amber-50 text-amber-800 rounded-sm font-medium tracking-wider text-lg hover:bg-amber-100 transition-colors relative overflow-hidden group"
        >
          <span className="relative z-10">Book Appointment</span>
          <motion.div 
            className="absolute inset-0 bg-amber-300 z-0"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
        
        {/* Social links */}
        <div className="flex justify-center mt-12 space-x-6">
          <motion.a
            href="https://www.instagram.com/glamup.arohii/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="text-amber-50/70 hover:text-amber-300 text-sm uppercase tracking-widest transition-colors"
          >
            Instagram
          </motion.a>
          
          {['Pinterest', 'YouTube'].map((platform) => (
            <motion.a
              key={platform}
              href="#"
              whileHover={{ y: -3 }}
              className="text-amber-50/70 hover:text-amber-300 text-sm uppercase tracking-widest transition-colors"
            >
              {platform}
            </motion.a>
          ))}
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <button 
          onClick={() => scrollToSection('about')}
          className="text-amber-300 flex flex-col items-center group"
        >
          <span className="text-xs tracking-widest mb-2 opacity-70 group-hover:opacity-100 transition-opacity">Explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;