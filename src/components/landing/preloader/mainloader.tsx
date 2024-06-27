import React, { useState, useEffect } from 'react';
import styles from '@/css/landing/preloader/mainloader.module.scss'; 

interface MainloaderProps {
  backgroundImage: string;
  mobileBackgroundImage: string;
}

const Mainloader: React.FC<MainloaderProps> = ({ backgroundImage, mobileBackgroundImage }) => {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className={styles.preloader}>
<div className={styles.background} style={{backgroundImage: isMobile ? `url(${mobileBackgroundImage})` : `url(${backgroundImage})`}} />
     
    </div>
  );
};

export default Mainloader;
