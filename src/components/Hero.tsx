import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const slides = [
    '/assets/slides/1.jpg',
    '/assets/slides/2.jpg',
    '/assets/slides/3.jpg',
    '/assets/slides/4.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.slidesContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={styles.slide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          />
        </AnimatePresence>
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ADAMS ACADEMY - Excellence in Education
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Dedicated to molding the future through quality learning
        </motion.p>
        
        <motion.h2 
          className={styles.tagline}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Empowering students in Karungal since inception.
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
