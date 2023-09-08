/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent: any) => {
    return (props: any) => {
        const navigate = useNavigate();
        const accessToken = localStorage.getItem("token");
        if (!accessToken) {
            navigate("/store/login");
            return null;
        }
        return <WrappedComponent {...props}/>;
    };
};

export default withAuth;