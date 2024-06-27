// src/redux/middleware/localStorage.js
"use client"
export const localStorageMiddleware = (store:any) => (next:any) => (action:any) => {
    const result = next(action);
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
    return result;
};
