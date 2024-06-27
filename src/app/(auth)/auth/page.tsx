"use client";
import React, {FormEvent, useEffect, useRef, useState} from 'react';
import styles from "@/css/auth/auth.module.scss"
import OTP from "@/components/otp/page";
import { Button } from "@nextui-org/react";
import { LoginInput, RegisterInput } from "../../../../Types/API/Request/Auth";
import { LoginUser, SendOtp } from "../../../../Helper/API/Auth";
import { toastDefaultTheme } from "../../../../Defaults/Toast";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import authActions from "../../../../Store/auth/actions";
import { useRouter } from "next/navigation";
import {GetUserData} from "../../../../Helper/DataFetcher/UserData";
import {LogData} from "../../../../Helper/Log/Logger";
import Script from "next/script";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";


const trailProps = {
    lineDuration: 7,
    lineWidthStart: 5,
    strokeColor: "#df95fc",
    lag: 0,
};

declare const grecaptcha: any; // or use a more specific type if available




interface CustomWindow extends Window {
    onCAPTCHAVerified?: () => void;
    onCAPTCHAExpire?: () => void;
    onCAPTCHAError?: () => void;
}



const LoginForm: React.FC = () => {
    const [IsOtpOpen, setIsOtpOpen] = useState<boolean>(false);
    const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
    const [isSigningUp, setIsSigningUp] = useState<boolean>(false);
    const [registerObj, setRegisterObj] = useState<RegisterInput>()
    const [loginObj, setLoginObj] = useState<LoginInput>()
    const [messageId, setMessageId] = useState<string>()
    const dispath = useDispatch();
    const router = useRouter();
    const [phoneNumber , setPhoneNumber] = useState<string>("")
    const [rollNumber , setRollNumber] = useState<string>("")
    const [isSubmitDisabled,setIsDisabled] = useState<boolean>(true)



    const token_reCaptcha = process.env.TOKEN_RECAPTCHA



    const formRef = useRef<HTMLFormElement>();
    const recaptcha_token = process.env.TOKEN_RECAPTCHA;

    const [elements, setElements] = useState([
        (
            <div className={styles.inputWrap} key="roll">
                <input
                    type="text"
                    className={styles.inputField}
                    required
                    onChange={(e)=>{setRollNumber(e.target.value)}}
                />
                <label>&nbsp;Roll Number</label>
            </div>
        ),
        (
            <div className={styles.inputWrap} key="mobNumber">
                <input
                    type="text"
                    onChange={(e)=>{setPhoneNumber(e.target.value)}}
                    className={styles.inputField}
                    required
                />
                <label>&nbsp;Mobile Number</label>
            </div>
        ),
    ]);







    const handleCAPTCHAVerified = () => {
        console.log("reCAPTCHA successfully completed!");
        setIsDisabled(false);
    };

    const handleCAPTCHAExpire = () => {
        console.log("reCAPTCHA expired");
        setIsDisabled(true);
    };

    const handleCAPTCHAError = () => {
        console.log("reCAPTCHA error");
        setIsDisabled(true);
    };

    // Attach event listeners when the component mounts
    useEffect(() => {
        const customWindow = window as CustomWindow;

        customWindow.onCAPTCHAVerified = handleCAPTCHAVerified;
        customWindow.onCAPTCHAExpire = handleCAPTCHAExpire;
        customWindow.onCAPTCHAError = handleCAPTCHAError;

        // Clean up the event listeners when the component unmounts
        return () => {
            customWindow.onCAPTCHAVerified = undefined;
            customWindow.onCAPTCHAExpire = undefined;
            customWindow.onCAPTCHAError = undefined;
        };
    }, []);














    useEffect(() => {
        const shuffledElements = [...elements].sort(() => Math.random() - 0.5);
        setElements(shuffledElements);
    }, []);








    const HandleClosePopup = () => {
        setIsOtpOpen(false);
    }
    const HandleOpenPopup = () => {
        setIsOtpOpen(true);
    }

    const HandleRegister = async (e: FormEvent<HTMLFormElement>) => {
        try{

            setIsSigningUp(true);
            e.preventDefault()

            const reCaptchaToken = grecaptcha.getResponse(); // eslint-disable-line

            const form = e.target as HTMLFormElement
            const Data = new FormData(form)
            const obj: RegisterInput = {
                email: Data.get("email")?.toString() || "",
                phone_no: "+91" + phoneNumber || "",
                password: Data.get("password")?.toString() || "",
                password2: Data.get("password")?.toString() || "",
                name: Data.get("name")?.toString() || "",
                course: Data.get("branch")?.toString() || "",
                college_name: Data.get("collName")?.toString() || "",
                roll_number: parseInt(rollNumber) || 0,
                branch: Data.get("branch")?.toString() || "",
                year: parseInt(Data.get("year") as string) || 0,
            }

            const data = await GetUserData();
            const isAutomated = await LogData(data,"User Data")

            if(obj.roll_number.toString().length >= 15 && obj.roll_number.toString().length <= 2){
                toast.warn("Roll Number invalid",toastDefaultTheme);
                return;
            }

            if(obj.phone_no.length != 13){
                toast.warn("Phone Number invalid",toastDefaultTheme);
                return;
            }

            if(phoneNumber === rollNumber){
                toast.warn("Enter valid credentials",toastDefaultTheme);
                return;
            }

            if(isSubmitDisabled || typeof reCaptchaToken !== "string" ){
                toast.warn("Captcha not verified",toastDefaultTheme);
                return;
            }

            if (obj.email && obj.phone_no && obj.password && obj.password2 && obj.name && obj.course && obj.college_name) {
                setRegisterObj(obj)
                if(data.location && data.location.latitude && data.location.longitude && !isAutomated){
                    toast.info("Sending OTP",toastDefaultTheme);
                    setTimeout(async ()=>{
                        const response = await SendOtp({ phone_no: obj.phone_no , recaptchaToken:reCaptchaToken });
                        if (response.error) {
                            toast.warn(response.message, toastDefaultTheme)
                            return;
                        }
                        setMessageId(response.responseData.message_id);
                        HandleOpenPopup();
                    },2000)
                }else{
                    if(!data.location){
                        toast.warn("Enable location to continue",toastDefaultTheme);
                    }else{
                        toast.warn("Some error occurred #401",toastDefaultTheme);
                    }
                }
            }
        }finally {
            setIsSigningUp(false);
        }
    }



    const HandleLogin = async (e: FormEvent<HTMLFormElement>) => {
        setIsLoggingIn(true);
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const Data = new FormData(form)
        const obj: LoginInput = {
            phone_no: "+91" + Data.get("phone")?.toString() || "",
            password: Data.get("password")?.toString() || "",
        }
        //console.log(obj)
        try {
            if (obj.phone_no && obj.password) {
                setLoginObj(obj)
                const promise = new Promise(async (resolve, reject) => {
                    const response = await LoginUser(obj);
                    //console.log(response)
                    if (response.error) {
                        reject();
                        return;
                    }
                    resolve(1);
                    dispath(authActions.updateAccessToken(response.responseData.token.access) as any)
                    dispath(authActions.updateRefreshToken(response.responseData.token.refresh) as any)
                    dispath(authActions.updateUserVote(!!response.responseData.Vote) as any)
                    setTimeout(() => { router.push("/") }, 1000);
                })
                toast.promise(promise, {
                    success: "Signed In",
                    error: "SignIn failed",
                    pending: "Signing in..."
                }, toastDefaultTheme)
            }
        } catch (e) {

        } finally {
            setIsLoggingIn(false);
        }
    }




    useEffect(() => {

        const inputs = document.querySelectorAll(`.${styles.inputField}`);
        const toggle_btn = document.querySelectorAll(`.${styles.toggle}`);
        const main = document.querySelector("main");
        const bullets = document.querySelectorAll(`.${styles.bullets} span`);
        const images = document.querySelectorAll(`.${styles.image}`);

        inputs.forEach((inp) => {
            inp.addEventListener("focus", addClass);
            inp.addEventListener("blur", removeClass);
        });

        toggle_btn.forEach((btn) => {
            btn.addEventListener("click", toggle);
        });


        bullets.forEach((bullet) => {
            bullet.addEventListener("click", moveSlider);
        });


        function removeClass(e: Event) {
            const element = e.target as HTMLInputElement
            if (element && element.value != "") return;
            element.classList.remove(`${styles.active}`);
        }

        function addClass(e: Event) {
            const inp = e.target as HTMLInputElement;
            inp.classList.add(`${styles.active}`);
        }

        function toggle(e: Event) {
            const btn = e.target as HTMLAnchorElement;
            main && main.classList.toggle(`${styles.signUpMode}`);
            //console.log(btn, main)
        }

        function moveSlider(e: Event) {
            let span = e.target as HTMLSpanElement;
            let dataValue = span.getAttribute('data-value');
            if (dataValue) {
                let index = parseInt(dataValue);
                if (index && !isNaN(index)) {
                    //console.log(index);
                    let currentImage = document.querySelector(`.${styles[`img${index}`]}`);
                    images.forEach((img) => img.classList.remove("show"));
                    if (currentImage) {
                        currentImage.classList.add("show");
                        const textSlider = document.querySelector(`.${styles.textGroup}`) as HTMLDivElement;
                        textSlider && (textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`);
                        bullets.forEach((bull) => bull.classList.remove("active"));
                    }
                }
            }
        }


        return () => {
            inputs.forEach((inp) => {
                inp.removeEventListener("focus", addClass);
                inp.removeEventListener("blur", removeClass);
            });
            toggle_btn.forEach((btn) => {
                btn.removeEventListener("click", toggle);
            });
            bullets.forEach((bullet) => {
                bullet.removeEventListener("click", moveSlider);
            });
        }


    }, [])

    return (
        <div className={styles.parent}>
            <Script src={"https://www.google.com/recaptcha/api.js"} id={'script'}>
            </Script>
            <main>
                <div className={styles.box}>
                    <div className={styles.innerBox}>
                        <div className={styles.formsWrap}>
                            <form
                                id="login"
                                method="post"
                                onSubmit={HandleLogin}
                                autoComplete="off"
                                className={styles.signInForm}
                            >
                                <div className={styles.logo}>
                                    <img src="auth/ignitia.png" alt="ignitia"/>
                                </div>
                                <div className={styles.heading}>
                                    <h2>Welcome Back</h2>
                                    <h6>Not registered yet?</h6>
                                    <a href="#register" className={styles.toggle}>
                                        Sign up
                                    </a>
                                </div>

                                <div className={''}>
                                    <div className={styles.inputWrap}>
                                        <input
                                            name="phone"
                                            type="text"
                                            minLength={9}
                                            className={styles.inputField}
                                            autoComplete="off"
                                            required
                                        />
                                        <label>Mobile Number</label>
                                    </div>

                                    <div className={styles.inputWrap}>
                                        <input
                                            name="password"
                                            type="password"
                                            minLength={4}
                                            className={styles.inputField}
                                            autoComplete="off"
                                            required
                                        />
                                        <label>Password</label>
                                    </div>

                                    <Button
                                        type="submit"
                                        color={"secondary"}
                                        variant={'solid'}
                                        className={styles.signBtn}
                                        isLoading={isLoggingIn}
                                    >Sign In</Button>

                                    <p className={styles.text}>
                                        Get help
                                        <a href="auth/forgotPassword">Forgotten your password ?</a></p>
                                </div>
                            </form>

                            <form
                                id="register"
                                method="post"
                                action="#"
                                autoComplete="off"
                                className={styles.signUpForm}
                                onSubmit={(e) => (HandleRegister(e))}
                            >
                                <div className={styles.logo}>
                                    {/* <img src="home/assets/images/img/PSIT_Ignitia24.webp" alt="PSIT2022" /> */}
                                </div>

                                <div className={`${styles.heading} mb-2`}>
                                    <h2>Get Started</h2>
                                </div>

                                <div className={'styles.actualForm'}>
                                    <div className={styles.inputWrap}>
                                        <input
                                            name="name"
                                            type="text"
                                            minLength={4}
                                            className={styles.inputField}
                                            autoComplete="off"
                                            required
                                        />
                                        <label>&nbsp;Name</label>
                                    </div>


                                    <div className={styles.inputWrap}>
                                        <input
                                            name="email"
                                            type="email"
                                            className={styles.inputField}
                                            autoComplete="off"
                                            required
                                        />
                                        <label>&nbsp;Email</label>
                                    </div>


                                    {elements}


                                    <div className={`${styles.inputWrap} mb-6`}>
                                        <input
                                            name="password"
                                            type="password"
                                            pattern=".{8,12}"
                                            required
                                            title="8 to 12 characters"
                                            className={styles.inputField}
                                            autoComplete="off"

                                        />
                                        <label>&nbsp;Password</label>
                                    </div>


                                    <div className={`flex flex-row justify-between mb-3`}>
                                        <div className={`flex w-full`}>
                                            <select className={`flex w-full`} name="branch" style={{color: "#000000"}}
                                                    required title="Branch">
                                                <option value="" hidden>Branch</option>
                                                <option value="CSE">CSE</option>
                                                <option value="CS-AI">CS-AI</option>
                                                <option value="CS-AIML">CS-AIML</option>
                                                <option value="CS-IOT">CS-IOT</option>
                                                <option value="CS-DS">CS-DS</option>
                                                <option value="CS-CYS">CS-CYS</option>
                                                <option value="AIDS">AIDS</option>
                                                <option value="AIML">AIML</option>
                                                <option value="IT">IT</option>
                                                <option value="EC">EC</option>
                                                <option value="M.Tech">M.Tech</option>
                                                <option value="B.Pharma">B.Pharma</option>
                                                <option value="D.Pharma">D.Pharma</option>
                                                <option value="M.Pharma">M.Pharma</option>
                                                <option value="MCA">MCA</option>
                                                <option value="BCA">BCA</option>
                                                <option value="MBA">MBA</option>
                                                <option value="BBA">BBA</option>
                                                <option value="Others">Others</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                        <div className={`flex w-full`}>
                                            <select className={`flex w-full`} name="year" style={{color: "#000000"}}
                                                    required title="Year">
                                                <option value="" hidden>Year</option>
                                                <option value="1">I</option>
                                                <option value="2">II</option>
                                                <option value="3">III</option>
                                                <option value="4">IV</option>
                                                {/* Add more options as needed */}
                                            </select>
                                        </div>
                                    </div>


                                    <div className={styles.inputWrap}>
                                        <select name="collName" className={styles.inputField} style={{color: "#000000"}}
                                                required title="College Name">
                                            <option value="" hidden>College Name</option>
                                            <option value="Pranveer Singh Institute of Technology">PSIT</option>
                                            <option value="PSIT College of Higher Edu   cation">PSIT CHE</option>
                                            <option value="Others">Others</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </div>

                                    <div className="g-recaptcha"
                                         data-sitekey={token_reCaptcha}
                                         data-callback="onCAPTCHAVerified"
                                         data-expired-callback="onCAPTCHAExpire"
                                         data-error-callback="onCAPTCHAError"

                                    >
                                    </div>
                                    <h6 className={`text-xs text-gray-600 mb-3`}>Captcha not visible? try refreshing page.</h6>

                                    <div className={`flex justify-center`}>
                                        <Button size={'sm'} type={'submit'} color={'secondary'} variant={'solid'}
                                                isLoading={isSigningUp} isDisabled={isSubmitDisabled}>Send OTP</Button>
                                    </div>

                                </div>

                                <div className={`${styles.heading} flex mt-2`}>
                                    <h6>Already have an account?&nbsp;</h6>
                                    <a href="#login" className={styles.toggle}>
                                        Sign in
                                    </a>
                                </div>
                                <OTP isModelOpen={IsOtpOpen} CloseModel={HandleClosePopup} registerObj={registerObj}
                                     messageId={messageId}/>

                            </form>
                        </div>

                        <div className={styles.carousel}>
                            <div className={styles.imagesWrapper}>
                                <img
                                    src="auth/icon.png"
                                    className={`${styles.image} ${styles.img1} ${styles.show}`}
                                    alt=""
                                />
                            </div>

                            <div className={styles.textSlider}>
                                <div className={styles.textWrap}>
                                    <div className={styles.textGroup}>
                                        <h2>Igniting Legacies Inspiring Generations</h2>
                                    </div>
                                </div>

                                <div className={styles.bullets}>
                                    <span className={styles.active} data-value="1"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div style={{ zIndex: 1000 }}>
                <MouseTrail {...trailProps} />
            </div>
        </div>
    );
};

export default LoginForm;
