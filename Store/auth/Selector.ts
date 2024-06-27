// src/selectors/countSelectors.ts

import { useSelector } from 'react-redux';
import { RootState } from '../rootReducer';

// Custom hook for the loading state selector
const IsLoading = () => {
    return useSelector((state: RootState) => state.auth.isLoading);
};
const IsError = () => {
    return useSelector((state: RootState) => state.auth.isError);
};
const IsFound = () => {
    return useSelector((state: RootState) => state.auth.isFound);
};
const Username = () => {
    return useSelector((state: RootState) => state.auth.username);
};
const VoteStatus = () => {
    return useSelector((state: RootState) => state.auth.voteStatus);
};

const RefreshToken = () => {
    return useSelector((state: RootState) => state.auth.refreshToken);
};

const AccessToken = () => {
    return useSelector((state: RootState) => state.auth.accessToken);
};

const authSelectors = {
    IsError,
    IsFound,
    IsLoading,
    Username,
    VoteStatus,
    RefreshToken,
    AccessToken
}

export default authSelectors;