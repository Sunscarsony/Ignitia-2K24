'use client';
import Image from 'next/image'
import DashboardNavbar from '@/components/userDashboard/dashboardNavbar'
import { usePathname } from 'next/navigation';


export default function Dashboard() {
    const pathname = usePathname();
    return (
        <div className="min-h-[100vh] flex">

            <div className='w-[20%] h-[100vh] '>
                <DashboardNavbar currentRoute={pathname} />
            </div>
            <div className='flex justify-center items-center h-[100vh] w-[80%] '>
                <h1 className='text-[3vw] font-bold'>Settings</h1>
            </div>
        </div>
    )
}
