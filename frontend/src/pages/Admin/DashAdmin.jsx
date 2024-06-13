import React from 'react';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { useNavigate } from 'react-router-dom';
import Admin from '../../component/Admin';
import Navbar from '../../component/NavbarAdmin';

export default function DashAdmin() {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (window.location.href = '/masuk');
  }

  return (
    <>
      <Navbar />
      <Admin />
    </>
  );
}
