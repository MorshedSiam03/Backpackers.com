import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if(loading){
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/Login'></Navigate>
};

PrivateRoute.propTypes ={
    children: PropTypes.node
}

export default PrivateRoute;