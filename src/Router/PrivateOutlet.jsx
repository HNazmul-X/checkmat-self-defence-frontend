import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { userAuthToken } from '../Util/BaseInfo';

const PrivateOutlet = () => {
    const {user} = useContext(UserContext)
    const location = useLocation()

    if(user.token===userAuthToken){
        return <Outlet/>
    } else{
      return  <Navigate to={"/login"} state={{from:location}}/>
    }
};

export default PrivateOutlet;