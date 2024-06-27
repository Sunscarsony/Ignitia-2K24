'use client';
import React from 'react';
import Slider from 'react-slick';
import styles from '@/css/landing/sponsor/sponsor.module.scss';
import HeaderSection from '@/components/landing/sponsor/HeaderSection';
import SubHeaderSection from '@/components/landing/sponsor/SubHeaderSection';
import USPSection from '@/components/landing/sponsor/USPSection';
import SponsorshipOpportunities from '@/components/landing/sponsor/SponsorshipOpportunities';
import BecomeSponsor from '@/components/landing/sponsor/BecomeSponsor';
import SponsorSlider from '@/components/landing/sponsor/AssociationsSlider';
import CelebSlider from '@/components/landing/sponsor/CelebritySlider';
import Preloader from '@/components/landing/preloader/preloader'; 
import SponsorshipTable from '@/components/landing/sponsor/table';


export default function Sponsor() {


  return (
    <div className={styles.sponsorPage} style={{ backgroundImage: 'url(./images/dark-black-bg.jpg)', backgroundSize: 'cover' }}>
     
      <HeaderSection />
      <BecomeSponsor /> 
      <SponsorshipTable />
          <SubHeaderSection />
          <USPSection />
          
        <SponsorshipOpportunities />
      <CelebSlider />
      <SponsorSlider />
      
      

     
      <Preloader logo='/auth/1.png' />
     
    </div>
  );
}