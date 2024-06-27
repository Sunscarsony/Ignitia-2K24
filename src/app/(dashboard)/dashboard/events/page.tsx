'use client';
import Image from 'next/image'
import DashboardNavbar from '@/components/userDashboard/dashboardNavbar'
import noDataFound from '../../../../../public/userDashboard/no-data-found.svg'
import { usePathname } from 'next/navigation';
import authSelectors from "../../../../../Store/auth/Selector";
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
    const pathname = usePathname();
    const accessToken = authSelectors.AccessToken();

    useEffect(() => {
        if (!accessToken) {
            return redirect("/auth")
        }
    }, [accessToken]);

    return (
        <div className="min-h-[100vh] flex">
            <div className='w-[20%] h-[100vh] '>
                <DashboardNavbar currentRoute={pathname} />
            </div>
            <div className='flex  h-[100vh] w-[80%] px-[5rem] py-7 '>
                <h1 className='text-[3rem] font-bold font-sans text-[black]'>Events</h1>
                <div className='flex justify-center items-center w-full pr-[10%]  '>
                    <Image src={noDataFound} alt="not found" />
                </div>
            </div>
        </div>
    )
}
