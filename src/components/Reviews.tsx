import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Quote, ExternalLink } from 'lucide-react';
import styles from './Reviews.module.css';

const Reviews = () => {
  const highlights = [
    { label: "Highly specialised", count: 9 },
    { label: "Personal attention", count: 7 },
    { label: "Quality courses", count: 6 },
    { label: "Expert faculty", count: 5 },
    { label: "Multiple facilities", count: 4 }
  ];

  const testimonials = [
    {
      name: "Akhi",
      date: "16 May 2025",
      text: "Quality courses! The instructors are very professional and provide excellent guidance. Highly recommended for anyone looking to upskill in Karungal.",
      rating: 5,
      featured: true
    },
    {
      name: "Suresh Kumar",
      date: "12 April 2025",
      text: "ADAMS ACADEMY provided me with the personal attention I needed to clear my professional exams. The faculty is truly expert in their fields.",
      rating: 5
    },
    {
      name: "Priya D.",
      date: "05 March 2025",
      text: "Excellent facilities and a great learning environment. The specialized training here is top-notch and sets a high bar for education in the region.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className={`section-padding ${styles.reviewsSection}`}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent">Testimonials</span>
          <h2 className={styles.title}>What Our Students Say</h2>
          <div className={styles.divider}></div>
        </motion.div>

        {/* Highlights Section */}
        <div className={styles.highlightsContainer}>
          <h3 className={styles.highlightsTitle}>Review Highlights</h3>
          <div className={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.highlightPill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className={styles.highlightLabel}>{item.label}</span>
                <span className={styles.highlightCount}>({item.count})</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.testimonialsGrid}>
          {testimonials.map((review, index) => (
            <motion.div 
              key={index}
              className={`glass-panel ${styles.reviewCard} ${review.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.quoteIcon}>
                <Quote size={24} />
              </div>
              <div className={styles.rating}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-red)" color="var(--accent-red)" />
                ))}
              </div>
              <p className={styles.reviewText}>{review.text}</p>
              <div className={styles.reviewFooter}>
                <div className={styles.userInfo}>
                  <div className={styles.userAvatar}>{review.name.charAt(0)}</div>
                  <div className={styles.userDetails}>
                    <span className={styles.userName}>{review.name}</span>
                    <span className={styles.reviewDate}>{review.date}</span>
                  </div>
                </div>
                <MessageSquare className={styles.msgIcon} size={20} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
