import React, { useEffect } from 'react';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { useNavigate } from 'react-router-dom';
import Footer from '../../component/Footer';
import Koleksi from '../../component/Koleksi';
import Navbar from '../../component/Navbar';

export default function Colection() {
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
      <Koleksi />
      <Footer />
    </>
  );
}
