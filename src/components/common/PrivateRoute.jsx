import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? children : <Redirect to="/" />;
};
