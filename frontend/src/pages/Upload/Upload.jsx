import React, { useEffect } from 'react';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { useNavigate } from 'react-router-dom';
import Footer from '../../component/Footer';
import Formulir from '../../component/Formulir';
import Navbar from '../../component/Navbar';

export default function Upload() {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      return (window.location.href = '/masuk');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Navbar />
      <Formulir />
      <Footer />
    </>
  );
}
