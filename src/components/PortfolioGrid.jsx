// components/PortfolioGrid.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PortfolioGrid = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Bridal Look',
      image: 'https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Elegant bridal makeup with natural tones and delicate highlights for your special day.'
    },
    {
      id: 2,
      title: 'Editorial Shoot',
      image: 'https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'High-fashion editorial looks designed for photography and runway appearances.'
    },
    {
      id: 3,
      title: 'Party Glam',
      image: 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Glamorous evening makeup with shimmer and bold accents for special events.'
    },
    {
      id: 4,
      title: 'Natural Beauty',
      image: 'https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Subtle enhancement of natural features for a fresh, everyday look.'
    },
    {
      id: 5,
      title: 'Creative Art',
      image: 'https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Artistic and avant-garde makeup designs for creative expression.'
    },
    {
      id: 6,
      title: 'Classic Elegance',
      image: 'https://images.pexels.com/photos/247878/pexels-photo-247878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Timeless beauty looks with a modern twist for sophisticated events.'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-amber-800 mb-4">Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore Arohi's diverse range of makeup artistry, from bridal elegance to editorial creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-80 cursor-pointer"
              onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 ${flippedIndex === index ? 'rotate-y-180' : ''}`}>
                <div className="absolute inset-0 w-full h-full bg-cover bg-center rounded-lg shadow-md" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="absolute inset-0 bg-black/70 rounded-lg flex flex-col justify-center items-center p-6 text-center text-white opacity-0 hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                  <p className="text-sm">Click to see details</p>
                </div>
                
                {/* Back of card (flipped) */}
                <div className="absolute inset-0 w-full h-full bg-amber-800 text-white rounded-lg p-6 flex flex-col justify-center items-center text-center rotate-y-180 backface-hidden">
                  <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                  <p className="text-sm mb-4">{item.description}</p>
                  <button className="px-4 py-2 bg-white text-amber-800 rounded-full text-sm font-medium mt-4">
                    View Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;