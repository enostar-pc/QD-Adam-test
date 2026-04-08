import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Column 1: Brand & Socials */}
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.logoContainer}>
              <img src="/assets/logo.png?v=2" alt="ADAMS ACADEMY Logo" className={styles.footerLogo} />
            </div>
            <p className={styles.brandDesc}>
              Dedicated to molding the future through quality learning. Empowering students in Karungal since inception.
            </p>
            <div className={styles.directorInfo}>
              <span className={styles.directorName}>Mrs. Joselin Prabha Arun Bose M.Sc B.Ed</span>
              <span className={styles.directorTitle}>Director</span>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.navLink}>Home Page</a></li>
              <li><a href="#about" className={styles.navLink}>About Us</a></li>
              <li><a href="#contact" className={styles.navLink}>Contact Us</a></li>
              <li><a href="#reviews" className={styles.navLink}>Reviews</a></li>
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div 
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.columnTitle}>Contact Us</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin size={20} className={styles.icon} />
                <a 
                  href="https://www.google.com/maps/place/ADAMS+ACADEMY/@8.2384666,77.241707,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04ff0093b0ce09:0x81a3cc8f8117a7fb!8m2!3d8.2384666!4d77.241707!16s%2Fg%2F11y3ywthky" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.contactLink}
                >
                  Bus Stand Road, Karungal, Tamil Nadu 629157
                  <ExternalLink size={14} className={styles.inlineIcon} />
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <Phone size={20} className={styles.icon} />
                <div className={styles.contactDetails}>
                  <span>83001 35952</span>
                  <span>63837 15668</span>
                  <span>04651 - 26675</span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Clock size={20} className={styles.icon} />
                <div className={styles.contactDetails}>
                  <span>Mon-Sat: 10:00 AM – 10:00 PM</span>
                  <span>Sun: 2:00 PM – 8:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className={styles.bottomBar}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className={styles.copyright}>
            © 2026 QD CODEX . All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
