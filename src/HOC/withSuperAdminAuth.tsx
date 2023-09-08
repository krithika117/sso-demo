/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt_decode from "jwt-decode";
import { SD_ROLES } from "../utility/SD";
import {useNavigate} from "react-router-dom";

const withAdminAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem("token") ?? "";

    if (accessToken) {
      const decode: {
        role: string;
      } = jwt_decode(accessToken);

      if (decode.role !== SD_ROLES.SUPERADMIN) {
        navigate("/store/forbidden");
        return null;
      }
    } else {
      navigate("/store/login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAdminAuth;