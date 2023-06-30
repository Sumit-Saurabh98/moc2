import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const Authenticated = useSelector(store=>store.login.loggedIn)
    if(Authenticated){
        return children
    }
    return <Navigate to="/login" />
}

export default ProtectedRoute;