import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
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
