// Leaderboard.tsx
'use client'
import React, {useEffect, useRef, useState} from 'react';
import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/modal";
import BarChart from '@/components/landing/vote/graph/BarChart';
import {GetVotes} from "../../../../Helper/API/Vote";

interface propType {
  isModelOpen: boolean;
  CloseModel: () => void;
}

const Leaderboard = ({ isModelOpen, CloseModel }: propType) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [voteData,setVoteData] = useState([
      { label: 'POOL 1', value: 0 },
      { label: 'POOL 2', value: 0 },
      { label: 'POOL 3', value: 0 },
      { label: 'POOL 4', value: 0 },
  ])

  const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const GetVoteData = async () =>{
            const promise = new Promise(async (resolve,reject)=>{
                const response = await GetVotes();
                if(response.error){
                    reject();
                    return;
                }else{
                    resolve(1);
                    setVoteData(response.responseData.map((single) => {
                        if (single.pool_id == 1)
                            return { label: 'POOL 1', value: single.percentage };
                        if (single.pool_id == 2)
                            return { label: 'POOL 2', value: single.percentage };
                        if (single.pool_id == 3)
                            return { label: 'POOL 3', value: single.percentage };

                        return { label: 'POOL 4', value: single.percentage };
                    }).sort((a, b) => {
                        if (a.label < b.label) return -1;
                        if (a.label > b.label) return 1;
                        return 0;
                    }));

                }
            })
        }
        GetVoteData();
    }, []);

  const handleClose = () => {
    formRef.current && formRef.current.reset();
    CloseModel();
  };

  return (
    <div>
      <Modal
        size={'xl'}
        isOpen={isModelOpen}
        onClose={handleClose}
        className={`mt-3`}
        style={{
          borderRadius: '10px',
          textAlign: 'center',
          background: '#000',
          color: 'white',
          transition: 'background 0.3s, color 0.3s',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" style={{ textAlign: 'center' }}>
                LEADER BOARD
              </ModalHeader>
              <ModalBody>
                {/* Include your existing leaderboard content here */}
                <BarChart
                  data={voteData}
                  theme="dark"
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Leaderboard;
