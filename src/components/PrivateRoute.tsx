import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../state/store.ts";
import React from "react";

function PrivateRoute({ children }: React.PropsWithChildren) {
    const isUserAuth = useSelector((state: RootState) => state.auth.authorized);

    if (!isUserAuth) {
        return <Navigate to={'/login'}/>;
    }

    return children;
}

export default PrivateRoute;