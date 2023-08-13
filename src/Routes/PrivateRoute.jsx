import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='w-max mx-auto  text-white'>
            <button type="button" class="bg-indigo-500 p-4 font-lg " disabled>
        Processing...
      </button>
        </div>
    }


    if(user){
        return children;
    }

    return  <Navigate to='/login' state={{from: location}}  replace></Navigate>;
};

export default PrivateRoute;