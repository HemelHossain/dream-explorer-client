import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {users, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <h4>Loading...</h4>
    } 
    if(!users){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>;
    }
    return children;
};

export default PrivateRoute;