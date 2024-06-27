'use client';
import React, { useState, useEffect } from 'react';
import styles from '@/css/landing/preloader/Preloader.module.scss'; 
import Image from 'next/image';
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";


interface PreloaderProps {
  logo: string; 
}

const Preloader: React.FC<PreloaderProps> = ({ logo }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const timer = setTimeout(() => setLoading(false), 1000); // 1 second

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className={styles.preloader}>
      <Image src={logo} alt="Logo" className={styles.logo}  width={300} height={300}/>
    </div>
    
  );
};

export default Preloader;
