import React, { ReactNode } from 'react';

interface SliderProps {
  children: ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

export default Slider;
