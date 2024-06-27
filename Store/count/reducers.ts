import * as actionTypes from './types';
import {ActionType} from "../rootReducer";

const INITIAL_STATE = {
    current: 0,
    isLoading: false,
    isSuccess: false,
};


const CountReducer = (state = INITIAL_STATE, action:ActionType) => {
    const { payload } = action;
    switch (action.type) {
        case actionTypes.RESET_STATE:
            return INITIAL_STATE;
        case actionTypes.UPDATE_STATE:
            return {
                ...state,
                current: payload
            };
        default:
            return state;
    }
};

export default CountReducer;
