import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import styles from '@/css/landing/sponsor/sponsor.module.scss';
import sponsorImages from '@/Data/pastsponsor.json'; 

export default function AssociationsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <section className={styles.sponsorshipOpportunities}>
      <h2 className={styles.goldenSubtitle}>Some of our Associations in Past</h2>
      <Slider {...settings}>
        {sponsorImages.map((image, index) => (
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
