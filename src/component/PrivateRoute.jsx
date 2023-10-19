/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(user){
        return children
    }
    if(loading){
        return <div className="flex justify-cente"><span className="loading loading-spinner loading-lg mx-auto my-auto"></span></div>
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;