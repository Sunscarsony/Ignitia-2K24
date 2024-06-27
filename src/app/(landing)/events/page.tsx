// 'EventPage.js'
'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/css/landing/events/Event.module.scss';
import EventData from "../../../../Data/EventStatic";
import EventCard from "@/components/landing/events/EventCard";
import { EventProp } from "../../../../Types/Component/Event/EventCard";
import { Pagination } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import ComingSoon from '@/app/(dashboard)/comingsoon/page';
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import Preloader from '@/components/landing/preloader/preloader'; 



const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#df95fc",
    lag: 0,
};

const EventPage = () => {
    const LIMIT_PER_PAGE = 10;

    const [defautData, setDefaultData] = useState<EventProp[]>(EventData)
    const [filteredData, setFilteredData] = useState<EventProp[]>()
    const [currPage, setCurrPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>()
    const [textFilter, setTextFilter] = useState<string>("")


    useEffect(() => {
        if (filteredData && filteredData.length >= 1) {
            const calculateTotalPages = (totalItems: number, itemsPerPage: number) => {
                return Math.ceil(totalItems / itemsPerPage);
            }
            const totalPage = calculateTotalPages(filteredData.length, LIMIT_PER_PAGE)
            setTotalPages(totalPage)
        }
    }, [filteredData]);


    useEffect(() => {
        if (defautData) {
            const dataClone = structuredClone(defautData);
            setFilteredData(
                dataClone.filter((single) => {
                    const found = single.name.toLowerCase().includes(textFilter.toLowerCase())
                    //console.log(found, textFilter.toLowerCase(), single.name.toLowerCase())
                    return found
                }))
        }
    }, [defautData, textFilter]);

    // return <ComingSoon />;

    return (
        <div className={`min-h-screen flex flex-col gap-3`}
            style={{ backgroundImage: 'url(./images/dark-purple-bg.jpg)', backgroundSize: 'cover' }}>
            <h1 className={styles.title}>
                Upcoming Events
            </h1>


            <div className={`flex flex-row justify-center pb-5`}>

                <Input className={`max-w-[300px]`}
                    classNames={{ inputWrapper: "bg-gray-100" }}
                    variant={'flat'} color={"secondary"}
                    size={'sm'} labelPlacement={'outside'}
                    startContent={<i className="fi fi-br-search"></i>}
                    placeholder={"Search"}
                    onChange={(e) => { setTextFilter(e.target.value) }}
                />

            </div>

            <div className={`flex flex-row gap-10 flex-wrap justify-center`}>
                {
                    filteredData && filteredData.slice((currPage-1)*LIMIT_PER_PAGE, currPage * LIMIT_PER_PAGE).map((single, index) => (
                        <EventCard data={single} key={`event_card_${index}`} />
                    ))
                }
            </div>

            <div className={`flex justify-center pt-5 max-w-[100vw] box-border px-5 mb-10`}>
                {
                    totalPages && <Pagination className={`dark`}
                        classNames={{ item: "bg-gray-800", prev: "bg-gray-800", next: "bg-gray-800" }}
                        variant={'flat'}
                        color="secondary" total={totalPages}
                        isCompact
                        initialPage={currPage} onChange={(e) => {
                            setCurrPage(e)
                        }} />
                }
            </div>
            <div style={{ zIndex: 1000 }}>
                <MouseTrail {...trailProps} />
            </div>
            <Preloader logo='/auth/1.png' />

        </div>
    );
};

export default EventPage;
