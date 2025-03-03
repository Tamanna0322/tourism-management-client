import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';

const PrivateRoute = ({children}) => {
  
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }
   
    if(user){
        return children
    }

   

    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>

};


PrivateRoute.propTypes ={
    children: PropTypes.object
}

export default PrivateRoute;