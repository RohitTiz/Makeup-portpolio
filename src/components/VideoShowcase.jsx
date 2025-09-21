// components/VideoShowcase.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const VideoShowcase = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Try to autoplay when component mounts
  useEffect(() => {
    if (videoRef.current) {
      const tryAutoplay = async () => {
        try {
          videoRef.current.muted = true;
          await videoRef.current.play();
          setIsPlaying(true);
          console.log('Video autoplay successful');
        } catch (error) {
          console.log('Autoplay prevented:', error);
          // Show play button if autoplay is prevented
          setIsPlaying(false);
        }
      };
      
      tryAutoplay();
    }
  }, []);

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    if (videoRef.current) {
      videoRef.current.muted = newMutedState;
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(error => console.log('Play failed:', error));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="videos" className="py-12 md:py-20 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-amber-800 mb-4">Video Showcase</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch Arohi's transformation videos to see her artistry in action.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto mb-8 md:mb-12">
          {/* Changed container to vertical aspect ratio */}
          <div className="relative aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden shadow-2xl ring-2 ring-amber-500/20">
            {/* Video player for the vedio.mp4 - constrained to vertical format */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              muted={isMuted}
              loop
              preload="auto"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              style={{ objectPosition: 'center center' }}
            >
              <source src="/vedio/vedio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Gradient overlay for reel aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
            
            {/* Play/Pause button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={togglePlay}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110"
              >
                {isPlaying ? (
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Mute/Unmute button */}
            <button 
              onClick={toggleMute}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-colors"
            >
              {isMuted ? (
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z"/>
                </svg>
              )}
            </button>

            {/* Reel-like progress bar at the top */}
            <div className="absolute top-3 left-4 right-4 h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-white/80 rounded-full w-1/3"></div>
            </div>

            {/* Reel info text */}
            <div className="absolute top-12 left-4 text-white">
              <p className="text-sm font-medium">@arohi_makeovers</p>
              <p className="text-xs opacity-80">Bridal Transformation</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-amber-800"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden mb-2 ring-2 ring-amber-700">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(/vedio-thumbnail.jpg)` }}
              />
            </div>
            <span className="text-xs md:text-sm font-medium text-center">Bridal Transformation</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;