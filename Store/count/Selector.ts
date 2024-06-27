// src/selectors/countSelectors.ts

import { useSelector } from 'react-redux';
import { RootState } from '../rootReducer';

// Custom hook for the current value selector
const useCurrentSelector = () => {
    return useSelector((state: RootState) => state.count.current);
};

// Custom hook for the loading state selector
const useIsLoadingSelector = () => {
    return useSelector((state: RootState) => state.count.isLoading);
};

// Custom hook for the success state selector
const useIsSuccessSelector = () => {
    return useSelector((state: RootState) => state.count.isSuccess);
};

const countSelectors = {
    useCurrentSelector,
    useIsLoadingSelector,
    useIsSuccessSelector,
}

export default countSelectors;