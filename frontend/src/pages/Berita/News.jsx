import React, { useEffect } from 'react';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { useNavigate } from 'react-router-dom';
import Berita from '../../component/Berita';
import Footer from '../../component/Footer';
import Navbar from '../../component/Navbar';

export default function News() {
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
      <Berita />
      <Footer />
    </>
  );
}
