import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function DetailBerita(props) {
  return (
    <div className="bg-primary py-[135px] text-white px-28">
      <div>
        <Link
          to="/berita"
          className="border h-10 w-10 rounded-full flex justify-center items-center"
        >
          <FaArrowLeft className="text-white" />
        </Link>
      </div>
      <div className="flex gap-9 mt-6">
        <div className="w-[550px] h-[500px">
          <img
            src={props.img ? `http://localhost:7539/berita/${props.img}` : ''}
          />
        </div>
        <div className="w-[754px] my-auto">
          <h1 className="font-semibold text-[32px]">{props.judul}</h1>
          <h2 className="text-xl mt-[14px] text-justify">{props.deskripsi}</h2>
          {/* <p className="text-xl mt-[14px] text-justify">
            Naskah Dukun-Dukunan diambil dari karya Moliere yang diadaptasi oleh
            Puthut Bukhori. Pertunjukan ini berkisah tentang seorang ayah dan
            anak yang sering beradu argumen karena si ayah selalu saja bersantai
            setiap harinya, karena tak kunjung mempunyai pekerjaan. Padahal sang
            anak telah membanting tulang untuk menyambung hidup.
          </p> */}
        </div>
      </div>
      <div className="mt-16 text-xl text-justify">
        {/* <p>
        Si anak yang sudah lelah dengan kelakuan ayahnya mendapatkan akal ketika datang seseorang menanyakan alamat seorang dukun sakti kepadanya. Ide anaknya membuat sang ayah bersandiwara menjadi dukun sakti yang diminta oleh orang tersebut untuk menyembuhkan penyakit anak majikannya. Saat tiba di rumah majikan, bagai dukun sakti, sang ayah mengeluarkan jurus-jurus yang dianggap sukar dijangkau oleh kemampuan manusia biasa. Berbagai adegan kocak dan satir mewarnai sandiwara sang ayah. Akhirnya terkuak, bahwa anak sang majikan tidak sakit sungguhan. Dia pura-pura sakit karena berusaha menolak rencana orang tuanya yang memaksanya untuk melanjutkan sekolah yang tidak sesuai dengan yang diinginkannya.
Semoga kegiatan ini mampu memberikan inspirasi kepada masyarakat terutama generasi muda untuk terus berkarya serta meningkatkan rasa cinta dan kebanggaan sebagai bangsa Indonesia. Mencintai budaya adalah wujud rasa bangga dan cinta kita terhadap Indonesia, karena yang menyatukan bangsa adalah budaya. Cinta Budaya, Cinta Indonesia.
Artikel Terkait
        </p> */}
      </div>
    </div>
  );
}
