import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import Spline from '@splinetool/react-spline';

export default function DetailKoleksi() {
    const [activeTab, setActiveTab] = useState('popular');
    return (
        <>
            <div className="container py-36 px-20">
                <div className="flex justify-start items-center gap-10">
                    <div className="flex-1">
                        <div>
                            <Link to='/koleksi' className='border h-10 w-10 rounded-full flex justify-center items-center'>
                                <FaArrowLeft className='text-white' />
                            </Link>
                        </div>
                    </div>
                    <div className='flex-1 text-center text-white text-3xl font-semibold'>
                        Lukisan Potret Diri
                    </div>
                    <div className='flex-1'></div>
                </div>
                <div className='flex justify-center my-14'>
                    <img src="/images/koleksi3.png" alt="" />
                </div>
                <hr className='my-6' />
                <div className='text-white text-justify'>
                    "Motif yang paling aku hafal dan paling aku senangi ialah rupaku dhewe yang elek, mirip Sukrasana ini”. Kata Affandi suatu kali sambil terkekeh. Namun demikian setiap kali hendak melukis wajahnya, ia masih juga mencontek mukanya itu dari cermin. Pasalnya, pelukis ekspresionis yang mengaku humanis ini merasa, hanya bisa melukis langsung di depan motifnya, termasuk dalam melukis wajah sendiri. Walau tema potret diri ini ia ulang-ulang hingga
                </div>
                <div className='my-6 text-white text-justify'>
                    <Spline scene="https://prod.spline.design/VemyCz-71y5IsVfB/scene.splinecode" />
                </div>
                <div className='my-6 text-white text-justify'>
                    entah sampai berapa puluh kali, namun Ajip Rosidi menilai dalam setiap lukisan Affandi menunjukkan passi yang tetap, gairah yang sama besar. Sementara itu Umar Kayam yang menjuluki Affandi sebagai “Maestro plototan" ini pernah menulis di Kompas bahwa potret dirinya adalah potret orang tua sederhana, tidak ngganteng, tidak bicara apa-apa kecuali matanya yang sipit itu nampak terus bertanya.
                </div>
                <div className='my-6 text-white text-justify'>
                    Ada catatan menarik yang Affandi tulis dengan tangan tentang salah satu lukisan potret dirinya. Pada lukisan wajah yang berjudul Dongkol buatan tahun 1946 yang sekarang dikoleksi oleh Museum Amsterdam, ia menulis dengan ejaan lama seperti ini pernah terjadi, bahwa saja beberapa bulan tidak bisa melukis walaupun tiap pagi saja pergi untuk melukis. Pada suatu hari saja, pulang ke rumah dengan tangan hampa, tidak dapat lukisan. Merasa marah dongkol, sekonjong-konjong lihat dalam katja muka saja sendiri dengan ekspresi dongkol ini. Itu waktu djuga lukisan dibikin. Aneh berbulan-bulan tidak dapat motief. Sekonong motief dekat sekali, muka sendiri.
                </div>
                <hr className='mt-16 mb-6' />
                <div className='text-white'>
                    <div className="text-white font-semibold text-xl mb-4">
                        Beri Komentar
                    </div>
                    <div className='bg-sixth p-10 rounded-lg'>
                        <div className="flex gap-10 items-center">
                            <div className="flex-none">
                                <img src="/images/user-com.png" alt="" className='rounded-full w-16 h-16' />
                            </div>
                            <div className="flex-auto">
                                <div className="flex gap-7 mb-5">
                                    <div className="flex-none">
                                        1 Komentar
                                    </div>
                                    <div className="flex-none">
                                        Rio Ambraham
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <input type="text" name="comment" id="commet" placeholder='Masukkan komentar Anda' className='bg-transparent w-full p-3 border-white border-2 rounded-lg transition focus:border-third focus:border-2 outline-none' />
                                </div>
                                <div>
                                    <button type='submit' className='border-2 px-6 py-2 rounded-md'>Kirim</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
