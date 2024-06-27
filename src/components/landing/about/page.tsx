import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container_bg">
        <div data-aos="zoom-in" className="about-banner has-after">
          <Image
            src="/images/adhavanik_bg.webp"
            width={660} height={648}
            loading="lazy" alt="about banner"
            className="w-100"
          />
        </div>
        <div data-aos="zoom-in" className="about-content">
          {/* Uncomment the following lines if needed */}
          {/* <p className="section-subtitle" href="#">About Us</p> */}
          <Image src="/images/adhvaniknew.webp" alt="Adhvanik Logo" width={700} height={648}/>
          <br />
          {/* Uncomment the following lines if needed */}
          {/* <h2 className="h2 section-title" style={{ color: 'white', fontFamily: 'MyFont', animation: '' }}>Adhvanik</h2> */}
          <p className="section-text text-white font-semibold text-justify">
              Embodying the spirit of 'Adhvanik,
    ' our esteemed institution has not only set the benchmark for
    exceptional education over the past 20 years but has also ignited a legacy that continues to light
    the way for generations to come.
          </p>
          <p className="section-text text-white font-semibold text-justify">
          Adhvanik, where technology meets culturê in a symphony of innovation and creativity. Embrace
the future at Adhvanik – where the legacy unfolds.          </p>
<br></br>
          <div className="wrapper">
            <a className="btn btn-primary" href="about">Explore More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
