import React, { useEffect } from 'react';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { useNavigate } from 'react-router-dom';
import Footer from '../../component/Footer';
import Navbar from '../../component/Navbar';
import Pelajari from '../../component/Pelajari';

export default function Learn() {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      return (window.location.href = '/masuk');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <Pelajari />
      <Footer />
    </>
  );
}
