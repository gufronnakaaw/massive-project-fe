import React, { useEffect, useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { FaSearch } from 'react-icons/fa';

export default function Admin() {
  const auth = useAuthUser();
  const isAuthenticated = useIsAuthenticated();

  const navigate = (url) => {
    window.location.href = url;
  };

  const [koleksi, setKoleksi] = useState([]);
  const [search, setSearch] = useState('');

  // ketika komponen terpasang
  // hit api
  useEffect(() => {
    if (isAuthenticated) {
      getKoleksi();
    }

    async function getKoleksi() {
      try {
        const response = await fetch('http://localhost:7539/admin/koleksi', {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });

        const result = await response.json();

        setKoleksi(result.karya);
      } catch (error) {
        alert('terjadi kesalahan saat mengambil data koleksi');
      }
    }
  }, [auth, isAuthenticated]);

  const filterSearch = koleksi.filter((item) => {
    return (
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.judul_karya.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="px-28">
      <div className="text-white mt-10 text-[45px] font-bold">Admin</div>
      <div className="relative mt-4">
        <input
          type="search"
          placeholder="Cari nama atau email atau jenis karya"
          className="rounded-lg text-xs lg:text-xl pl-4 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-500" />
        </div>
      </div>
      <div className="bg-white rounded-sm mt-6 p-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jenis Karya
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Alamat
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Judul Karya
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filterSearch.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <img
                      src="images/user-com.png"
                      className="rounded-full w-10 h-10"
                      alt="User"
                    />
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">{item.nama}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{item.email}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {!item.jenis ? '-' : item.jenis}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {!item.alamat ? '-' : item.alamat}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {!item.judul_karya ? '-' : item.judul_karya}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {!item.status ? '-' : item.status}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <button
                      onClick={() => navigate('/masuk')}
                      className="bg-white px-[18px] py-2 rounded-[9px] hover:bg-gray-300 text-black border-2 border-black ease-in-out duration-200 font-semibold"
                    >
                      buka
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
