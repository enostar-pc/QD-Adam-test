import React from 'react';
import { motion } from 'framer-motion';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <section id="about" className={`section-padding ${styles.welcomeSection}`}>
      <div className={`container ${styles.welcomeContainer}`}>
        
        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcome to ADAMS ACADEMY!
        </motion.h2>

        <motion.p 
          className={styles.text}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Discover excellence in education at <span className={styles.highlight}>ADAMS ACADEMY</span>. We provide professional tutoring and academic support tailored to help every student succeed. Our center in Karungal is equipped to provide the best learning experience for local and visiting students alike.
        </motion.p>
        
        <motion.p 
          className={styles.text}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Visit us at <span className={styles.highlight}>Adams Academy, Karungal</span> or reach out via phone <strong>83001 35952</strong>, <strong>63837 15668</strong>, or <strong>04651 – 26675</strong>.
        </motion.p>

        <motion.div 
          className={styles.videoContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <video 
            src="/assets/videos/adams_video.mp4" 
            className={styles.video}
            autoPlay 
            muted 
            loop 
            controls
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>

      </div>
    </section>
  );
};

export default Welcome;
