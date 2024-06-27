'use client'
import React, { useState } from 'react';
import Graph from "@/components/landing/vote/leaderboard";
import { Button } from '@nextui-org/react';
import Data from "@/Data/Vote.json";
import Slider from "react-slick";
import VoteCard2 from "@/components/landing/vote/VoteCard2";


const VotePage: React.FC = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const [isContributeOpen, setIsContributeOpen] = useState<boolean>(false);

  const handleOpenPopup = () => {
    setIsContributeOpen(true);
  }

  const handleClosePopup = () => {
    setIsContributeOpen(false);
  }

  return (
      <section className="section class bg-dark has-bg-image" id="vote" aria-label="class">
        <div className="container_bg">
          <p className="section-subtitle">Vote Now</p>
          <h2 className="h2 section-title text-center">CHOOSE YOUR STAR</h2>
          <div className={`flex justify-center items-center w-full`}>
            <div className={`max-w-[90%] w-full`}>
              <Slider {...settings}>
                {Data.map((single, index) => (
                    <VoteCard2
                        title={single.title}
                        celebs={single.celebs}
                        img={single.image}
                        description={single.description}
                        key={`vote_card_${index}`}
                        cardIndex={index + 1}
                    />
                ))}
              </Slider>
            </div>
          </div>


          <div className="btn-group">
            <Button style={{
              marginTop: '20px',
              color: 'black',
              fontWeight: 'bold',
              backgroundImage: 'linear-gradient(#a2682a 0%, #be8c3c 8%, #be8c3c 18%, #d3b15f 27%, #faf0a0 35%, #ffffc2 40%, #faf0a0 50%, #d3b15f 58%, #be8c3c 67%, #b17b32 77%, #bb8332 83%, #d4a245 88%, #e1b453 93%, #a4692a 100%)',
            }} variant={'solid'} onClick={handleOpenPopup}>
              LEADER BOARD
            </Button>

          </div>
        </div>
        {/* Use the correct component name: Graph */}
        <Graph isModelOpen={isContributeOpen} CloseModel={handleClosePopup}/>


      </section>
  );
}

export default VotePage;
