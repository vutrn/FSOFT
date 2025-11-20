import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../App";

interface Props {
  isLogin: boolean;
}

const PrivateRouter = () => {
  const {user} = useContext(AuthContext)
  console.log(user.token)
  return <>{user.token ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default PrivateRouter;
