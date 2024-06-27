// DashboardNavbar.tsx
'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/auth/ignitia.png';
import activePro from '../../../public/userDashboard/profile-active.svg';
import Pro from '../../../public/userDashboard/profile.svg';
import activeEvent from '../../../public/userDashboard/events-active.svg';
import Event from '../../../public/userDashboard/events.svg';
import activeContro from '../../../public/userDashboard/contribution-active.svg';
import Contro from '../../../public/userDashboard/contribution.svg';
import setting from '../../../public/userDashboard/setting.svg';
import logout from '../../../public/userDashboard/logout.svg';
import noti from '../../../public/userDashboard/notification.svg';
import authActions from '../../../Store/auth/actions';
import { useDispatch } from "react-redux";

interface DashboardNavbarProps {
    currentRoute: string;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ currentRoute }) => {
    const dispatch = useDispatch();

    const HandleLogout = () =>{
        dispatch(authActions.resetState() as any);
        location.replace("/auth");
    }

    return (
        <div className='h-full w-full bg-[#011222] py-[2rem] px-[3.5rem] flex flex-col gap-[10%] font-sans'>
            <div className='flex justify-center items-center' onClick={(e) => { window.location.replace("/") }}>
                <Image src={logo} alt='logo' />
            </div>
            <div className='flex flex-col gap-10 justify-center items-start '>
                <Link href='/dashboard/profile' className='flex gap-5 justify-center items-center '>
                    <Image src={currentRoute === '/dashboard/profile' ? activePro : Pro} alt='profile' />
                    <span className={currentRoute === '/dashboard/profile' ? 'font-normal text-[1.3rem] text-[#FFD700]' : 'font-normal text-[1.3rem] '}>Profile</span>
                </Link >
                <Link href='/dashboard/events' className='flex gap-5 justify-center items-center '>
                    <Image src={currentRoute === '/dashboard/events' ? activeEvent : Event} alt='event' />
                    <span className={currentRoute === '/dashboard/events' ? 'font-normal text-[1.3rem] text-[#FFD700]' : 'font-normal text-[1.3rem] '}>Events</span>
                </Link >
                <Link href='/dashboard/contribution' className='flex gap-5 justify-center items-center '>
                    <Image src={currentRoute === '/dashboard/contribution' ? activeContro : Contro} alt='conto' />
                    <span className={currentRoute === '/dashboard/contribution' ? 'font-normal text-[1.3rem] text-[#FFD700]' : 'font-normal text-[1.3rem] '}>Contribution</span>
                </Link >
                <Link href='/dashboard/settings' className='flex gap-5 justify-center items-center '>
                    <Image src={setting} alt='setting' />
                    <span className={currentRoute === '/dashboard/settings' ? 'font-normal text-[1.3rem] text-[#FFD700]' : 'font-normal text-[1.3rem] '}>Settings</span>
                </Link >
            </div>
            <div>
                <div className='mt-[40%] flex flex-col gap-7 justify-center items-start'>
                    <Link href='#'>
                        <Image src={noti} alt='notification' className='ml-[5px]' />
                    </Link>
                    <div className='flex gap-5' onClick={HandleLogout}>
                        <Link href='#'>
                            <Image src={logout} alt='Logout' />
                        </Link >
                        <span>Log Out</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;
