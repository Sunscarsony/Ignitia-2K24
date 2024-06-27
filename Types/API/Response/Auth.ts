import { HTTP_HEADERS } from "../Status Codes/HTTP_HEADERS";

interface Register {
    error: boolean,
    responseData: string,
    message?: string,
    status_code: HTTP_HEADERS["status_code"]
}
interface Login {
    error: boolean,
    responseData: {
        token: {
            refresh: string,
            access: string,
        },
        msg: string,
        Vote: boolean | null,
    },
    status_code: HTTP_HEADERS["status_code"]
}



interface VoteUserType {
    error: boolean,
    responseData: string,
    status_code: HTTP_HEADERS["status_code"]
}


interface SEND_OTP {
    error: boolean,
    responseData: {
        message_id: string,
        phone_no: string,
    },
    message?: string,
    status_code: HTTP_HEADERS["status_code"]
}

interface VERIFY_OTP {
    error: boolean,
    responseData?: string,
    message?: string,
    status_code: HTTP_HEADERS["status_code"]
}

interface AddContribute {
    error: boolean,
    responseData?: string,
    message?: string,
    status_code: HTTP_HEADERS["status_code"]
}

interface AuthCheckData {
    error: boolean,
    responseData: {
        isAuthenticated: boolean
    },
    message?: string,
    status_code: HTTP_HEADERS["status_code"]
}

interface ProfileData {
    error: boolean,
    responseData: {
        name: string,
        phone_no: string,
        email: string,
        college_name: string,
        roll_number: number,
        branch: string,
        year: number,
        vote: number
    },
    message?: string,
    status_code: HTTP_HEADERS["status_code"]
}

interface Contribution {
    transaction_id: string,
    transaction_amount: number,
    created_at: string,
    is_verified: boolean
}

interface ContributionsData {
    error: boolean,
    responseData: Contribution[],
    message?: string,
    status_code: HTTP_HEADERS["status_code"]
}

export type { VERIFY_OTP, SEND_OTP, Login, HTTP_HEADERS, Register, VoteUserType, AddContribute, AuthCheckData, ProfileData, ContributionsData }