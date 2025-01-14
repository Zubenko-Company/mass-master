import { useNavigate } from "react-router";
import { useAuth } from "./context/AuthContext.js"
import { ReactNode } from "react";

type GuardRouteprops = {
    children: ReactNode;
}

export const GuardRoute = ({ children }: GuardRouteprops) => {
    const { isAuthenticated } = useAuth();
    console.log(isAuthenticated);
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate('/login')
    };

    console.log('huihuihuihui');

    return children
}