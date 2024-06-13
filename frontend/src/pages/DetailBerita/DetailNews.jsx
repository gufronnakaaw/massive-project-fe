import React, { useEffect, useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { useLocation } from 'react-router-dom';
import DetailBerita from '../../component/DetailBerita';
import Footer from '../../component/Footer';
import Navbar from '../../component/Navbar';

export default function DetailNews() {
  const auth = useAuthUser();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const [berita, setBerita] = useState({});

  useEffect(() => {
    if (id) {
      getBerita();
    }

    async function getBerita() {
      try {
        const response = await fetch(
          'http://localhost:7539/admin/daftar-berita/' + id,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );

        const result = await response.json();

        setBerita(result.berita);
      } catch (error) {
        alert('terjadi kesalahan saat mengambil data berita');
      }
    }
  }, [id, auth]);

  return (
    <>
      <Navbar />
      <DetailBerita {...berita[0]} />
      <Footer />
    </>
  );
}
