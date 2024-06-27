'use client'
import React, { useRef, useState } from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { hasCookie } from "cookies-next";
import Image from 'next/image';
import authSelectors from "../../../../Store/auth/Selector";
import {toast} from "react-toastify";
import {toastDefaultTheme} from "../../../../Defaults/Toast";
import {object} from "prop-types";
import {UserAddContribute} from "../../../../Helper/API/Auth";
import {UserAddContributeType} from "../../../../Types/API/Request/Auth";

interface propType {
  isModelOpen: boolean,
  CloseModel: () => void,
}

const Contribution = ({ isModelOpen, CloseModel }: propType) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [inputTransactionId, setInputTransactionId] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);

  const accessToken = authSelectors.AccessToken();

  const formRef = useRef<HTMLFormElement>(null);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement> ) => {
    if(typeof accessToken !== "string"){
      toast.error("Sign In to contribute",toastDefaultTheme)
    }

    e.preventDefault();

    let formElement = e.target as HTMLFormElement;


    let data = new FormData(formElement);
    const TAndC = data.get("T&C")
    const amount = data.get("amount")?.toString();
    if(amount) {
      const amountInInt = parseInt(amount)
      const contributeObj: UserAddContributeType = {
        transaction_id: data.get("transactionID") as string,
        transaction_amount: amountInInt,
        email: data.get("email") as string
      }

      //console.log(TAndC);

      if (contributeObj.transaction_amount && contributeObj.transaction_id && TAndC && accessToken) {
        const promise = new Promise(async (res,rej)=>{
          const response = await UserAddContribute(contributeObj,accessToken)
          //console.log(response)
          if(response.error){
              rej();
              toast.error(response.message,toastDefaultTheme);
          }
          res(1);
          handleClose();
        })
        await toast.promise(promise,{
          success:"Contribution added",
          error:"Contribution failed",
          pending:"Please wait ..."
        },toastDefaultTheme)
      }
    }
  };

  const handleClose = () => {
    setIsSubmitting(false);
    formRef.current?.reset();
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
          backgroundImage: 'url("/images/dark-black-bg.jpg")',
          backgroundSize: 'cover',
          color: '#fff',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #05d4f4',
          transition: 'background 0.3s, color 0.3s',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <style jsx>{`
            .card {
              background-color: #d7d7d7b3;
              background-image: linear-gradient(147deg, #d7d7d7 0%, #353535 74%);
              padding: 20px;
              display: flex;
              border-radius: 5px;
              flex-direction: column;
              color: #fff;
              box-shadow: 0px 4px 8px rgb(0, 0, 0);
              transition: background 0.3s, color 0.3s, box-shadow 0.3s;
              justify-content: center;
            }

            .card ul {
              list-style-type: none;
              padding: 0;
            }

            .card li {
              display: flex;
              align-items: center;
              margin-bottom: 10px;
              color: #ffffff;
            }

            .combo-offers {
              font-weight: bold;
              margin-top: 10px;
              color: #ffcc00;
            }
            .contribution {
              font-weight: bold;
              color: #ffcc00;
            }
            .terms-conditions {
              text-align: center;
              color: #d2d2d2;
              margin-top: 10px;
              font-weight: bold;
              border-radius: 5px;
              border: 2px solid #ff0000;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
              transition: border 0.3s, box-shadow 0.3s;
            }
            .checkbox-container {
              display: flex;
              justify-content: center;
              margin-top: 10px;
            }
            .checkbox-label {
              display: flex;
              align-items: center;
              color: #d2d2d2;
              white-space: nowrap;
            }
            .checkbox-label input {
              margin-right: 1px;
            }
          `}</style>
              <ModalHeader className="flex flex-col gap-1">Pay Now</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit} ref={formRef} className={`flex flex-col gap-4 max-h-[60vh] overflow-y-auto no-scrollbar`}>
                  <div className={'text-sm flex flex-col gap-4'}>
                    <span className={'text-medium font-semibold align-center'}></span>
                    <span className={`text-ms`}></span>
                    <div style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', marginBottom: '10px', border: '2px solid #ff0000', padding: '10px' }}>
                      <ul>
                        <li style={{ position: 'relative' }}>
                          <span className="text-bold"><span style={{ position: 'absolute', color: '#ff0000' }}>&#9733;</span>TERMS & CONDITIONS –</span>
                          <p><ul>
                            <li>
                            1 - Cash of any amount will not be accepted for IGNITIA 2024.</li>
                            <li>2 - The only mode of payments for Sponsorship is via cheque or QR Code.</li>
                            <li>3 - In order to write a check for sponsorship in Ignitia 2024 the cheque should be written to the below mentioned account only which is 32175327418.</li>
                            <li>4 - In order to make a payment via QR code, the payment has to be done on the QR code mentioned on the official website of IGNITIA 2024.</li>
                            <li>5- Before initiating a payment please contact the undersigned Mr Sachin Tripathi.</li>
                          </ul></p>
                        </li>
                      </ul>

                    </div>


                    <div className="checkbox-container">
                      <label className="checkbox-label">
                        <input type="checkbox" name={'T&C'} required/>
                        <span>&nbsp; I agree to the terms and conditions.</span>
                      </label>
                    </div>
                    <div className={`flex justify-center`}>
                      <Image src={'/vote/ign6066@sbi-1.png'} alt={'qr'} className={`w-1/2`} width={300} height={300}/>
                    </div>
                    <Input type={"text"} color={'primary'} name={'transactionID'} label={'Transaction ID'} placeholder={'Enter Transaction ID '} labelPlacement={'outside'} isRequired/>
                    <Input type={"text"} color={'primary'} name={'email'} label={'Email'} placeholder={'Enter Email '} labelPlacement={'outside'} isRequired/>
                    <Input type={"number"} color={'primary'} name={'amount'} label={'Amount'} placeholder={'Enter amount'} labelPlacement={'outside'} isRequired/>
                  </div>


                  <div className={`flex justify-end gap-3`}>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button style={{ backgroundColor: "#601fd0", color: "white" }} type={'submit'} isLoading={isSubmitting}>
                      Submit
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

export default Contribution;
