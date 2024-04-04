import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';
const PrivetRoute1 = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    if (loding) {
        return <span className="loading loading-infinity loading-lg text-white"></span>
    }
    if (user) {
        return children
    }
    
    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute1;
PrivetRoute1.propTypes = {
    children: PropTypes.node
}