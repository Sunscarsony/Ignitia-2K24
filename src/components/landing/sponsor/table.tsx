import React from 'react';
import sponsorData from '@/Data/table.json'; // Adjust the import path as necessary
import styles from 'yet-another-react-lightbox/styles.css';

const SponsorCard = () => {
  return (
    <div className="card-container">
      {sponsorData.map((sponsor, index) => (
        <div className="card" key={index} style={{boxShadow:"0 0 20px #d3b15f"}}>
          <h2 className='card-title' style={{borderRadius:'10px' , boxShadow:"0 0 20px #d3b15f" , textTransform:'uppercase'}}>{sponsor.tier}</h2>
          <p style={{fontSize:'30px', fontFamily:'rubik, sans-serif', fontWeight:'550', color:'#d3b15f'}}>{sponsor.price}</p>
          <ul>
            {sponsor.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}

      <style jsx>{`

      
        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          gap: 10px;
          margin: 20px;
        }
        .card {
          margin: 20px;
          font-family: rubik, sans-serif;
          font-weight: 550;
          background: linear-gradient(109.6deg, rgb(43, 1, 91) 13.4%, rgb(122, 2, 54) 100.2%);
          color: #fff;
          padding: 20px;
          border-radius: 10px;
          width: 300px;
          height: 560px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .card:hover {
          transform: translateY(-10px);
        }
        h2 {
          margin-top:0;
          font-weight: 550;
        }
        p {
          color: #d3b15f;
        }
        ul {
          list-style: none;
          padding: 0;
          margin-top: 15px;
        }
        li {
          color: #d3d3d3;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default SponsorCard;
