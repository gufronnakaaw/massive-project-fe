import React, { useEffect, useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import '../assets/styles/formulir.css';

export default function Formulir() {
  const auth = useAuthUser();

  const [jenisKarya, setJenisKarya] = useState([]);

  useEffect(() => {
    getJenisKarya();

    async function getJenisKarya() {
      try {
        const response = await fetch(
          'http://localhost:7539/admin/jenis-karya',
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );

        const result = await response.json();

        setJenisKarya(result.karya);
      } catch (error) {
        alert('terjadi kesalahan saat mengambil data karya');
      }
    }
  }, [auth]);
  return (
    <>
      <div className="bg-primary w-full">
        <div className="pt-[170px] pb-[110px]">
          <div className="text-4xl text-white text-center font-semibold mb-16">
            Formulir Pengajuan Upload Karya
          </div>
          <div className="grid grid-cols-2 container">
            <div className="px-20">
              <div className="sm:col-span-4">
                <div className="mb-7">
                  <input
                    id=""
                    name=""
                    type="text"
                    placeholder="Nama Lengkap"
                    autoComplete=""
                    className="input-form w-full rounded-md py-[12px] px-[20px] text-white"
                  />
                </div>
                <div className="mb-7">
                  <input
                    id=""
                    name=""
                    type="email"
                    placeholder="Email"
                    autoComplete=""
                    className="input-form w-full rounded-md py-[12px] px-[20px] text-white"
                  />
                </div>
                <div className="mb-7">
                  <select
                    id="countries"
                    className="input-form w-full rounded-md py-[12px] px-[22px] text-white bg-black"
                  >
                    <option value="-" selected>
                      Pilih Jenis Karya
                    </option>
                    {jenisKarya.map((item) => {
                      return (
                        <option key={item.id} value={item.id}>
                          {item.jenis}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-7">
                  <textarea
                    id=""
                    name=""
                    type="text"
                    placeholder="Alamat"
                    autoComplete=""
                    className="input-form w-full rounded-md py-[12px] px-[20px] text-white"
                  />
                </div>
                <div className="mb-7">
                  <input
                    id=""
                    name=""
                    type="text"
                    placeholder="Judul Karya"
                    autoComplete=""
                    className="input-form w-full rounded-md py-[12px] px-[20px] text-white"
                  />
                </div>
                <div className="">
                  <textarea
                    id=""
                    name=""
                    type="text"
                    placeholder="Deskripsi Karya"
                    autoComplete=""
                    className="input-form w-full rounded-md py-[12px] px-[20px] text-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white p-20 text-center rounded-lg">
                <div className="grid justify-center items-end text-4xl mb-2">
                  <img
                    src="images/upload-icon.png"
                    alt=""
                    className="w-[5rem]"
                  />
                </div>
                <div className="text-xl font-semibold mb-2">Drag&Drop</div>
                <div className="mb-4">Unggah hanya jpg, png atau jpeg</div>
                <div className="flex justify-center">
                  <label htmlFor="file-upload">
                    <span>
                      <div className="flex items-center justify-center border-2 border-upload rounded-md h-10 w-44 cursor-pointer font-semibold text-upload transition hover:bg-upload hover:text-white">
                        Masukkan Karya
                      </div>
                    </span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
