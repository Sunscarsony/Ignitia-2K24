import React from 'react';
import styles from '@/css/landing/sponsor/sponsor.module.scss';

export default function USPSection() {
  const uspTexts = [
    'Ignitia 2024 promises exposure to a diverse and extensive audience, going beyond the confines of traditional college fests.',
    'Unlike typical college fests, Ignitia 2024 is not just about entertainment; we are set to redefine the benchmarks of cultural celebrations. Our innovative plans are poised to elevate the festival experience to new heights.',
    'This year, we are raising the bar by inviting a top-notch celebrity to grace Ignitia 2024.'
  ];
  const uspTexts2 = [
    'Unmatched Reach',
    'Innovative Approach',
    'Top-Notch Celebrity Presence'
  ];

  return (
    <section className={styles.uspSection}>
      {uspTexts2.map((uspHeading, index) => (
        <div key={index} className={styles.card}>
          <div className={`${styles.cardFront} ${styles.cardContent}`}>
            <div className={styles.heading}>{uspHeading}</div>
            <div className={styles.text}>{uspTexts[index]}</div>
          </div>
          <div className={`${styles.cardBack} ${styles.cardContent}`}>
            <div className={styles.heading}>{uspHeading}</div>
            <div className={styles.text}>{uspTexts[index]}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
