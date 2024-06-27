import React, {useState} from 'react';
import Image from "next/image";
import {EventProp} from "../../../../Types/Component/Event/EventCard";
import styles from "@/css/landing/events/EventCard.module.scss"
import {Button} from "@nextui-org/react";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";
import BarChart from "@/components/landing/vote/graph/BarChart";

const EventCard = ({data}: { data: EventProp }) => {
    const [isDetailPopupOpen, setIsDetailPopupOpen] = useState<boolean>(false);

    const handleOpenPopup = () => {
        setIsDetailPopupOpen(true);
    }

    const handleClosePopup = () => {
        setIsDetailPopupOpen(false);
    }


    return (
        <div className={styles.parent}>
            <Image src={data.EImage} alt={`event_${data.EventID}`} width={300} height={500}
                   className={`aspect-[3/4] object-cover ${styles.mainCard}`}/>
            <span className={styles.overlay}>
                <span className={styles.heading}>
                    {data.name}
                </span>
                <Button color={'secondary'} variant={'solid'} size={'sm'} className={styles.btn}
                        onClick={handleOpenPopup}>
                    Details
                </Button>
            </span>

            <EventPopup data={data} isModelOpen={isDetailPopupOpen} CloseModel={handleClosePopup}/>
        </div>
    );
};

export default EventCard;


const EventPopup = (prop: { data: EventProp, isModelOpen: boolean, CloseModel: () => void }) => {

    const [isDetailSelected, setIsDetailSelected] = useState<boolean>(true)

    return (
        <Modal
            size={'xl'}
            isOpen={prop.isModelOpen}
            onClose={prop.CloseModel}
            className={`mt-3`}
            classNames={{
                closeButton: "bg-gray-100 text-black hover:bg-gray-200"
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-purple-600" style={{textAlign: 'center'}}>
                            Event Details
                        </ModalHeader>
                        <ModalBody>
                            <div className={`flex flex-row gap-3 ${styles.modalParent} minimal-scrollbar`}>
                                <div className={`w-full ${styles.imagePopup}`}>
                                    <Image
                                        className={`aspect-[3/4] object-cover rounded-xl border-2 border-purple-600 border-dashed`}
                                        src={prop.data.EImage}
                                        alt={'event_detail'} width={300} height={500}/>
                                </div>
                                <div
                                    className={`flex flex-col gap-3 w-full bg-gray-100 rounded-xl ${styles.datawrapper} max-h-[50vh]`}>
                                    <div className={`flex flex-row justify-between gap-3`}>
                                      <span
                                          className={`w-full flex justify-center px-2 py-1 text-black ${isDetailSelected && styles.active}`}
                                          onClick={() => {
                                              setIsDetailSelected(true)
                                          }}>
                                        Details
                                      </span>
                                        <span
                                            className={`w-full flex justify-center px-2 py-1 text-black ${!isDetailSelected && styles.active}`}
                                            onClick={() => {
                                                setIsDetailSelected(false)
                                            }}>
                                        Description
                                      </span>
                                    </div>
                                    <div className={`flex flex-col gap-3`}
                                         style={{height: '300px', overflowY: isDetailSelected ? 'hidden' : 'auto'}}>
                                        {
                                            isDetailSelected ? (
                                                <>
                                                    <div className={`flex flex-row gap-2`}>
                                                        <span
                                                            className={`text-purple-600 font-semibold min-w-[50px]`}>Name</span>
                                                        <span className={`text-purple-600`}>:</span>
                                                        <span className={`text-gray-800`}>{prop.data.name}</span>
                                                    </div>
                                                    <div className={`flex flex-row gap-2`}>
                                                        <span
                                                            className={`text-purple-600 font-semibold min-w-[50px]`}>date</span>
                                                        <span className={`text-purple-600`}>:</span>
                                                        <span className={`text-gray-800`}>{prop.data.date}</span>
                                                    </div>
                                                    <div className={`flex flex-row gap-2`}>
                                                        <span
                                                            className={`text-purple-600 font-semibold min-w-[50px]`}>Time</span>
                                                        <span className={`text-purple-600`}>:</span>
                                                        <span className={`text-gray-800`}>{prop.data.time}</span>
                                                    </div>
                                                    <div className={`flex flex-row gap-2`}>
                                                        <span
                                                            className={`text-purple-600 font-semibold min-w-[50px]`}>Venue</span>
                                                        <span className={`text-purple-600`}>:</span>
                                                        <span className={`text-gray-800`}>{prop.data.venue}</span>
                                                    </div>
                                                </>
                                            ) : (
                                                <div
                                                    className={`flex flex-col items-center justify-center overflow-auto minimal-scrollbar`}>
                                                    <span className={`text-gray-700`}>{prop.data.description}</span>
                                                </div>
                                            )
                                        }
                                    </div>

                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}