import React, { useState } from 'react';
import BackgroundAgenda from '../../public/images/Agenda.png';
import Galeri1 from '../../public/images/GaleriAgenda.jpg';

const date15 = [
  {
    id: 1,
    time: '12.00',
    title: 'Pembukaan acara seni',
    desc: 'Mempersembahkan karya seni',
    name: 'I Wayan Nurman & Agung Sejati',
    location: 'Gedung Grahadi lt.5 Surabaya',
  },
  {
    id: 2,
    time: '13.10',
    title: 'Kreasi Seni Bersama',
    desc: 'Melukis batik bersama',
    name: 'Seniman Se-jawa Timur',
    location: 'Gedung Grahadi lt.5 Surabaya',
  },
  {
    id: 3,
    time: '15.17',
    title: 'Pemberian penghargaan',
    desc: 'Oleh Walikota Surabaya untuk seniman',
    name: 'Walikota Surabaya',
    location: 'Gedung Grahadi lt.5 Surabaya',
  },
];

export default function Agenda() {
  const [activeTab, setActiveTab] = useState('15');
  return (
    <div className="pt-[170px] pb-[110px] px-28">
      <div className="relative w-full flex justify-center -z-50">
        <img alt="" src={BackgroundAgenda} />
      </div>
      <div className="absolute top-52 right-72 -z-50">
        <h1 className="text-white text-xl">Desember’15, 2024</h1>
        <p className="text-white text-sm">12.00 - 17.00 wib</p>
        <h2 className="text-white text-[32px] max-w-md">
          Pameran Seni Kriya Lukis Seluruh Seniman Jawa Timur
        </h2>
        <p className="text-white text-sm">Gedung Grahadi lt.5 Surabaya</p>
      </div>
      <div className="flex gap-5 mt-7 px-12">
        <button
          className={`p-2 text-[64px] ${
            activeTab === '14' ? 'p-2 bg-third text-black' : 'text-white'
          }`}
          onClick={() => setActiveTab('14')}
        >
          14
        </button>
        <button
          className={`p-2 text-[64px] ${
            activeTab === '15' ? 'p-2 bg-third text-black' : 'text-white'
          }`}
          onClick={() => setActiveTab('15')}
        >
          15
        </button>
        <button
          className={`p-2 text-[64px] ${
            activeTab === '16' ? 'p-2 bg-third text-black' : 'text-white'
          }`}
          onClick={() => setActiveTab('16')}
        >
          16
        </button>
        <button
          className={`p-2 text-[64px] ${
            activeTab === '17' ? 'p-2 bg-third text-black' : 'text-white'
          }`}
          onClick={() => setActiveTab('17')}
        >
          17
        </button>
        <button
          className={`p-2 text-[64px] ${
            activeTab === '18' ? 'p-2 bg-third text-black' : 'text-white'
          }`}
          onClick={() => setActiveTab('18')}
        >
          18
        </button>
        <button
          className={`p-2 text-[64px] ${
            activeTab === '19' ? 'p-2 bg-third text-black' : 'text-white'
          }`}
          onClick={() => setActiveTab('19')}
        >
          19
        </button>
        <button
          className={`p-2 text-[64px] ${
            activeTab === '20' ? 'p-2 bg-third text-black' : 'text-white'
          }`}
          onClick={() => setActiveTab('20')}
        >
          20
        </button>
        <button
          className={`p-2 text-[64px] ${
            activeTab === '21' ? 'p-2 bg-third text-black' : 'text-white'
          }`}
          onClick={() => setActiveTab('21')}
        >
          21
        </button>
        <button
          className={`p-2 text-[64px] ${
            activeTab === '22' ? 'p-2 bg-third text-black' : 'text-white'
          }`}
          onClick={() => setActiveTab('22')}
        >
          22
        </button>
      </div>
      <div>
        {activeTab === '15' && (
          <div className="items-center">
            <div className="grid grid-cols-3 gap-4 items-start mt-5">
              <div className="col-span-2">
                <h2 className="text-white text-[40px] font-medium">
                  November 15’23
                </h2>
                {date15.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#333333] mt-4 rounded-xl text-white"
                  >
                    <div className="pl-5 flex items-center justify-between">
                      <p className="w-20">{item.time}</p>
                      <div className="flex-grow px-5 flex flex-col justify-center">
                        <div className="flex flex-col justify-center p-4">
                          <p className="font-bold">{item.title}</p>
                          <p>{item.desc}</p>
                          <p>{item.name}</p>
                        </div>
                      </div>
                      <div className="bg-[#303030] p-10 rounded-r-xl flex items-center gap-4">
                        <svg
                          width="17"
                          height="27"
                          viewBox="0 0 17 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.66066 11.6953C5.66066 12.759 5.95528 13.7792 6.4797 14.5313C7.00413 15.2835 7.7154 15.7061 8.45705 15.7061C9.1987 15.7061 9.90998 15.2835 10.4344 14.5313C10.9588 13.7792 11.2534 12.759 11.2534 11.6953C11.2534 10.6316 10.9588 9.61145 10.4344 8.85929C9.90998 8.10713 9.1987 7.68457 8.45705 7.68457C7.7154 7.68457 7.00413 8.10713 6.4797 8.85929C5.95528 9.61145 5.66066 10.6316 5.66066 11.6953Z"
                            stroke="white"
                            strokeWidth="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.7301 19.2578L9.77509 24.9304C9.42553 25.4312 8.95163 25.7126 8.45752 25.7126C7.96341 25.7126 7.48952 25.4312 7.13995 24.9304L3.18399 19.2578C2.14114 17.7621 1.43096 15.8563 1.14326 13.7817C0.85556 11.707 1.00326 9.55655 1.56767 7.60227C2.13209 5.64799 3.08788 3.97764 4.31418 2.80245C5.54048 1.62726 6.98221 1 8.45706 1C9.93191 1 11.3736 1.62726 12.5999 2.80245C13.8262 3.97764 14.782 5.64799 15.3464 7.60227C15.9109 9.55655 16.0586 11.707 15.7709 13.7817C15.4831 15.8563 14.773 17.7621 13.7301 19.2578Z"
                            stroke="white"
                            strokeWidth="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        {item.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white text-[40px] mb-4">Galeri</h2>
                <img
                  className="rounded-xl w-[335px]"
                  src={Galeri1}
                  alt="Galeri"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
