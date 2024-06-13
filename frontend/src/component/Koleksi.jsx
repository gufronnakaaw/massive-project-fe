import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Koleksi() {
  const [activeTab, setActiveTab] = useState('popular');

  const populer = [
    {
      id: 1,
      title: "POHON DAN ANDONG",
      image: 'images/koleksi1.png',
    },
    {
      id: 2,
      title: "KAWUNG DAN TUMPAL",
      image: 'images/koleksi2.png',
    },
    {
      id: 3,
      title: "POTRET DIRI",
      image: 'images/koleksi3.png',
      link: '/koleksi/3',
    },
    {
      id: 4,
      title: "AFANDI KOESOEMA",
      image: 'images/koleksi4.png',
    }
  ]
  const lukisan = [
    {
      id : 1,
      title : 'Potret Diri',
      img :   'images/lukisan1.png',
    },
    {
      id : 2,
      title : 'Barong Bali',
      img : 'images/lukisan2.png',
    },
    {
      id : 3,
      title : 'Kampung Nelayan',
      img : 'images/lukisan3.png',
    },
    {
      id : 4,
      title : 'Title 1',
      img : 'images/lukisan4.png',
    },
    {
      id : 5,
      title : 'Title 2',
      img : 'images/lukisan5.png',
    },
    {
      id : 6,
      title : 'Title3',
      img : 'images/lukisan5.png',
    }
  ]
  const batik = [ 
    {
      id : 1,
      title : 'Hewan Darat dan Udara',
      img :   'images/batik1.png',
    },
    {
      id : 2,
      title : 'Kawung dan Tumpal',
      img :   'images/batik2.png',
    },
    {
      id : 3,
      title : 'Tumbuhan Deret',
      img :   'images/batik3.png',
    },
    {
      id : 4,
      title : 'Title 1',
      img :   'images/batik4.png',
    },
    {
      id : 5,
      title : 'Title 2',
      img :   'images/batik5.png',
    },
    {
      id : 6,
      title : 'Title 3',
      img :   'images/batik6.png',
    },
  ]
  const kerajinan = [
    {
      id : 1,
      title : 'Hewan Darat dan Udara',
      img :   'images/kerajinan1.png',
    },
    {
      id : 2,
      title : 'Kawung dan Tumpal',
      img :   'images/kerajinan2.png',
    },
    {
      id : 3,
      title : 'Tumbuhan Deret',
      img :   'images/kerajinan3.png',
    },
    {
      id : 4,
      title : 'Title 1',
      img :   'images/kerajinan4.png',
    },
    {
      id : 5,
      title : 'Title 2',
      img :   'images/kerajinan5.png',
    },
    {
      id : 6,
      title : 'Title 3',
      img :   'images/kerajinan6.png',
    },
  ]
  const seniman = [
    {
      id : 1,
      title : 'Afandi Koesoema',
      img :   'images/seniman1.png',
      location : 'Indonesia'
    },
    {
      id : 2,
      title : 'Rio Helmi',
      img :   'images/seniman2.png',
      location : 'Indonesia'
    },
    {
      id : 3,
      title : 'Saleh Syarif Bustaman',
      img :   'images/seniman3.png',
      location : 'Indonesia'
    },
    {
      id : 4,
      title : 'Title 1',
      img :   'images/seniman4.png',
      location : 'Indonesia'
    },
    {
      id : 5,
      title : 'Title 2',
      img :   'images/seniman5.png',
      location : 'Indonesia'
    },
    {
      id : 6,
      title : 'Title 3',
      img :   'images/seniman6.png',
      location : 'Indonesia'
    },
  ]

  return (
    <div className='bg-primary w-full'>
      <div className='pt-[170px] pb-[110px]'>
        <div className='font-bold flex justify-between px-28'>
          <h1 className='text-white text-[50px]'>
            Koleksi
          </h1>
          <p className='text-white max-w-xl'>
            Koleksi adalah kumpulan objek atau data dengan tema atau tujuan tertentu, seperti buku-buku di perpustakaan,
            karya seni, data statistik, barang pribadi, desain pakaian, musik, atau dokumen sejarah.
          </p>
        </div>
      </div>
      <div className='px-28'>
        <div className='flex justify-center w-full space-x-4 border-b border-gray-500'>
          <button className={`py-4 px-10 text-[22px] ${activeTab === 'popular' ? 'border-b-2 border-third text-third' : ' text-white'}`} onClick={() => setActiveTab('popular')}>Popular</button>
          <button className={`py-4 px-10 text-[22px] ${activeTab === 'lukisan' ? 'border-b-2 border-third text-third' : ' text-white'}`} onClick={() => setActiveTab('lukisan')}>Lukisan</button>
          <button className={`py-4 px-10 text-[22px] ${activeTab === 'batik' ? 'border-b-2 border-third text-third' : ' text-white'}`} onClick={() => setActiveTab('batik')}>Batik</button>
          <button className={`py-4 px-10 text-[22px] ${activeTab === 'kerajinan' ? ' border-b-2 border-third text-third' : ' text-white'}`} onClick={() => setActiveTab('kerajinan')}>Kerajinan</button>
          <button className={`py-4 px-10 text-[22px] ${activeTab === 'seniman' ? ' border-b-2 border-third text-third' : ' text-white'}`} onClick={() => setActiveTab('seniman')}>Seniman</button>
        </div>
        <div className='mt-10 pb-12 text-white'>
        {activeTab === 'popular' && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]'>
              {populer.map((populer, index) => (
                <div key={index} className='bg-white rounded-xl'>
                  <Link to={populer.link}>
                    <img src={populer.image} alt={populer.title} className='w-full h-full object-cover'/>
                    <div className='py-4 px-4'>
                      <p className='text-black text-center font-medium text-[18px]'>
                        {populer.title}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'lukisan' && 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            {lukisan.map((lukisan, index) => (
              <div key={index} className='rounded-xl bg-white'>
                <div className=''>
                  <img src={lukisan.img} alt={lukisan.img} className='w-full h-full object-cover' style={{height: 460}}/>
                  <div className='py-4 px-4'>
                    <p className='text-black text-center font-medium text-[18px]'>
                      {lukisan.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          }
          {activeTab === 'batik' && 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            {batik.map((batik, index) => (
              <div key={index} className='rounded-xl bg-white'>
                <div className=''>
                  <img src={batik.img} alt={batik.img} className='w-full h-full object-cover' style={{height: 460}}/>
                  <div className='py-4 px-4'>
                    <p className='text-black text-center font-medium text-[18px]'>
                      {batik.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          }
          {activeTab === 'kerajinan' && 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            {kerajinan.map((kerajinan, index) => (
              <div key={index} className='rounded-xl bg-white'>
                <div className=''>
                  <img src={kerajinan.img} alt={kerajinan.img} className='w-full h-full object-cover' style={{height: 460}}/>
                  <div className='py-4 px-4'>
                    <p className='text-black text-center font-medium text-[18px]'>
                      {kerajinan.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          }
          {activeTab === 'seniman' && 
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
           {seniman.map((seniman, index) => (
             <div key={index} className='rounded-xl bg-white'>
               <div className=''>
                 <img src={seniman.img} alt={seniman.img} className='w-full h-full object-cover' style={{height: 460}}/>
                 <div className='py-4 px-4'>
                   <p className='text-black text-center font-medium text-[18px]'>
                     {seniman.title}
                   </p>
                   <p className='text-black text-center font-medium text-[18px]'>
                     {seniman.location}
                   </p>
                 </div>
               </div>
             </div>
           ))}
         </div>
          }
        </div>
      </div>
    </div>
  );
}
