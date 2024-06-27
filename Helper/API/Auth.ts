"use server"

import {
    VERIFY_OTP,
    SEND_OTP,
    Register,
    Login,
    VoteUserType,
    AddContribute,
    AuthCheckData,
    ProfileData,
    ContributionsData,
} from "../../Types/API/Response/Auth"

import axios from "axios"

import {
    LoginInput,
    RegisterInput,
    SendOtpInput,
    UserAddContributeType,
    VerifyOtpInput
} from "../../Types/API/Request/Auth";

async function RegisterUser(Data: RegisterInput): Promise<Register> {
    console.log("[ CALLED ]  : AUTH : RegisterUser")
    try {
        const response: Register = await axios.post(process.env.BACKEND_PATH + "/api/user/register/", Data).then(res => res.data)
        console.log("\n Register User \n ", response);
        console.info("[ RETURN ]  : AUTH : RegisterUser", response)
        return {
            error: response.error,
            responseData: response.responseData,
            status_code: response.status_code
        }
    } catch (e) {
        console.error("[ FAILED ]  : AUTH : RegisterUser", e)
        console.log(e);
        return {
            error: true,
            responseData: "some error occurred",
            status_code: 501
        }
    }
}

async function LoginUser(Data: LoginInput): Promise<Login> {
    console.log("[ CALLED ]  : AUTH : LoginUser")
    try {
        const response: Login = await axios.post(process.env.BACKEND_PATH + "/api/user/login/", Data).then(res => res.data)
        console.info("[ RETURN ]  : AUTH : LoginUser", response)
        return {
            error: response.error,
            responseData: response.responseData,
            status_code: response.status_code
        }
    } catch (e) {
        console.error("[ FAILED ]  : AUTH : LoginUser", e)
        return {
            error: true,
            responseData: {
                token: {
                    refresh: "",
                    access: "",
                },
                msg: "",
                Vote: null,
            },
            status_code: 501
        }
    }
}

async function UserVote(voteId: number, accessToken: string): Promise<VoteUserType> {
    console.log("[ CALLED ]  : AUTH : UserVote")
    try {
        const response: VoteUserType = await axios.post(process.env.BACKEND_PATH + "/api/contribute/vote/", { "vote": voteId }, { headers: { Authorization: `Bearer ${accessToken}` } }).then(res => res.data)
        console.info("[ RETURN ]  : AUTH : UserVote", response)
        return {
            error: response.error,
            responseData: response.responseData,
            status_code: response.status_code
        }
    } catch (e) {
        console.error("[ FAILED ]  : AUTH : UserVote", e)

        return {
            error: true,
            responseData: "",
            status_code: 501
        }
    }
}

async function VerifyOtp(Data: VerifyOtpInput): Promise<VERIFY_OTP> {
    console.log("[ CALLED ]  : AUTH : VerifyOtp")

    try {
        const response: VERIFY_OTP = await axios.post(process.env.BACKEND_PATH + "/api/user/verify_otp/", Data).then(res => res.data)
        console.info("[ RETURN ]  : AUTH : VerifyOtp", response)

        if (response.error) {
            return {
                error: response.error,
                message: response.message,
                status_code: response.status_code
            }
        }
        return {
            error: response.error,
            responseData: response.responseData,
            status_code: response.status_code
        }
    } catch (e) {
        console.error("[ FAILED ]  : AUTH : VerifyOtp", e)
        return {
            error: true,
            responseData: "some error occurred",
            status_code: 501
        }
    }
}

async function SendOtp(Data: SendOtpInput): Promise<SEND_OTP> {
    console.log("[ CALLED ]  : AUTH : SendOtp :",Data)

    try {
        const response: SEND_OTP = await axios.post(process.env.BACKEND_PATH + "/api/user/send_otp/", Data).then(res => res.data)
        console.info("[ RETURN ]  : AUTH : SendOtp", response)

        return {
            error: response.error,
            responseData: response.responseData,
            message: response.message,
            status_code: response.status_code
        }
    } catch (e) {
        console.error("[ FAILED ]  : AUTH : SendOtp", e)

        return {
            error: true,
            responseData: {
                message_id: "",
                phone_no: ""
            },
            status_code: 501
        }
    }
}

async function UserAddContribute(Data: UserAddContributeType, accessToken: string): Promise<AddContribute> {
    console.log("[ CALLED ]  : AUTH : UserAddContribute")

    try {
        const response: AddContribute = await axios.post(process.env.BACKEND_PATH + "/api/contribute/addContribution/", Data, { headers: { Authorization: `Bearer ${accessToken}` } }).then(res => res.data)
        console.info("[ RETURN ]  : AUTH : UserAddContribute", response)

        return {
            error: response.error,
            responseData: response.responseData,
            status_code: response.status_code
        }
    } catch (e) {
        console.error("[ FAILED ]  : AUTH : UserAddContribute", e)

        return {
            error: true,
            responseData: "",
            message: "Internal Server Error",
            status_code: 501
        }
    }
}

async function CheckAuth(accessToken: string): Promise<AuthCheckData> {
    console.log("[ CALLED ]  : AUTH : CheckAuth")

    try {
        const response: AuthCheckData = await axios.get(process.env.BACKEND_PATH + "/api/user/checkauth/", { headers: { Authorization: `Bearer ${accessToken}` } }).then(res => res.data)
        console.info("[ RETURN ]  : AUTH : CheckAuth", response)

        return {
            error: response.error,
            responseData: response.responseData,
            status_code: response.status_code
        }
    } catch (e) {
        console.error("[ FAILED ]  : AUTH : CheckAuth", e)

        return {
            error: true,
            responseData: {
                isAuthenticated: false
            },
            message: "Internal Server Error",
            status_code: 501
        }
    }
}

async function GetProfile(accessToken: string): Promise<ProfileData> {
    console.log("[ CALLED ]  : AUTH : GetProfile")

    try {
        const response: ProfileData = await axios.get(process.env.BACKEND_PATH + "/api/user/profile/", { headers: { Authorization: `Bearer ${accessToken}` } }).then(res => res.data)
        console.info("[ RETURN ]  : AUTH : GetProfile", response)

        return {
            error: response.error,
            responseData: response.responseData,
            status_code: response.status_code
        }
    } catch (e) {
        console.error("[ FAILED ]  : AUTH : GetProfile", e)

        return {
            error: true,
            responseData: {
                name: "",
                phone_no: "",
                email: "",
                college_name: "",
                roll_number: 0,
                branch: "",
                year: 0,
                vote: 0
            },
            message: "Internal Server Error",
            status_code: 501
        }
    }
}

async function GetContributions(accessToken: string): Promise<ContributionsData> {
    console.log("[ CALLED ]  : AUTH : GetContributions")

    try {
        const response: ContributionsData = await axios.get(process.env.BACKEND_PATH + "/api/contribute/getContributions/", { headers: { Authorization: `Bearer ${accessToken}` } }).then(res => res.data)
        console.info("[ RETURN ]  : AUTH : GetContributions", response)

        return {
            error: response.error,
            responseData: response.responseData,
            status_code: response.status_code
        }
    } catch (e) {
        console.error("[ FAILED ]  : AUTH : GetContributions", e)

        return {
            error: true,
            responseData: [],
            message: "Internal Server Error",
            status_code: 501
        }
    }
}

export { SendOtp, VerifyOtp, LoginUser, RegisterUser, UserVote, UserAddContribute, CheckAuth, GetProfile, GetContributions }