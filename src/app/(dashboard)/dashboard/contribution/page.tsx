'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import DashboardNavbar from '@/components/userDashboard/dashboardNavbar'
import { usePathname } from 'next/navigation';
import Transaction from '@/components/userDashboard/transaction';
import authSelectors from "../../../../../Store/auth/Selector";
import { GetContributions } from "../../../../../Helper/API/Auth";
import { toastDefaultTheme } from "../../../../../Defaults/Toast";
import { toast } from "react-toastify";
import { redirect } from 'next/navigation';

interface TransactionData {
    transaction_id: string,
    transaction_amount: number,
    created_at: string,
    is_verified: boolean
}

export default function Dashboard() {
    const transactionsPerPage = 7;
    const pathname = usePathname();
    const accessToken = authSelectors.AccessToken();
    const [currentPage, setCurrentPage] = useState(1);
    const [dashboardData, setDashboardData] = useState<TransactionData[]>();

    const [currentTransactions, setCurrentTransactions] = useState<TransactionData[]>();
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (typeof accessToken === "string") {
            const getUserData = async () => {
                const res = await GetContributions(accessToken)
                if (res.error) {
                    toast.warn(res.message, toastDefaultTheme)
                    return;
                }
                setDashboardData(res.responseData);
            }
            getUserData();
        }
        if (!accessToken) {
            return redirect("/auth")
        }
    }, [accessToken]);

    useEffect(() => {
        if (dashboardData) {
            const datalength = dashboardData.length;
            const startIndex = (currentPage - 1) * transactionsPerPage;
            const endIndex = startIndex + transactionsPerPage;

            setCurrentTransactions(dashboardData.slice(startIndex, endIndex));
            setTotalPages(Math.ceil(datalength / transactionsPerPage));
        }
    }, [dashboardData, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="min-h-[100vh] flex">
            <div className='w-[20%] h-[100vh]  '>
                <DashboardNavbar currentRoute={pathname} />
            </div>
            <div className=' h-[100vh] w-[80%] py-7 px-[5rem] overflow-y-scroll  '>
                <div className='flex flex-col gap-[4vh]'>
                    {
                        dashboardData && currentTransactions ? (
                            <>
                                <div className='flex  justify-start w-full items-center h-[15%] gap-[10%]  '>
                                    <div className='w-[70%]'>

                                        <h1 className='text-[3rem] text-[black] font-sans font-bold'>Contribution</h1>
                                    </div>
                                    <div className='w-[30%]' >

                                        <button className='w-[11rem] h-[2.8rem] font-semibold font-sans rounded-3xl bg-[#FFD700] text-[black] flex justify-center items-center  '>Contribute</button>
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-[2rem] font-sans font-semibold text-[#f4c949] flex gap-3 justify-start items-center '>Total Contribution: <span className='text-[2rem] text-[grey] font-semibold '>{dashboardData.length}</span></h1>
                                </div>
                                <div className='flex gap-[13%] text-[grey] text-[1.3rem] font-sans font-semibold  '>
                                    <span>S.No.</span>
                                    <span>Transaction ID</span>
                                    <span>Date | Time</span>
                                    <span>Amount</span>
                                    <span>Status</span>
                                </div>
                                <div className='' >
                                    {currentTransactions.map((item: TransactionData, i: number) => {
                                        const transactionDate = new Date(item.created_at);
                                        return <Transaction
                                            key={currentPage * transactionsPerPage - transactionsPerPage + i + 1}
                                            Sno={currentPage * transactionsPerPage - transactionsPerPage + i + 1}
                                            transactionId={item.transaction_id}
                                            date={transactionDate.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                                            time={transactionDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                                            amount={item.transaction_amount}
                                            status={item.is_verified === true ? 'Verified' : (item.is_verified === false ? 'Failed' : 'Pending')}
                                        />
                                    })}
                                </div>
                                <div className='flex gap-[50%] justify-start items-center'>
                                    <div>
                                        <h1 className='text-[grey] text-[1.2rem] '>Showing {dashboardData.length !== 0 ? currentPage * transactionsPerPage - transactionsPerPage + 1 : 0} to {Math.min(currentPage * transactionsPerPage, dashboardData.length)}
                                            &nbsp;Out of {dashboardData.length}</h1>
                                    </div>

                                    <div className="flex gap-2 mt-4">
                                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                            <button className='text-[black] bg-[#FFD700] h-[40px] w-[40px] rounded-xl ' key={page} onClick={() => handlePageChange(page)}>
                                                {page}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : "Loading!!"
                    }
                </div>
            </div>
        </div>
    )
}
