// Import statements remain unchanged
'use client';
import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import VideoSection from './VideoSection';
import Preloader from '@/components/landing/preloader/preloader';
import {Gallery, Image} from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";



const images:Image[] = [
    {
        src: "./gallery/1.jpg",
        width: 320,
        height: 174,
        isSelected: true,
        caption: "Ignitia 2K24",
    },
    {
        src: "./gallery/2.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/3.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/4.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/5.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/6.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/7.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/8.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/10.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/11.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/12.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/13.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/14.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/15.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/16.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/17.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/18.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/19.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/20.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/21.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
    {
        src: "./gallery/22.jpg",
        width: 320,
        height: 212,
        tags: [
            {value: "Ignitia 2K24", title: "Ignitia 2K24"},
            {value: "Ignitia 2K23", title: "Ignitia 2K23"},
        ],
        alt: "Ignitia 2K24",
    },
];


const slides = images.map(({src, width, height}) => ({
    src,
    width:1920,
    height:1080,
}));



const ImageSlider: React.FC = () => {
    const numberOfImages = 29;
    const [index, setIndex] = useState(-1);

    const handleClick = (index: number, item: Image) => setIndex(index);

    const galleryImages = Array.from({length: numberOfImages}, (_, index) => `/gallery/${index + 1}.jpg`);

    const [currentBgImage, setCurrentBgImage] = useState<string>(galleryImages[0]);

    const handleSliderChange = (index: number) => setCurrentBgImage(galleryImages[index]);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '100px',
        responsive: [
            {breakpoint: 768, settings: {centerPadding: '50px', slidesToShow: 1}},
            {breakpoint: 480, settings: {centerPadding: '25px', slidesToShow: 1, arrows: false}},
        ],
        afterChange: handleSliderChange,
    };

    return (
        <>
            {/* Inline styles */}
            <style jsx>{`
                .gallery {
                    background-image: url('./images/dark-black-bg.jpg');
                    background-size: cover;
                    color: #fff;
                    padding: 60px 0;
                    text-align: center;
                }

                #image_slider_bg {
                    padding: 0;
                    background: url(${currentBgImage}) center/cover no-repeat;
                    height: 100vh;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                h1 {
                    font-size: 3rem;
                    font-weight: 600;
                    font-family: 'Roboto', sans-serif;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                    margin-bottom: 20px;
                }

                .carousel {
                    margin: 0 auto;
                    max-width: 800px;
                    width: 100%;
                    position: relative;
                    z-index: 1;
                    overflow: hidden;
                }

                .carousel .slick-center {
                    transform: scale(1.2);
                }

                .carousel .slick-slide {
                    transition: transform 0.5s;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
                    border-radius: 30px;
                    position: relative;
                    overflow: hidden;
                }

                .carousel .slick-slide:hover {
                    transform: scale(1.25);
                }

                .carousel .carousel-item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                }

                .carousel .card {
                    width: 100%;
                    padding-bottom: 75%; /* 4:3 aspect ratio */
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
                    transition: transform 0.5s ease-in-out;
                }

                .carousel .card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transition: transform 0.5s ease-in-out;
                }

                .carousel .card:hover {
                    transform: scale(1.1);
                }

                @media (max-width: 768px) {
                    #image_slider_bg {
                        height: 80vh;
                    }

                    h1 {
                        font-size: 2.5rem;
                    }

                    .carousel .card {
                        width: 90%;
                    }
                }

                @media (max-width: 480px) {
                    #image_slider_bg {
                        height: 70vh;
                    }

                    h1 {
                        font-size: 2rem;
                    }
                }
            `}</style>

            {/* Gallery section */}
            <section className='gallery'>
                <section className={`min-h-screen p-10 box-border w-full`}>
                    {
                        images ? (
                            <div className={`flex flex-row flex-wrap gap-10 justify-center items-center`}>
                                {images.map((single, index) => (
                                    <div key={`gallery_card_${index}`}
                                         className={`aspect-video rounded-xl overflow-hidden w-full min-w-[250px] max-w-[350px]`}
                                         style={{
                                             boxShadow:"0px 0px 10px rgba(255,255,255,.3)",
                                             flex:"1 1 300px"
                                         }}
                                        onClick={()=>{handleClick(index,single)}}
                                    >
                                        <img src={single.src} alt={`img_${index + 1}`}
                                             className={`w-full object-cover`}/>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>
                            Loading
                            </div>
                        )
                    }
                    <Lightbox
                        slides={slides}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                    />
                </section>

                {/* Video section */}
                <VideoSection
                    videoData={[
                        {url: 'https://www.youtube.com/embed/jJWd26GYqKs', title: "Ignitia 2k23"},
                        {url: 'https://www.youtube.com/embed/s0KjzpI89bw', title: "Harshit Saxena Ignitia2k23"},
                        {url: 'https://www.youtube.com/embed/fng0_2APxcQ?start=752', title: "Javed Ali's Live Performance in IK16" },
                        {url: 'https://www.youtube.com/embed/4GgSed0yyns', title: "PSIT-IGNITIA'16 Cinematic Trailer"},
                        {url: 'https://www.youtube.com/embed/V27eP1wGyLY', title: "PSIT Ignitia BangBang"},
                        {url: 'https://www.youtube.com/embed/SzMsa3kFh8E', title: "Ignitia '17 Official Aftermovie"}
                    ]}
                />
            </section>

            {/* Preloader component */}
            <Preloader logo='/auth/1.png'/>
        </>
    );
};

export default ImageSlider;
