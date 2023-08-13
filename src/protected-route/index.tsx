import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({
  isLoggedin,
  children,
}: {
  isLoggedin: any;
  children: React.ReactNode;
}) => {
  if (isLoggedin) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return <Navigate to={'/login'} />;
  }
};

export default ProtectedRoute;
