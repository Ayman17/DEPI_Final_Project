import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../../firebase/firebase';
import { useNavigate, useLocation } from 'react-router-dom';


const SignOut = ({ setDDMobOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        setDDMobOpen(false);
        if (location.pathname.contains('profile')) {
          navigate('/');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <p className="block pt-3" onClick={onSignOut}>
        Sign Out
      </p>
    </>
  );
};

export default SignOut;
