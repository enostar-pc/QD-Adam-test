import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, CreditCard, Star } from 'lucide-react';
import styles from './InfoCards.module.css';

const InfoCards = () => {
  const cards = [
    {
      title: "This is how it works!",
      description: "Our academy is designed to provide personalized attention and effective learning strategies. You can attend classes at our Karungal center, where our experienced tutors guide you through every academic challenge.",
      icon: Lightbulb
    },
    {
      title: "Registration and payment",
      description: "Enrolling is easy. Visit our center on Bus Stand Road or contact us directly to discuss your educational goals. We offer flexible schedules and affordable learning options for all students. Contact support@adamsacademy.in.",
      icon: CreditCard
    },
    {
      title: "Success Stories",
      description: "Read about the achievements of our students. ADAMS ACADEMY has consistently helped students excel in their exams and gain admission to top-tier higher education programs.",
      icon: Star
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={`section-padding ${styles.infoSection}`}>
      <div className="container">
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div key={index} className={`glass-panel ${styles.card}`} variants={itemVariants}>
                <div className={styles.iconWrapper}>
                  <IconComponent size={36} strokeWidth={1.5} />
                </div>
                <h3 className={styles.title}>{card.title}</h3>
                <p className={styles.description}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default InfoCards;
