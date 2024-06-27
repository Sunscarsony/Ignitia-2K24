import React, { useRef, useState } from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Button } from "@nextui-org/react";
import { hasCookie } from "cookies-next";
import Image from 'next/image';
import {UserVote} from "../../../../Helper/API/Auth";
import {toast} from "react-toastify";
import {toastDefaultTheme} from "../../../../Defaults/Toast";
import authSelectors from "../../../../Store/auth/Selector";
import {useDispatch} from "react-redux";
import authActions from "../../../../Store/auth/actions";
import {useRouter} from "next/navigation";

interface propType {
  isModelOpen: boolean,
  cardIndex : number
  CloseModel: () => void,
  celebs: { name: string, img: string }[],
}

const AddProduct = ({ isModelOpen, CloseModel, celebs , cardIndex }: propType) => {
  const [posterUrl, setPosterUrl] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [inputTransactionId, SetInputTransactionId] = useState<string>();
  const dispatch = useDispatch();
  const accessToken = authSelectors.AccessToken();

  const router = useRouter();

  const formRef = useRef<HTMLFormElement>(null);

  const HandleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
      setIsSubmitting(true)
      e.preventDefault();

      if(!accessToken || typeof accessToken !== "string"){
          toast.warn("Sign In to vote",toastDefaultTheme);
          setIsSubmitting(false);
          setTimeout(()=>{router.push("/auth")},2000)
          return;
      }

      if(accessToken && cardIndex>=1){
          const promise = new Promise(async (resolve,reject)=>{
              const response = await UserVote(cardIndex,accessToken)
              if(response.error){
                  reject();
                  return;
              }else{
                  dispatch(authActions.updateUserVote(true) as any)
              }
              resolve(1)
          })
          await toast.promise(promise,{
              success:"Voted",
              error:"Error while voting",
              pending:"Please wait ..."
          },toastDefaultTheme)
      }
      setIsSubmitting(false)
  };

  const HandleClose = () => {
    setPosterUrl(undefined);
    setIsSubmitting(false);
    formRef.current && formRef.current.reset();
    CloseModel();
  };

  return (
    <div>
      <Modal
        size={'xl'}
        isOpen={isModelOpen}
        onClose={HandleClose}
        className={`mt-3`}
        style={{
          maxWidth: '700px',
          margin: 'auto',
          borderRadius: '10px',
          textAlign: 'center',
          background: '#000',
          color: 'white',
          transition: 'background 0.3s, color 0.3s',
          border: '1px solid #2a3c64',
          boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',

        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Vote Now</ModalHeader>
              <ModalBody>
                <form onSubmit={HandleSubmit} ref={formRef} className={`flex flex-col gap-4 max-h-[60vh] overflow-y-auto no-scrollbar`}>
                  <div className={`flex flex-row justify-center items-center gap-8 flex-wrap`}>
                    {
                      celebs.map((single, index) => (
                        <div key={`celeb_card_${index}`}
                          className={'max-w-[130px] flex flex-col justify-center items-center gap-4'}>
                          <Image src={single.img} alt={`celeb_${index}`}
                            className={`w-full rounded-full aspect-square object-cover`} width={100} height={100} />
                          <span className={`text-sm text-center`}>{single.name}</span>
                        </div>
                      ))
                    }
                  </div>
                  <div className={'text-sm flex flex-col gap-4'} style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: '10px', padding: '20px', border: '2px solid #d6414154', boxShadow: '0 0 20px 0 rgba(255, 247, 247, 0.2)', }}>
                    <span className={'text-medium font-semibold'}>DISCLAIMER</span>
                    <span className={`text-xs`} style={{ paddingLeft: '20px' }}>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ position: 'relative' }}>
                          <span style={{ position: 'absolute', left: '-20px' }}>&#9733;</span> Cast your vote <b>JUST</b> once.
                        </li>
                        <li style={{ position: 'relative' }}>
                          <span style={{ position: 'absolute', left: '-20px' }}>&#9733;</span> Choose wisely for the best category.
                        </li>
                        <li style={{ position: 'relative' }}>
                          <span style={{ position: 'absolute', left: '-20px' }}>&#9733;</span> Make your decision in bringing your <b><i>FAVORITE STAR</i></b> out of the frame.
                        </li>
                        <li style={{ position: 'relative' }}>
                          <span style={{ position: 'absolute', left: '-20px' }}>&#9733;</span> Your Vote matters as You are the HOST.
                        </li>
                      </ul>
                    </span>
                  </div>
                    <div className={`flex justify-end gap-3`}>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Close
                        </Button>
                        <Button style={{ background: '#60BB', color: 'white' }} type={'submit'} isLoading={isSubmitting}>
                            Vote
                        </Button>
                    </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddProduct;
