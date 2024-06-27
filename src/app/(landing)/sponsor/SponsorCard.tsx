// SponsorCard.tsx

import React from 'react';
import Image from 'next/image';

interface SponsorCardProps {
  section: string;
  category: string;
  title: string;
  img: string;
}

const SponsorCard: React.FC<SponsorCardProps> = (props) => {
  return (
    <div className={`flex flex-col justify-center items-center p-2`}>
      <div
        className={`flex flex-col justify-center items-center gap-8  pb-8 rounded-2xl overflow-hidden`}
        style={{ backgroundColor: 'white' }}>
        <div className='w-[250px] rounded-full h-[150px]'>

          <Image
            src={props.img}
            className={`max-w-[300px] aspect-video object-cover w-full`}
            alt={"#"}
            width={300}
            height={400}
          />
        </div>

        <span
          className={` flex-col flex gap-[1rem] text-2xl text-white`}
          style={{
            color: 'black',
            textShadow: '0 0 40px #d4a424',
          }}
        >
            <p>
              {props.title}
            </p>
            <p>
              {props.category}
            </p>
        </span>
      </div>
    </div>
  );
};

export default SponsorCard;
