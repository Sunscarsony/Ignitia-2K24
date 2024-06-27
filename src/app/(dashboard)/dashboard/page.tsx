'use client';

import { redirect } from 'next/navigation';
import authSelectors from '../../../../Store/auth/Selector';
import { useEffect } from 'react';

export default function Dashboard() {
    const accessToken = authSelectors.AccessToken();

    useEffect(() => {
        if (!accessToken) {
            return redirect("/auth")
        } else {
            return redirect("/dashboard/profile");
        }
    }, [accessToken]);

    // const pathname = usePathname();
    // return (
    //     <div className="min-h-[100vh]">
    //         <div className='w-[20%] h-[100vh]'>
    //             <DashboardNavbar currentRoute={pathname} />
    //         </div>
    //     </div>
    // )
}
