import * as actionTypes from './types';
import { ActionType } from '../rootReducer';
import {InitialType} from "./reducers";

const resetState = (): ActionType => ({
    type: actionTypes.RESET_STATE,
});

const updateAccessToken = (accessToken: string): ActionType => ({
    type: actionTypes.UPDATE_ACCESS_TOKEN,
    payload: accessToken,
});
const updateRefreshToken = (refreshToken: string): ActionType => ({
    type: actionTypes.UPDATE_REFRESH_TOKEN,
    payload: refreshToken,
});
const updateUserName = (newState: string): ActionType => ({
    type: actionTypes.UPDATE_USER_NAME,
    payload: newState,
});

const updateUserVote = (newState:boolean|null): ActionType => ({
    type: actionTypes.UPDATE_VOTE_STATUS,
    payload: newState,
});

const authActions = {
    resetState,
    updateAccessToken,
    updateRefreshToken,
    updateUserName,
    updateUserVote
};

export default authActions;
