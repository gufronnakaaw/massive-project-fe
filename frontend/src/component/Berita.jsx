import React, { useEffect, useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { Link } from 'react-router-dom';

export default function App() {
  const auth = useAuthUser();
  const isAuthenticated = useIsAuthenticated();

  const [berita, setBerita] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      getBerita();
    }

    async function getBerita() {
      try {
        const response = await fetch(
          'http://localhost:7539/admin/daftar-berita',
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
  }, [auth, isAuthenticated]);

  return (
    <div className="bg-primary w-full min-h-screen px-20 pt-5 pb-[72px]">
      <div className="p-4 ">
        <div className="px-[100px] mt-[130px]">
          <h1 className="text-white text-[40px] ">Kabar Terbaru</h1>
          <div className="flex gap-14">
            {/* <div className="max-w-72">
              <img src="images/Beritaimg1.png" />
              <h3 className="text-white mt-5 font-bold text-xl">
                Pertunjukan Wayang Orang Berjudul ”Pandu Dewanata”
              </h3>
              <p className="text-base text-white mt-3 text-justify">
                Berkisah tentang Pandhu Dewanata yang memiliki permaisuri Dewi
                Kunthi dan Dewi Madrim.{' '}
                <span className="text-[10px] text-[#999999]">
                  12 hari yang lalu
                </span>
              </p>
              <div className="flex gap-3 items-center mt-5 mb-3">
                <img
                  src="images/profil1.jpg"
                  className="rounded-full w-10 h-10"
                />
                <div className="text-white">
                  <p className="text-xs">Khairunnisa Mukinin</p>
                  <p className="text-[10px]">Detik.com</p>
                </div>
              </div>
              <svg
                width="289"
                height="2"
                viewBox="0 0 289 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="1" x2="289" y2="1" stroke="#787777" strokeWidth="2" />
              </svg>
              <div className="text-white">
                <h1 className="text-2xl font-medium mb-6 mt-[14px]">
                  Photography
                </h1>
                <p className="text-base font-medium text-justify">
                  Sang seniman di balik terciptanya lukisan tersebut yakni Age
                  Airlangga yang akrab dipanggil Tutu. Untuk meriahkan pameran
                  GBK Unfolds, Tutu memberikan karya terbaiknya yang ia lukis
                  pada tahun 2024.
                </p>
              </div>
            </div> */}
            {berita.map((item) => {
              return (
                <Link to={`/news?id=${item.id}`} key={item.id}>
                  <div className="text-white max-w-xl">
                    <img src={`http://localhost:7539/berita/${item.img}`} />
                    <h2 className="text-white text-2xl font-semibold text-left mt-[14px] mb-[42px]">
                      {item.judul}
                    </h2>
                  </div>
                </Link>
              );
            })}
            {/* <div className="max-w-72">
              <img src="images/Beritaimg1.png" />
              <h3 className="text-white mt-5 font-bold text-xl">
                Pertunjukan Wayang Orang Berjudul ”Pandu Dewanata”
              </h3>
              <p className="text-base text-white mt-3 text-justify">
                Berkisah tentang Pandhu Dewanata yang memiliki permaisuri Dewi
                Kunthi dan Dewi Madrim.{' '}
                <span className="text-[10px] text-[#999999]">
                  12 hari yang lalu
                </span>
              </p>
              <div className="flex gap-3 items-center mt-5 mb-3">
                <img
                  src="images/profil1.jpg"
                  className="rounded-full w-10 h-10"
                />
                <div className="text-white">
                  <p className="text-xs">Khairunnisa Mukinin</p>
                  <p className="text-[10px]">Detik.com</p>
                </div>
              </div>
              <svg
                width="289"
                height="2"
                viewBox="0 0 289 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="1" x2="289" y2="1" stroke="#787777" strokeWidth="2" />
              </svg>
              <div className="text-white">
                <h1 className="text-2xl font-medium mb-6 mt-[14px]">
                  Photography
                </h1>
                <p className="text-base font-medium text-justify">
                  Sang seniman di balik terciptanya lukisan tersebut yakni Age
                  Airlangga yang akrab dipanggil Tutu. Untuk meriahkan pameran
                  GBK Unfolds, Tutu memberikan karya terbaiknya yang ia lukis
                  pada tahun 2024.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
