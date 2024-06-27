import * as actionTypes from './types';
import { ActionType } from '../rootReducer';

const resetState = (): ActionType => ({
    type: actionTypes.RESET_STATE,
});

const updateState = (newState: number): ActionType => ({
    type: actionTypes.UPDATE_STATE,
    payload: newState,
});

const countActions = {
    resetState,
    updateState,
};

export default countActions;
