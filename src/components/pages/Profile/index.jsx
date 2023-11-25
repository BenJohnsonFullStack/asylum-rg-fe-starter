import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  let history = useHistory();

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    history.push('/');
  }

  return (
    <>
      <h1>Welcome Back!</h1>
      <h3>{user.name}</h3>
      <h3>{user.email}</h3>
    </>
  );
};

export default Profile;
