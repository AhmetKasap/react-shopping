import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='flex flex-row justify-center items-center mt-24    h-96 gap-32 bg-slate-100'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-roboto text-xl'>Destek</h1>
            <p className='font-inter text-sm'>İletişim Formu</p>
            <p className='font-inter text-sm'>444 444 444</p>
            <p className='font-inter text-sm'>Whatsap Destek</p>
            <p className='font-inter text-sm'>Sipariş Takip</p>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='font-roboto text-xl'>Yardım</h1>
            <p className='font-inter text-sm'>Sıkça Sorulan Sorular</p>
            <p className='font-inter text-sm'>İade Ve Değişim</p>
            <p className='font-inter text-sm'>Kullanım Koşulları</p>
            <p className='font-inter text-sm'>İşlem Rehberi</p>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='font-roboto text-xl'>Kurumsal</h1>
            <p className='font-inter text-sm'>Hakkımızda</p>
            <p className='font-inter text-sm'>Mağazalarımız</p>
            <p className='font-inter text-sm'>Kariyer Fırsatları</p>
            <p className='font-inter text-sm'>Hediye Kart</p>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='font-roboto text-xl'>Politikalar</h1>
            <p className='font-inter text-sm'>Hakkımızda</p>
            <p className='font-inter text-sm'>Mağazalarımız</p>
            <p className='font-inter text-sm'>Kariyer Fırsatları</p>
            <p className='font-inter text-sm'>Hediye Kart</p>
          </div>

        </div>
    </>
  )
}

export default Footer