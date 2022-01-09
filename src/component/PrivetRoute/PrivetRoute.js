import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    //const { children, ...rest } = props;
    const { user } = useAuth();
    let location = useLocation();


  //  return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 user.email ? (
//                     children
//                 ) : (
//                     <Navigate
//                         to={{
//                             pathname: "/login",
//                             state: { from: location }
//                         }}
//                     />
//                 )
//             }
//         />
//     )
// }

if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }else{
    

    return children;
  }

};

export default PrivetRoute;