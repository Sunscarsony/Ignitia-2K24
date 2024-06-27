import React from 'react';
import Slider from 'react-slick';

interface VideoData {
  url: string;
  title: string;
}

interface VideoSectionProps {
  videoData: VideoData[];
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoData }) => {
  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjusted to show two slides at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="videosection">
      <style jsx>{`
        .videosection {
          margin-top: 20px;
          width: 100%;
          height: 100%;
          justify-content: center;
          padding: 40px;
          }

        .slick-slider {
          width: 100%;
          margin: 0 -10px; /* Adjust according to your layout */
        }

        .slick-list {
          margin: 0;
          padding: 0;
        }

        .slick-track {
          display: flex;
        }

        .slick-slide {
          padding: 0 10px;
          box-sizing: border-box;
        }

        .videocard {
          width: 100%;
          height: auto;
          padding: 15px;
          margin: 10px 10px;
          background-image:url('./images/dark-black-bg.jpg');
          background-size: cover;
          border-radius: 10px;
          transition: transform 0.3s ease-in-out;
          text-align: center;
          gap: 20px;
          border: 1px solid #D1913C;
        }

        .videocard:hover {
          transform: translateY(-5px);
        }

        .videocard iframe {
          width: 100%;
          height: 180px;
          border: 0;
          border-radius: 8px;
          margin-bottom: 10px;
          transition: transform 0.3s ease-in-out;
        }

        .video-card:hover iframe {
          transform: scale(1.05);
          border: 3px solid #ff9d00;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .video-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 10px;
        }
      `}</style>

      <Slider {...sliderSettings}>
        {videoData.map((video, index) => (
          <div key={index} className="videocard">
            <iframe
              title={`Video ${index + 1}`}
              src={video.url}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="video-title">{video.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSection;
