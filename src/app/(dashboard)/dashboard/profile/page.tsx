'use client';

import DashboardNavbar from '@/components/userDashboard/dashboardNavbar'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import authSelectors from "../../../../../Store/auth/Selector";
import { GetProfile } from "../../../../../Helper/API/Auth";
import { toastDefaultTheme } from "../../../../../Defaults/Toast";
import { toast } from "react-toastify";
import { redirect } from 'next/navigation';

interface DashboardData {
    name: string;
    college_name: string;
    phone_no: string;
    roll_number: number;
    branch: string;
    year: number;
    vote: number;
    email: string;
}

const Dashboard: React.FC = () => {
    const accessToken = authSelectors.AccessToken();
    const pathname = usePathname(); //for getting router name
    const [dashboardData, setDashboardData] = useState<DashboardData>();
    const [userAvatar, setUserAvatar] = useState("https://avatar.mrayush.in/avatar/")

    useEffect(() => {
        if (typeof accessToken === "string") {
            const getUserData = async () => {
                const resp = await GetProfile(accessToken)
                if (resp.error) {
                    toast.warn(resp.message, toastDefaultTheme)
                    return;
                }
                setDashboardData(resp.responseData);
            }
            getUserData();
        }

        if (!accessToken) {
            return redirect("/auth")
        }
    }, [accessToken]);

    useEffect(() => {
        if (dashboardData) {
            let res: string = "";
            const message: string = dashboardData.name;
            const words: string[] = message.split(' ');

            for (let i: number = 0; i < words.length; i++) {
                const letters: string[] = words[i].split('');
                res += letters[0].toUpperCase();
            }

            setUserAvatar("https://avatar.mrayush.in/avatar/" + res);
        }
    }, [dashboardData]);

    return (
        <div className="min-h-[100vh] flex">
            <div className='w-[20%] h-[100vh]'>
                <DashboardNavbar currentRoute={pathname} />
            </div>
            <div className=' flex flex-col gap-[5%] h-[100vh] w-[80%] px-[5rem] py-7 '>
                {dashboardData ? (
                    <>
                        <div>
                            <h1 className='text-[3rem] text-[black] font-bold font-sans' >Profile</h1>
                            <p className='text-[grey] font-sans'>Welcome back, {dashboardData.name}!  Happy to see you back, checkout your registered events!</p>
                        </div>
                        <div className='flex gap-[10%]'>
                            <div className='h-[40vh] w-[25%] rounded-lg bg-[#011222] flex flex-col justify-center items-center gap-[2%]'>
                                <div className='h-[150px] w-[150px] flex justify-center items-center rounded-full bg-[#FFD700] overflow-hidden'>
                                    <img className='p-1	rounded-full min-h-full' src={userAvatar} />
                                </div>
                                <div>
                                    <h1 className='text-[2rem] text-[white] font-sans font-bold text-center'>{dashboardData.name}</h1>
                                </div>
                            </div>

                            <div className=' flex flex-col gap-1'>
                                <h1 className='flex gap-3 text-[black] font-sans text-[1.3rem]'><strong>Name:</strong><p>{dashboardData.name}</p></h1>
                                <h1 className='flex gap-3 text-[black] font-sans text-[1.3rem]'><strong>College Name:</strong><p>{dashboardData.college_name}</p></h1>
                                <h1 className='flex gap-3 text-[black] font-sans text-[1.3rem]'><strong>Roll No:</strong><p>{dashboardData.roll_number}</p></h1>
                                <h1 className='flex gap-3 text-[black] font-sans text-[1.3rem]'><strong>Email:</strong><p>{dashboardData.email}</p></h1>
                                <h1 className='flex gap-3 text-[black] font-sans text-[1.3rem]'><strong>Phone No:</strong><p>{dashboardData.phone_no}</p></h1>
                                <h1 className='flex gap-3 text-[black] font-sans text-[1.3rem]'><strong>Branch:</strong><p>{dashboardData.branch}</p></h1>
                                <h1 className='flex gap-3 text-[black] font-sans text-[1.3rem]'><strong>Year:</strong><p>{dashboardData.year}</p></h1>
                            </div>
                        </div>

                        <div>
                            <h1 className=' text-[black] text-[1.2rem] font-sans font-semibold'>Your Registration</h1>
                        </div>
                    </>
                ) : "Loading!!"}

            </div>
        </div>
    )
}
export default Dashboard;