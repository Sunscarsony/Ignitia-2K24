import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="section footer-top bg-dark has-bg-image">
        <div className="container_bg">
          <div className="footer-brand">
            <Link href="#" className="logo">
              <Image src="/images/favicon.webp" alt="#" className="logo-img" width={50} height={50} />
              <span className="span" style={{ fontFamily: 'ignitiaFont' }}>Ignitia'</span>
              <span className="span" style={{ fontFamily: 'digitalFont' }}>24</span>
            </Link>
            <p className="footer-brand-text">
              Igniting Legacies Inspiring Generations.
            </p>
            { /* <p className="footer-brand-text">
                Download Our App Now
              </p>
            <div className="wrapper">
              <Image
                src="/images/play-store-logo-33874.webp"
                width="250" height="250"
                loading="lazy" alt="Clock"
              />
  </div> */}
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title has-before">
                Our Links
              </p>
            </li>
            <table className="footer-table">
  <tbody>
    <tr >
      <td id='link-space'>
        <a href="/" className="footer-link">Home</a>
      </td>
      <td id='link-space'>
        <a href="/about" className="footer-link">About</a>
      </td>
    </tr>
    <tr>
      <td id='link-space'>
        <a href="/sponsor" className="footer-link">Sponsors</a>
      </td>
      <td id='link-space'>
        <a href="/gallery" className="footer-link">Gallery</a>
      </td>
    </tr>
    <tr>
      <td id='link-space'>
        <a href="/team" className="footer-link">Team</a>
      </td>
      <td id='link-space'>
        <a href="/events" className="footer-link">Events</a>
      </td>
    </tr>
    <tr>
      <td id='link-space'>
      </td>
    </tr>
  </tbody>
</table>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title has-before">
                Contact Us
              </p>
            </li>
            <li className="footer-list-item">
              <div className="icon">
                {/*<ion-icon name="location" aria-hidden="true"></ion-icon>*/}
              </div>
              <address className="address footer-link">
                Kanpur-Agra-Delhi National Highway (NH-19),
                Bhauti Kanpur, 209305
                Uttar Pradesh
              </address>
            </li>
            <li className="footer-list-item">
              <div className="icon">
                {/*<ion-icon name="call" aria-hidden="true"></ion-icon>*/}
              </div>
              <div>
                <Link href="mailto:" className="footer-link">contactus@ignitia.in</Link>
              </div>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title has-before">
                Stay Connected
              </p>
            </li>
            <li>
              <ul className="social-list" style={{ width: '20px', height: '20px' }}>
                <li>
                  <Link href="https://twitter.com/PSITKanpur2004" target="_blank" className="social-link" style={{ backgroundImage: 'url(/images/twitter.png)', backgroundSize: 'cover', }}>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/ignitia.psitkanpur" target="_blank" className="social-link" style={{ backgroundImage: 'url(/images/instagram.png)', backgroundSize: 'cover', backgroundColor: 'white', alignItems: 'center' }}>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/psit.ac.in" target="_blank" className="social-link" style={{ backgroundImage: 'url(/images/facebook.png)', backgroundSize: 'cover', backgroundColor: 'white' }}>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@psitkanpur" target="_blank" className="social-link" style={{ backgroundImage: 'url(/images/youtube.png)', backgroundSize: 'cover', backgroundColor: 'white' }}>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/school/psitkanpur/" target="_blank" className="social-link" style={{ backgroundImage: 'url(/images/linkedin.png)', backgroundSize: 'cover', backgroundColor: 'white' }}>
                    {/*<ion-icon name="logo-instagram"></ion-icon>*/}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container_bg">
          <p className="copyright" style={{ fontSize: '15px' }}>
            &copy; 2024 Copyright Ignitia. All Rights Reserved
          </p>
          <ul className="footer-bottom-list">
            <li>
              <Link href="/team" className="footer-bottom-link has-before" style={{ fontSize: '15px' }}>Made by Team Ignitia</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
