"use client"
import React, {useState} from 'react';
import Image from 'next/image';

const Hero = () => {

  return (
    <section className="section hero bg-dark has-after has-bg-image" id="home" aria-label="hero" data-section style={{justifyContent:'center'}} >
      <div className="container_bg">
        <div className="hero-content">
          <p className="hero-subtitle">
            <strong className="strong"><span className='ignitiaFont'>Ignitia</span></strong> PSIT KANPUR
          </p>
          <h1 id="verse-ignitia" className="h1 hero-title iosFont">WELCOME TO PSIT<span style={{fontSize:'1.5rem', fontWeight:550, fontFamily:'iosFont', paddingBottom:'20px', paddingTop:'10px',}}>Gateway to the Enchanted Cosmos!</span></h1>
          <p className="section-text text-white font-semibold text-justify">
          Journey into the Magicverse! Unfurl your imagination and soar into a world of wonder. Here, enchantment is in the air, and your inner wizard awaits awakening. <br></br>
          Dive into an extraordinary realm where spells and magic come alive.
           Step into a universe brimming with creativity, where every turn presents unexpected quests to transform illusions into reality.
          <br></br>
          {/* Immerse yourself into a realm of creativity.
          Make way for the unforeseen quests to make the illusions a reality. */}
          {/* <span  style={{ marginTop: '10px' }}>Immerse yourself into a realm of creativity.</span> */}
          {/* <span style={{ marginTop: '10px' }}>Make way for the unforeseen quests to make the illusions a reality.</span> */}

          </p>
        </div>
        <div className="hero-banner">
          <Image src="/images/bg_char_hero.webp" id="hero-hbg" style={{ marginLeft: '10px' }} width={500} height={500} alt="hero banner" className="w-50" />
          <Image src="/images/hero-circle-one.webp" width={666} height={666} aria-hidden="true" alt="" className="circle circle-1" />
          <Image src="/images/hero-circle-two.webp" width={666} height={666} aria-hidden="true" alt="" className="circle circle-2" />
          {/* <img src="/home/assets/images/calories.svg" width="348" height="224" alt="calories" className="cal-img cal-img-2" /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
