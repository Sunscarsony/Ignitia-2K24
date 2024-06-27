import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";

interface TeaserProps {
    isModelOpen: boolean,
    CloseModel: () => void,
}

const Teaser: React.FC<TeaserProps> = ({ isModelOpen, CloseModel }) => {
    const [isAudioMuted, setIsAudioMuted] = useState<boolean>(true);

    const unMute = (e: MouseEvent) => {
        if (isAudioMuted) {
            e.preventDefault();
            setIsAudioMuted(false);
            document.removeEventListener("click", unMute, { capture: true });
        }
    }

    useEffect(() => {
        document.addEventListener("click", unMute, { capture: true })
    }, [])


    const handleClose = () => {
        if (!isAudioMuted) {
            CloseModel();
        }
    };

    return (
        <Modal
            size={'xl'}
            isOpen={isModelOpen}
            onClose={handleClose}
            className={`mt-3`}
            style={{
                backgroundColor: '#170221',
                color: '#fff',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid #d98aff',
                transition: 'background 0.3s, color 0.3s',
            }}
        >
            <ModalContent>
                {() => (
                    <>
<style jsx>{`


 
.card{
    box-shadow: 0 0 16px  #ab1df0;
    justify-content: center;
    flex-direction: column;
}



    video {
        width: 100%;
        height: auto;
        border-radius: 8px;
        outline: none;
    }

    #verse-ignitia{
        font-family: iosFont;
        text-align: center;
        background-image: repeating-linear-gradient(to right, #a2682a 0%, #be8c3c 8%, #be8c3c 18%, #d3b15f 27%, #faf0a0 35%, #ffffc2 40%, #faf0a0 50%, #d3b15f 58%, #be8c3c 67%, #b17b32 77%, #bb8332 83%, #d4a245 88%, #e1b453 93%, #a4692a 100%);
        background-size: 150%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 0 1px rgba(255, 200, 0, .3));
        animation: MoveBackgroundPosition 6s ease-in-out infinite;
      }

    
`}</style>


<ModalHeader className={`flex flex-col gap-1 text-center font-bold text-[#ffcc00]`} id={`verse-ignitia`}>Ignitia 2k24 Teaser</ModalHeader>

                        <ModalBody>
                            <div className="card">
                                <video loop={true} autoPlay={true} muted={isAudioMuted} controls={false}>
                                    <source src="https://d28yx2zopyx2ad.cloudfront.net/assets/Ignitia 2k24 Teaser (720p).mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default Teaser;
