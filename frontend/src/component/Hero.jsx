import React from 'react'
export default function Hero() {
    const containerStyle = {
        background: `url(images/Heroimg2.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <div>
            <div style={containerStyle}>
                <div className='flex flex-col justify-center items-center pt-80'>
                    <h1 className='text-third font-semibold text-5xl container mx-auto px-60 text-center'>
                        JELAJAHI KREATIVITAS DENGAN KOLEKSI GALERI KAMI
                    </h1>
                    <p className='text-white text-base text-center mt-4 container mx-auto px-52'>
                        Pada platform kami ini akan menampilkan banyak sekali edukasi seni untuk anda dapat pelajari lebih detail. Dan tentunya menjadi platform yang selalu update, bagi kebutuhan anda
                    </p>
                </div>
            </div>
        </div>
    )
}