"use client"
import React from 'react';
import {NextUIProvider} from "@nextui-org/react";
import {Provider as StoreProvider} from "react-redux"
import store from "../../Store/store";
import {ToastContainer} from "react-toastify";
import AuthCheckMiddleware from "@/Middleware/AuthCheckMiddleware";
const Provider = ({children}:React.PropsWithChildren) => {
    return (
        <StoreProvider store={store}>
            <AuthCheckMiddleware>
                <ToastContainer />
                <NextUIProvider>
                    {children}
                </NextUIProvider>
            </AuthCheckMiddleware>
        </StoreProvider>
    );
};

export default Provider;
