// components/VideoShowcase.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      id: 1,
      title: 'Bridal Transformation',
      thumbnail: 'https://images.pexels.com/photos/2879825/pexels-photo-2879825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      url: '#'
    },
    {
      id: 2,
      title: 'Editorial Makeover',
      thumbnail: 'https://images.pexels.com/photos/2748241/pexels-photo-2748241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      url: '#'
    },
    {
      id: 3,
      title: 'Evening Glam',
      thumbnail: 'https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      url: '#'
    }
  ];

  return (
    <section id="videos" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-amber-800 mb-4">Video Showcase</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch Arohi's transformation videos to see her artistry in action.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${videos[activeVideo].thumbnail})` }}
            >
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6">
          {videos.map((video, index) => (
            <motion.button
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveVideo(index)}
              className={`flex flex-col items-center ${activeVideo === index ? 'text-amber-800' : 'text-gray-600'}`}
            >
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden mb-2 ${activeVideo === index ? 'ring-2 ring-amber-700' : ''}`}>
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                />
              </div>
              <span className="text-sm font-medium">{video.title}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;