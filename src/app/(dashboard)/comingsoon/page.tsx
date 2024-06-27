'use client';
import React, { useState, useEffect } from 'react';

const ComingSoon: React.FC = () => {
  const targetDate = new Date('2024-04-05T00:00:00');
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());
  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url("./comingsoon/1.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <h1 style={{ fontSize: '4rem', marginBottom: '2rem', textAlign: 'center', textShadow: '0 0 20px black', color: '#d4a424' , fontFamily: "iosFont"}}>Coming Soon</h1>
      <p style={ { fontSize:'25px' , fontFamily: "iosFont" , textAlign:'center' , color:'#f5e6a5' , textShadow: '0 0 30px black'}}>Our website is under construction. Stay tuned!</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', width: 'auto', paddingTop:'20px'}}>
        {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
          <div key={index} style={{ ...timerBoxStyle, animationDelay: `${index * 0.1}s`, margin: '10px' }}>
            <p>{remainingTime[unit as keyof typeof remainingTime]}</p>
            <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#fff' }}>{unit}</p>
          </div>
        ))}
      </div>
      <button
        style={{
          padding: '10px 20px',
          marginTop: '20px',
          fontSize: '16px',
          backgroundColor: '#d4a424',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px',
          transition: 'background-color 0.3s ease',
          textTransform : 'uppercase',
          fontWeight : '550',
        }}
        onClick={() => window.location.replace('/')}

      >
        Back to Home
      </button>
    </div>
  );
};

const timerBoxStyle: React.CSSProperties = {
  background: 'radial-gradient(circle at 52.1% -29.6%, rgb(144, 17, 105) 0%, rgb(51, 0, 131) 100.2%)',
  fontSize: '2rem',
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  borderRadius: '10px',
  textAlign: 'center',
  color: '#fefe06',
  fontStyle: 'bold',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  transform: 'scale(1)',
  transition: 'transform 0.3s ease',
  animation: 'bounce 0.5s ease infinite',
  cursor: 'pointer',
};

export default ComingSoon;
