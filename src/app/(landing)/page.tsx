'use client';
import React, { useState } from 'react';
import About from '@/components/landing/about/page';
import Hero from '@/components/landing/home/Hero';
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import Mainloader from '@/components/landing/preloader/mainloader';
import Teaser from '@/components/landing/vote/Teaser';



const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#df95fc",
    lag: 0,
};

const Home: React.FC = () => {
    const [isContributeOpen, setIsContributeOpen] = useState<boolean>(true);

    const HandleClosePopup = () => {
        setIsContributeOpen(false);
    }
    const [isLandingPageVisible, setIsLandingPageVisible] = useState<boolean>(true);
    const handleSliderEffect = () => {
        setIsLandingPageVisible(false);
    }

    return (
        <div>
      
      <Mainloader backgroundImage="/images/l.jpg" mobileBackgroundImage="/images/p.jpg" />

                    <Teaser isModelOpen={isContributeOpen} CloseModel={HandleClosePopup} /> 
                    <Hero />
                    <About />
              
                    
             
    
            <div style={{ zIndex: 1000 }}>
                <MouseTrail {...trailProps} />
            </div>
        </div>
    );
};

export default Home;
