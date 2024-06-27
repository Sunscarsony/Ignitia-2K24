import React from 'react';
import './About.css';
import Image from 'next/image';
import Preloader from '@/components/landing/preloader/preloader'; 

const About = () => {
  return (
    <section className="section about" id="about" aria-label="about" style={{ backgroundImage: 'url(./images/dark-purple-bg.jpg)', backgroundSize: 'cover' }}>
      {/* Section 1: PSIT */}
      <div id="psit" >
        <div className="container_bg">
          <div data-aos="zoom-in" className="about-banner has-after">
            <Image
              src="/images/psit-building.jpg"
              width={660}
              height={648}
              loading="lazy"
              alt="about banner"
              className="w-100"
            />
          </div>
          <div data-aos="zoom-in" className="about-content1" style={{ backgroundColor: '#0000005c' }}>
            <h1 className="about-psit" id='igni'>About PSIT</h1>
            <br />
            <p className="section-text">
              Since its inception in 2004, Pranveer Singh Institute of Technology (PSIT), Kanpur has emerged
              as a leader in education, celebrating numerous accomplishments. At PSIT, we prioritize building
              a strong foundation for our students.
            </p>
            <p className="section-text">
              Our institute fosters an environment conducive to intellectual growth, free thought, and personal
              development. Our academic approach challenges students with dynamic learning experiences, equipping
              them with essential skills, insights, attitudes, and practical know-how to excel in their careers and life.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Ignitia */}
      <div className="about-section" id="ignitia">
        <div className="container_bg">
          <div data-aos="zoom-in" className="about-content1" style={{ backgroundColor: '#0000005c' }}>
            <h1 className='about-ignitia1' id='igni'>About Ignitia</h1>
            <p className="section-text" style={{ color: 'white' }}>
              PSIT extends beyond academics, offering abundant opportunities for students to demonstrate their
              talents and leadership skills. Among these is our most anticipated event: College Fest Ignitia 2024.
            </p>
            <p className="section-text" style={{ color: 'white' }}>
              We're excited to present a two-day cultural spectacle where you'll find yourself immersed in the unfolding
              hues of our cultural celebration.
            </p>
          </div>
          <div data-aos="zoom-in" className="about-banner has-after">
            <Image
              src="/images/favicon.webp"
              width={200}
              height={648}
              loading="lazy"
              alt="about banner"
              className="w-100"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Adhvanik */}
      <div className="about-section" id="adhvanik">
        <div className="container_bg">
          <div data-aos="zoom-in" className="about-banner has-after">
            <Image
              src="/images/adhavanik_bg.webp"
              width={660}
              height={648}
              loading="lazy"
              alt="about banner"
              className="w-100"
            />
          </div>
          <div data-aos="zoom-in" className="about-content1" >
          <Image src="/images/adhvaniknew.webp" alt="Adhvanik Logo" width={700} height={648}/>
            <br />
            <p className="section-text">
              True to the spirit of 'Adhvanik,' our esteemed institution hasn't just set a standard in education over the
              past two decades but has also sparked a legacy that continues to guide future generations.
            </p>
            <p className="section-text">
              Adhvanik represents the convergence of technology and culture, a harmonious blend of innovation and creativity.
              Step into the future with Adhvanik – where legacies unfold and new eras are born.
            </p>
          </div>
        </div>
        <Preloader logo='/auth/1.png' />
      </div>
    </section>
  );
}

export default About;
