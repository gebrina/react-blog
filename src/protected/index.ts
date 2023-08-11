import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
type ProtectedRoute = {
  isLoggedin: boolean;
  children: React.ReactNode;
};

export const ProjectedRoute: FC<ProtectedRoute> = ({
  children,
  isLoggedin,
}) => {
  const navigate = useNavigate();
  if (isLoggedin) return children;
  navigate('/');
};
