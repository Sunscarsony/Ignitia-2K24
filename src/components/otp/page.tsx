import React, { useRef, useState } from 'react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { hasCookie } from "cookies-next";
import { RegisterInput } from "../../../Types/API/Request/Auth";
import { RegisterUser, SendOtp, VerifyOtp } from "../../../Helper/API/Auth";
import { toast } from "react-toastify";
import { toastDefaultTheme } from "../../../Defaults/Toast";

interface PropType {
    isModelOpen: boolean;
    CloseModel: () => void;
    registerObj: RegisterInput | undefined,
    messageId: string | undefined,
}

const OTPVerificationModal: React.FC<PropType> = ({ isModelOpen, CloseModel, registerObj, messageId }: PropType) => {
    const [inputOTP, setInputOTP] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const formRef = useRef<HTMLFormElement>(null);

    // console.log(registerObj)
    const handleSubmit = async (e?: React.FormEvent<HTMLFormElement> | undefined) => {
        let formElement: HTMLFormElement | undefined = undefined;
        if (e) {
            e.preventDefault();
            formElement = e.target as HTMLFormElement;
        } else if (formRef.current) {
            formElement = formRef.current;
        }

        if (formElement && registerObj && messageId && inputOTP) {
            try {
                const promise = VerifyOTP(messageId, inputOTP, registerObj)
                await toast.promise(promise, {
                    success: "User created Successfully",
                    pending: "please wait ...",
                    error: "error occurred"
                }, toastDefaultTheme)
            } catch (e) {
                //console.log(e)
            }
        }
    }

    const VerifyOTP = async (MId: string, OTP: string, registerUserObj: RegisterInput) => {
        return new Promise(async (res, rej) => {
            setIsSubmitting(true);
            //console.log(inputOTP);
            try {
                const response = await VerifyOtp({ msg_id: MId, otp: OTP });
                //console.log(response);
                if (response.error) {
                    toast.error(response.message, toastDefaultTheme);
                    rej();
                } else {
                    const userData: RegisterInput = {
                        ...registerUserObj,
                        msg_id: MId,
                        otp: OTP
                    }
                    const response2 = await RegisterUser(userData);
                    //console.log(response2)
                    if (response2.error) {
                        toast.error(response2.message, toastDefaultTheme);
                        rej();
                    } else {
                        res(1);
                        handleClose();
                        setTimeout(() => { location.reload() }, 1000);
                    }
                }
            } catch (e) {
                rej();
            } finally {
                setIsSubmitting(false)
            }
        })
    }

    const handleClose = () => {
        setInputOTP("");
        setIsSubmitting(false);
        formRef.current && formRef.current.reset();
        CloseModel();
    }

    return (
        <div>
            <Modal
                size={'xl'}
                isOpen={isModelOpen}
                onClose={handleClose}
                className={`mt-3`}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">OTP Verification</ModalHeader>
                            <ModalBody>
                                <form onSubmit={handleSubmit} ref={formRef} className={`flex flex-col gap-4 max-h-[60vh] overflow-y-auto no-scrollbar`}>
                                    <div className={'text-sm flex flex-col gap-4'}>
                                        <span className={'text-medium font-semibold'}>Enter OTP</span>
                                        <Input
                                            type='number'
                                            minLength={6}
                                            maxLength={6}
                                            color='secondary'
                                            label='OTP'
                                            placeholder='Enter OTP'
                                            labelPlacement='outside'
                                            isRequired={true}
                                            // @ts-ignore
                                            onInput={(e) => { if (e.target.value.length > e.target.maxLength) { e.target.value = e.target.value.slice(0, e.target.maxLength) } }}
                                            onChange={(e) => (setInputOTP(e.target.value))}
                                        />
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="secondary" type={'submit'} onClick={() => { handleSubmit(); }} isLoading={isSubmitting}>
                                    Submit
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default OTPVerificationModal;
