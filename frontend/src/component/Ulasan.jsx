import React, { useState, useEffect } from 'react';
import Fotoulasan from '../../public/images/Ulasan.png';
import ulasan1 from '../../public/images/lukisan1.png';
import ulasan2 from '../../public/images/lukisan2.png';
import User1 from '../../public/images/user1.png';
import User2 from '../../public/images/user2.png';
import User3 from '../../public/images/user3.png';
import Fotoulasan2 from '../../public/images/batik1.png';

const karya = [
  
    {
        id: 1,
        image: ulasan1,
        Type: 'Lukisan',
        Title: 'Potret Diri',
    },
    {
        id: 2,
        image: ulasan2,
        Type: 'Lukisan',
        Title: 'Potret Diri',
    },
];

const testimoni = [
    {
        id: 1,
        comment: 'Lukisan ini memiliki banyak teori makna. Namun yang pasti lukisan ini menggambarkan perasaan sang pelukis yang diselimuti rasa cemas yang sulit untuk dituangkan.',
        image: User1,
        name: 'Viezh Robert',
    },
    {
        id: 2,
        comment: 'Lukisan ini menggunakan berbagai media seperti cat poster, serbuk, dan cat minyak. Penggunaan dari bahan mix media bertujuan untuk bisa memunculkan kesan yang ramai atau meriah, tetap berwarna namun tidak monoton.',
        image: User2,
        name: 'Audry Ayu',
    },
    {
        id: 3,
        comment: 'Terkait dengan konsepnya, seniman ingin menunjukan perasaan yang dirasakan saat melihat bunga. Begitu berwarna dan beragam semuanya tertuang dalam media lukisan tersebut.',
        image: User3,
        name: 'Hitsed Ryan',
    },
    {
        id: 4,
        comment: 'Detail rumit dan warna cerah lukisan Barong Bali ini menghidupkan semangat budaya Bali. Karya yang memukau dan penuh makna',
        image: User1,
        name: 'Viezh Robert',
    },
    {
        id: 5,
        comment: 'Lukisan Barong Bali ini menonjol dengan detail rumit dan warna cerah, menggambarkan semangat budaya Bali. Elemen-elemen hidup mencerminkan tradisi dan kepercayaan, membuat Barong terlihat gagah dan penuh karakter. Karya ini memukau dan bermakna',
        image: User2,
        name: 'Audry Ayu',
    },
    {
        id: 6,
        comment: 'Lukisan Barong yang hidup dengan detail ukiran dan permainan warna. Indah secara visual dan kaya nilai budaya',
        image: User3,
        name: 'Hitsed Ryan',
    },
];

