import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    "Home Page",
    "About us",
    "Contact us",
    "Reviews"
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <motion.div 
          className={styles.logoContainer}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/">
            <img src="/assets/logo.png?v=2" alt="ADAMS ACADEMY Logo" className={styles.logo} />
          </a>
        </motion.div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
              >
                <a 
                  href={
                    link === "Reviews" ? "#reviews" : 
                    link === "About us" ? "#about" : 
                    link === "Contact us" ? "#contact" :
                    "#"
                  } 
                  className={styles.navItem}
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
          
          {/* Mobile Menu Icon */}
          <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              className={styles.drawerOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            <motion.div 
              className={styles.drawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <ul className={styles.drawerList}>
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a 
                      href={
                        link === "Reviews" ? "#reviews" : 
                        link === "About us" ? "#about" : 
                        link === "Contact us" ? "#contact" :
                        "#"
                      } 
                      className={styles.drawerItem} 
                      onClick={toggleMenu}
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
