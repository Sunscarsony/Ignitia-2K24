import React from "react";

interface TransactionData {
    Sno: number;
    transactionId: string;
    date: string;
    time: string;
    amount: number;
    status: any;
}

const Transaction: React.FC<TransactionData> = ({ Sno, transactionId, date, time, amount, status }) => {
    return (
        <div className="flex gap-[5%] items-center justify-between border-b border-gray-300 py-2 text-[black] font-semibold font-sans  ">
            <span className="flex-shrink-0 w-1/6 text-left">{Sno}</span>
            <span className="flex-shrink-0 w-1/6 text-left">{transactionId}</span>
            <span className="flex gap-3 w-2/6 text-left">
                <p>{date}</p> |
                <p>{time}</p>
            </span>
            <span className="flex gap-1 w-1/6 text-left pl-[5%] ">
                <span>&#8377;</span>
                {amount}
            </span>
            <span className={`flex-shrink-0 w-1/6 text-left pl-[9%] ${status.toLowerCase() === 'verified' ? 'text-[#50f450]' : (status.toLowerCase() === 'failed' ? 'text-[#CF352E]' : 'text-[#FFD700]')}`}>{status}</span>
        </div>
    );
};

export default Transaction;
