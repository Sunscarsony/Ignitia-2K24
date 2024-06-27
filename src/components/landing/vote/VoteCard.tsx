"use client"
import React, {useState} from 'react';
import VotePopup from "@/components/landing/vote/VotePopup";
import {Button} from "@nextui-org/react";

interface PropTypes{
    title : string,
    description : string,
    img : string,
    celebs : {name:string,img:string}[]
}

const VoteCard = (prop:PropTypes) => {
    const [isOpen , setIsOpen] = useState<boolean>(false);

    const HandleClosePopup = () =>{
        setIsOpen(false);
    }

    const HandleOpenPopup = () =>{
        setIsOpen(true);
    }

    return (
        <li className="scrollbar-item" data-aos="zoom-in" data-aos-duration="500" style={{ width: 416 }}>
            <div className="class-card relative flex flex-col">

                <figure className="card-banner img-holder" style={{ width: 416, height: 240 }}>
                    <img src={prop.img} width="416" height="240" loading="lazy"
                         alt=" " className="img-cover" />
                </figure>

                <div className="card-content justify-between flex flex-col flex-1">

                    <div>
                        <div className="title-wrapper">
                            <img src="/images/favicon.webp" style={{ width: '52px', height: '52px' }} width="52" height="52"
                                 aria-hidden="true" alt="" className="title-icon" />

                            <h3 className="h3">
                                <a href="proshows" className="card-title">{prop.title}</a>
                            </h3>
                        </div>

                        <p className="card-text">
                            {prop.description}
                        </p>
                    </div>
                    <div className="btn-group">
                        <Button className="btn" style={{marginTop: '20px',color: 'black',fontWeight: 'bold',backgroundImage: 'linear-gradient(#a2682a 0%, #be8c3c 8%, #be8c3c 18%, #d3b15f 27%, #faf0a0 35%, #ffff5c 40%, #faf0a0 50%, #d3b15f 58%, #be8c3c 67%, #b17b32 77%, #bb8332 83%, #d4a245 88%, #e1b453 93%, #a4692a 100%)',}} variant={"solid"} onClick={HandleOpenPopup}>Vote</Button>
                    </div>
                </div>

            </div>
        </li>
    );
};

export default VoteCard;