export default function Ulasan() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % karya.length);
        }, 3000);

        const testimonialInterval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) => (prevIndex + 3) % testimoni.length);
        }, 3000);

        return () => {
            clearInterval(imageInterval);
            clearInterval(testimonialInterval);
        };
    }, []);

    const getNextTestimonials = (startIndex, count) => {
        const endIndex = (startIndex + count) % testimoni.length;
        if (endIndex > startIndex) {
            return testimoni.slice(startIndex, endIndex);
        } else {
            return [...testimoni.slice(startIndex), ...testimoni.slice(0, endIndex)];
        }
    };

    const currentTestimonials = getNextTestimonials(currentTestimonialIndex, 3);

    return (
        <>
            <div className='pt-[170px] pb-[110px]'>
                <div className='px-28 flex justify-between'>
                    <div className='relative -z-50'>
                        <img src={karya[currentImageIndex].image} />
                        <div className='px-5 py-1 absolute left-0 top-0 text-black font-semibold text-sm bg-white/40 rounded-full ml-2 mt-2 border border-white'>{karya[currentImageIndex].Type}</div>
                        <div className='p-[9px] bg-white/40 absolute right-0 top-0 rounded-[10px] mr-2 mt-2'>
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.97965 17.989L15.6126 1.66911M15.6126 1.66911L2.13382 2.87824M15.6126 1.66911L16.8217 15.1479" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className='absolute bottom-0 left-0 px-5 py-2 bg-[#333333]/50 text-white font-bold border border-white rounded-full ml-2 mb-24'>
                            {karya[currentImageIndex].Title}
                        </div>
                        <div className='flex gap-[14px] justify-center mt-5'>
                            {/* Ikon aktif */}
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" fill={currentImageIndex === 0 ? "#17AB52" : "#C4C4C4"} />
                            </svg>
                            {/* Ikon nonaktif */}
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" fill={currentImageIndex === 0 ? "#C4C4C4" : "#17AB52"} />
                            </svg>
                        </div>
                    </div>

                    <div className='text-white flex flex-col items-center w-full ml-[100px]'>
                        <h1 className='text-[32px]'>Ulasan Terbaru</h1>
                        <div className='grid grid-cols-3 gap-[2px] mt-5'>
                            {currentTestimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className={`w-full h-fit bg-[#262626] px-5 py-10 rounded-[30px] mx-4`}
                                >
                                    <div className='flex gap-1 items-center'>
                                        <img src={testimonial.image} alt={`${testimonial.name}`} />
                                        <p className='text-third'>{testimonial.name}</p>
                                    </div>
                                    <p className='mt-4'>{testimonial.comment}</p>
                                    <div className='flex gap-1 items-center mt-5'>
                                        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.8973 5.08177C15.2968 2.05076 12.1281 0 8.5 0C4.87185 0 1.70235 2.05219 0.102692 5.08206C0.0351769 5.21168 0 5.3549 0 5.50014C0 5.64539 0.0351769 5.7886 0.102692 5.91823C1.70323 8.94925 4.87185 11 8.5 11C12.1281 11 15.2977 8.94781 16.8973 5.91794C16.9648 5.78832 17 5.6451 17 5.49986C17 5.35461 16.9648 5.2114 16.8973 5.08177ZM8.5 9.625C7.65943 9.625 6.83773 9.38307 6.13882 8.92981C5.43991 8.47655 4.89518 7.83231 4.5735 7.07857C4.25183 6.32482 4.16767 5.49542 4.33165 4.69525C4.49564 3.89508 4.90042 3.16008 5.49479 2.58318C6.08916 2.00629 6.84644 1.61342 7.67086 1.45426C8.49529 1.2951 9.34678 1.37801 10.1204 1.69243C10.894 2.00686 11.552 2.53825 12.0046 3.21516C12.4572 3.89207 12.6842 4.68212 12.6535 5.48279C12.6208 6.33962 12.3077 7.16064 11.7679 7.82783C11.2281 8.49502 10.4914 8.97515 9.66152 9.20295C9.27563 9.31597 8.88159 9.375 8.5 9.375C8.5 9.52023 8.5 9.52023 8.5 9.625ZM8.5 2.75C8.2471 2.75343 7.99584 2.78995 7.753 2.85857C7.95317 3.12259 8.04923 3.44749 8.02375 3.77436C7.99828 4.10122 7.85295 4.40841 7.61414 4.6402C7.37532 4.87198 7.05883 5.01303 6.72206 5.03776C6.38529 5.06249 6.05054 4.96926 5.77852 4.77497C5.62362 5.32887 5.65158 5.91596 5.85847 6.45362C6.06535 6.99128 6.44075 7.45244 6.93181 7.77218C7.42287 8.09192 8.00488 8.25414 8.59591 8.23602C9.18694 8.2179 9.75724 8.02034 10.2265 7.67116C10.6958 7.32197 11.0405 6.83874 11.212 6.28948C11.3835 5.74021 11.3732 5.15258 11.1826 4.60928C10.992 4.06598 10.6307 3.59438 10.1494 3.26084C9.6682 2.92731 9.09132 2.74865 8.5 2.75Z" fill="#C4C4C4" fill-opacity="0.73" />
                                        </svg>
                                        <p>200 view</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
