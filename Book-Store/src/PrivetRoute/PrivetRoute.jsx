
import PropTypes from 'prop-types';
import UseAuth from '../Utils/Hook/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} =UseAuth();
    const location = useLocation()
    if(loading){
        return <>
          <div>

            <div className="h-[80vh] flex justify-center items-center">
            <h1 className="">
            <span className="h-[10rem] w-[10rem] loading loading-spinner text-error"></span>
            </h1>
        </div>
        </div>
        </>
    }
    if(user){
        return children
    }

    return <Navigate state={location} to={'/login'}></Navigate>
};

PrivetRoute.propTypes = {
    children: PropTypes.node
};

export default PrivetRoute;