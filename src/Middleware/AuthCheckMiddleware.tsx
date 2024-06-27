"use client"
import { PropsWithChildren, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import authSelectors from "../../Store/auth/Selector";
import { useDispatch } from "react-redux";
import authActions from "../../Store/auth/actions";
import { CheckAuth } from "../../Helper/API/Auth";

const AuthCheckMiddleware = ({ children }: PropsWithChildren) => {
    const router = useRouter();
    const accessToken = authSelectors.AccessToken();
    const dispatch = useDispatch();
    useEffect(() => {
        if (typeof accessToken === "string") {
            const getUserData = async () => {
                const res = await CheckAuth(accessToken)
                if (res.error) {
                    dispatch(authActions.resetState() as any);
                }
            }
            getUserData();
        }
    }, [accessToken]);
    return children
};

export default AuthCheckMiddleware;
