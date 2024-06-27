// ./src/pages/404.tsx
import React from 'react';
import { GetServerSideProps } from 'next';
import styles from '@/css/404/404.module.scss';
import Image from 'next/image';


const NotFound: React.FC = () => {
  return (
    <div className={styles.notFoundContainer}>
      <Image className={styles.notFoundImage1} src="images/hero.webp" alt="Icon" />
      <h1 className={styles.heading}>Oops! Page Not Found</h1>
      <Image className={styles.notFoundImage} src="images/404.svg" alt="404 Image" />
      <button className={styles.notFoundButton}>Back to Home</button>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   return { props: {} };
// };

export default NotFound;
