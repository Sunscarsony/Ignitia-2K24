"use client"
import React, {useEffect, useState} from 'react';
import VotePopup from "@/components/landing/vote/VotePopup";
import {Button} from "@nextui-org/react";
import Image from 'next/image';
import authSelectors from "../../../../Store/auth/Selector";
import {toast} from "react-toastify";
import {toastDefaultTheme} from "../../../../Defaults/Toast";
import {useDispatch} from "react-redux";
import authActions from "../../../../Store/auth/actions";
import {UserVote} from "../../../../Helper/API/Auth";
interface PropTypes{
    title : string,
    description : string,
    img : string,
    celebs : {name:string,img:string}[],
    cardIndex : number;
}

const VoteCard2 = (prop:PropTypes) => {
    const [isOpen , setIsOpen] = useState<boolean>(false);
    const [isVoted , setVoteStatus] = useState<boolean>()
    const voteStatus = authSelectors.VoteStatus();
    const dispatch = useDispatch();
    const HandleClosePopup = () =>{
        setIsOpen(false);
    }

    // dispatch(authActions.updateUserVote(false) as any)

    const HandleOpenPopup = async () =>{
        if(voteStatus == true){
            toast.info("Already voted",toastDefaultTheme);
            return
        }
        setIsOpen(true);
    }

    useEffect(()=>{
        if(typeof voteStatus === "boolean")
            setVoteStatus(voteStatus)
    },[voteStatus])

    return (
        <div className={`flex flex-col justify-center items-center p-2`}>
            <VotePopup isModelOpen={isOpen} CloseModel={HandleClosePopup} celebs={prop.celebs} cardIndex={prop.cardIndex} />

            <div className={`flex flex-col justify-center items-center gap-8 bg-gradient-radial gradientBg pb-8 rounded-2xl overflow-hidden`}>
                <Image src={prop.img} className={`max-w-[300px] aspect-video object-cover w-full`} alt={"#"} width={300} height={300}/>

                <span className={`text-4xl text-white`} style={{fontFamily:'iosFont', color:'black',textShadow:'0 0 40px #d4a424'}}>
                    {prop.title}
                </span>

                <Button className="btn" style={{color: 'black',fontWeight: 'bold',backgroundImage: 'linear-gradient(#a2682a 0%, #be8c3c 8%, #be8c3c 18%, #d3b15f 27%, #faf0a0 35%, #ffff5c 40%, #faf0a0 50%, #d3b15f 58%, #be8c3c 67%, #b17b32 77%, #bb8332 83%, #d4a245 88%, #e1b453 93%, #a4692a 100%)',}}
                        variant={"solid"}
                        onClick={HandleOpenPopup} >
                    Vote
                </Button>
            </div>
        </div>
    );
};

export default VoteCard2;
