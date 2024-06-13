import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import '../assets/styles/navbar.css';

export default function Navbar() {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState(window.location.pathname);

  const location = useLocation();
  const isActive = location.pathname.startsWith('/koleksi');

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar.classList.add('navbar-shadow');
      } else {
        navbar.classList.remove('navbar-shadow');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveRoute(window.location.pathname);
    };
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <nav className="py-5 w-full items-center bg-primary" id="navbar">
      <div className="flex flex-row justify-center text-white px-28">
        <div className="flex-initial w-60">
          <img src="/images/Logo.png" alt="Logo" width={50} />
        </div>
        <div className="flex-auto flex justify-center items-center gap-5 text-sm">
          <Link to="/koleksi" className={isActive ? 'text-third' : ''}>
            Karya
          </Link>
          <Link
            to="/agenda"
            className={activeRoute === '/agenda' ? 'text-third' : ''}
          >
            Agenda
          </Link>
          <Link
            to="/berita"
            className={activeRoute === '/berita' ? 'text-third' : ''}
          >
            Berita
          </Link>
          <Link
            to="/upload"
            className={activeRoute === '/upload' ? 'text-third' : ''}
          >
            Seniman
          </Link>
        </div>
        <div className="flex-initial w-60 flex items-center gap-6 justify-end">
          {isAuthenticated ? (
            <button
              onClick={() => {
                signOut();
                navigate('/masuk');
              }}
              className="bg-white px-[18px] py-2 rounded-[9px] hover:bg-gray-300 text-black ease-in-out duration-200 font-semibold"
            >
              Keluar
            </button>
          ) : (
            <button
              onClick={() => navigate('/masuk')}
              className="bg-white px-[18px] py-2 rounded-[9px] hover:bg-gray-300 text-black ease-in-out duration-200 font-semibold"
            >
              Masuk
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
