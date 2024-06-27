import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'; 
import styles from '@/css/landing/sponsor/sponsor.module.scss';
import celebrityImages from '@/Data/celeb.json';

export default function AssociationsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };

  return (
    <section className={styles.sponsorshipOpportunities}>
      <h2 className={styles.goldenSubtitle}>Celebrities @PSIT Campus</h2>
      <Slider {...settings}>
        {celebrityImages.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              className={image.className}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
