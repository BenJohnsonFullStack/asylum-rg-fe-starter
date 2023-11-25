import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import Button from '../common/Button';
import { useAuth0 } from '@auth0/auth0-react';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const logoutWithRedirect = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/" style={{ color: '#E2F0F7' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7' }}>
          Graphs
        </Link>
        {!isAuthenticated ? (
          <Button
            buttonText="Log In"
            isDisabled={false}
            handleClick={loginWithRedirect}
          />
        ) : (
          <>
            <Link to="/profile" style={{ color: '#E2F0F7' }}>
              My Profile
            </Link>
            <Button
              buttonText="Log Out"
              isDisabled={false}
              handleClick={logoutWithRedirect}
            />
          </>
        )}
      </div>
    </div>
  );
}

export { HeaderContent };
