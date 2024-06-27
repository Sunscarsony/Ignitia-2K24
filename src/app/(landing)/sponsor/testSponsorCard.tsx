// SponsorCard.tsx

import React from 'react';
import Image from 'next/image';

interface SponsorCardProps {
  section: string;
  category: string;
  title: string;
  img: string;
}

const TestSponsorCard: React.FC<SponsorCardProps> = (props) => {
  return (
    <div className={`w-[90%]`}>
      <div className={`flex flex-col justify-center items-center gap-8  pb-8 rounded-lg overflow-hidden`}
            style={{ backgroundColor: 'white' }}>
            <div className='w-[250px] flex justify-center rounded-full items-center  h-[250px]'>

                <Image
                    src={props.img}
                    className={` aspect-video object-cover h-[170px] w-[170px] rounded-full `}
                    alt={"#"}
                    width={300}
                    height={400}
                />
            </div>

            <span
            className={` flex-col flex gap-[.6rem] font-sans  text-white`}
            style={{
                color: 'black',
                textShadow: '0 0 40px #d4a424',
            }}
            >
                <p className='text-3xl font-bold'>
                {props.title}
                </p>
                <p className='text-2xl text-[grey]'>
                {props.category}
                </p>
            </span>
      </div>
    </div>
  );
};

export default TestSponsorCard;
