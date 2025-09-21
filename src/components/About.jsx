// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-amber-800 mb-6">About Arohi</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Arohi is a professional makeup artist, trained at Lakme Academy, Delhi (Saket). 
            Specializes in bridal, editorial, and high-end beauty looks with a focus on enhancing 
            natural beauty through refined techniques and premium products.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Bridal', desc: 'Elegant wedding makeup that lasts all day' },
              { title: 'Editorial', desc: 'High-fashion looks for photoshoots' },
              { title: 'Special Events', desc: 'Glamorous makeup for any occasion' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-serif text-amber-700 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;