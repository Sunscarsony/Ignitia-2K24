import * as actionTypes from './types';
import {ActionType} from "../rootReducer";

export type InitialType = {
    username ?: string,
    voteStatus ?: boolean | null,
    accessToken ?: string,
    refreshToken ?: string
    isLoading ?: boolean,
    isFound ?: boolean,
    isError ?: boolean,
}

const INITIAL_STATE : InitialType = {
    username : undefined,
    accessToken : undefined,
    refreshToken : undefined,
    voteStatus : null,
    isLoading : false,
    isFound : false,
    isError : false,
};


const AuthReducer = (state = INITIAL_STATE, action:ActionType) => {
    const { payload } = action;
    switch (action.type) {
        case actionTypes.RESET_STATE:
            return INITIAL_STATE;
        case actionTypes.UPDATE_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: payload
            };
        case actionTypes.UPDATE_REFRESH_TOKEN:
            return {
                ...state,
                refreshToken: payload
            };

        case actionTypes.UPDATE_VOTE_STATUS:
            return {
                ...state,
                voteStatus: payload
            };
        case actionTypes.UPDATE_USER_NAME:
            return {
                ...state,
                username: payload
            };
        default:
            return state;
    }
};

export default AuthReducer;
