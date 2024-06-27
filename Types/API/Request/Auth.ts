interface RegisterInput{
    email: string,
    phone_no: string,
    name: string,
    college_name: string,
    roll_number: number,
    course: string,
    branch: string,
    year: number,
    password: string,
    password2: string
    msg_id ?: string,
    otp ?: string
}


interface LoginInput{
    phone_no: string,
    password: string
}

interface VerifyOtpInput{
    msg_id: string,
    otp: string,
}

interface SendOtpInput{
    phone_no: string,
    recaptchaToken : string
}

interface UserAddContributeType{
    transaction_id : string,
    transaction_amount : number,
    email : string
}

export type { LoginInput , RegisterInput  , VerifyOtpInput , SendOtpInput , UserAddContributeType}