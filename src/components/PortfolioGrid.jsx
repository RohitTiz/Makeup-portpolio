import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PortfolioGrid = () => {
  const [activeItem, setActiveItem] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Bridal Elegance',
      category: 'Bridal',
      image:"/portfolio/one.jpeg",
      description: 'Timeless bridal beauty with delicate highlights and natural radiance for your most important day.',
      size: 'large'
    },
    {
      id: 2,
      title: 'Editorial Portrait',
      category: 'Editorial',
      image:"/portfolio/four.jpeg",
      description: 'Professional editorial portraits with dramatic lighting and sophisticated monochrome aesthetics.',
      size: 'medium'
    },
    {
      id: 3,
      title: 'Party Glamour',
      category: 'Glam',
      image:"/portfolio/three.jpeg",
      description: 'Stunning evening looks with shimmer and sophistication for unforgettable nights.',
      size: 'small'
    },
    {
      id: 4,
      title: 'Character Artistry',
      category: 'SFX',
      image:"/portfolio/one.jpeg",
      description: 'Special effects and character makeup including facial hair applications and transformative looks.',
      size: 'medium'
    },
    {
      id: 5,
      title: 'Creative Expression',
      category: 'Artistic',
      image:"/portfolio/five.jpeg",
      description: 'Avant-garde makeup artistry pushing boundaries of conventional beauty with bold color stories.',
      size: 'large'
    },
    {
      id: 6,
      title: 'Natural Beauty',
      category: 'Natural',
      image:"/portfolio/three.jpeg",
      description: 'Enhancing your natural features with subtle, fresh techniques that celebrate authenticity.',
      size: 'small'
    },
    {
      id: 7,
      title: 'Portrait Mastery',
      category: 'Portrait',
      image:"/portfolio/one.jpeg",
      description: 'Professional headshots and portrait work with emphasis on natural beauty and confident expression.',
      size: 'medium'
    },
    {
      id: 8,
      title: 'Transformation Art',
      category: 'Transform',
      image:"/portfolio/two.jpeg",
      description: 'Complete transformations showcasing versatility from elegant to avant-garde styling.',
      size: 'small'
    }
  ];

  const getItemClasses = (size, index) => {
    const baseClasses = "relative overflow-hidden cursor-pointer group";
    
    switch (size) {
      case 'large':
        return `${baseClasses} col-span-2 row-span-2`;
      case 'medium':
        return `${baseClasses} col-span-2 row-span-1`;
      case 'small':
        return `${baseClasses} col-span-1 row-span-1`;
      default:
        return `${baseClasses} col-span-1 row-span-1`;
    }
  };

  const getItemHeight = (size) => {
    switch (size) {
      case 'large':
        return 'h-96 md:h-[500px]';
      case 'medium':
        return 'h-64 md:h-80';
      case 'small':
        return 'h-48 md:h-64';
      default:
        return 'h-64';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header with creative text placement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-amber-600 font-light text-lg tracking-wider uppercase">Portfolio</span>
              <h2 className="text-5xl md:text-7xl font-serif text-amber-900 leading-none">
                Artistry in
                <br />
                <span className="italic text-rose-800">Motion</span>
              </h2>
            </div>
            <div className="hidden lg:block text-right">
              <p className="text-gray-600 max-w-xs text-sm leading-relaxed">
                From bridal glow-ups to high fashion editorials, I paint dreams on faces — one flawless brushstroke at a time.
              </p>
              <div className="mt-4 w-20 h-px bg-amber-600 ml-auto"></div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-4 grid-rows-4 gap-4 md:gap-6 auto-rows-fr">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${getItemClasses(item.size, index)} ${getItemHeight(item.size)} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500`}
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Text Content - Different positions for variety */}
              <div className={`absolute inset-0 p-6 flex ${
                index % 3 === 0 ? 'items-end justify-start' : 
                index % 3 === 1 ? 'items-center justify-center text-center' : 
                'items-start justify-end text-right'
              }`}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-white"
                >
                  {/* Category Tag with specialized colors */}
                  <motion.span 
                    className={`inline-block px-3 py-1 backdrop-blur-sm rounded-full text-xs font-medium tracking-wide uppercase mb-2 ${
                      item.category === 'SFX' ? 'bg-purple-600/90 text-white' :
                      item.category === 'Portrait' ? 'bg-gray-800/90 text-white' :
                      item.category === 'Transform' ? 'bg-rose-600/90 text-white' :
                      'bg-amber-600/90 text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.category}
                  </motion.span>
                  
                  {/* Title with dynamic sizing */}
                  <h3 className={`font-serif mb-2 leading-tight ${
                    item.size === 'large' ? 'text-2xl md:text-3xl' : 
                    item.size === 'medium' ? 'text-xl md:text-2xl' : 
                    'text-lg md:text-xl'
                  }`}>
                    {item.title}
                  </h3>
                  
                  {/* Description - only show on hover and for larger items */}
                  {(item.size === 'large' || item.size === 'medium') && (
                    <motion.p 
                      className="text-sm text-gray-200 leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                  
                  {/* Interactive Element */}
                  <motion.div 
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center space-x-2 text-amber-300">
                      <span className="text-xs font-medium tracking-wide">VIEW WORK</span>
                      <div className="w-8 h-px bg-amber-300"></div>
                      <div className="w-1 h-1 bg-amber-300 rounded-full"></div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              {index === 1 && (
                <div className="absolute -top-6 -right-6 w-12 h-12 border border-amber-400 rounded-full opacity-50"></div>
              )}
              
              {index === 4 && (
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-rose-400/30 rounded-full blur-sm"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-amber-200">
            <span className="text-gray-600 text-sm">Ready to transform your look?</span>
            <motion.button 
              className="px-6 py-2 bg-amber-800 text-white rounded-full text-sm font-medium hover:bg-amber-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Custom Styles for 3D flip effect */}
      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default PortfolioGrid;