"use server"

import axios from "axios";
import {HTTP_HEADERS} from "../../Types/API/Status Codes/HTTP_HEADERS";

interface GetVoteReturn {
    error: boolean,
    responseData: {
        "pool_id": number,
        "frequency": number,
        "percentage": number,
    }[],
    message?: string,
    status_code: HTTP_HEADERS["status_code"]
}

async function GetVotes(): Promise<GetVoteReturn> {
    console.log("[ CALLED ]  : AUTH : GetVotes")

    try {
        const response: GetVoteReturn = await axios.get(process.env.BACKEND_PATH + "/api/contribute/getVotes/").then(res => res.data)
        console.info("[ RETURN ]  : AUTH : GetVotes", response)

        return {
            error: response.error,
            responseData: response.responseData,
            status_code: response.status_code
        }
    } catch (e) {
        console.error("[ FAILED ]  : AUTH : GetVotes", e)

        return {
            error: true,
            responseData: [],
            message: "Internal Server Error",
            status_code: 501
        }
    }
}

export type { GetVoteReturn }
export { GetVotes }