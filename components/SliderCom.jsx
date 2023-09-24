'use client'
import React from 'react'
import Slider from "react-slick";

import Image from 'next/image';


const SliderCom = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Slider {...settings}>

        <div className='!flex flex-row mt-8 gap-2'>

          <div className='!w-full h-192  flex flex-row gap-32'>
            <Image width={1200} height={1000} src="/slider1.jpg" className='!w-auto  bg-red-300'></Image>
            
            <div className='! flex flex-col justify-center items-center'>
              <h1 className='font-roboto text-4xl'>SEÇİLİ ÜRÜNLERDE</h1>
              <h1 className='font-roboto text-7xl mt-5 text-me-orange'>%30'A VARAN İNDİRİM</h1>
            </div>
            
          </div>
        </div>


        <div className='!flex flex-row mt-8 gap-2'>

          <div className='!w-full h-192  flex flex-row '>
            <Image width={1200} height={1000} src="/slider2.jpg" className='!w-auto  bg-red-300'></Image>

            
            <div className='! flex flex-col justify-center items-center ml-16'>
              <h1 className='font-roboto text-4xl'>AYAKABILARDA FIRSAT</h1>
              <h1 className='font-roboto text-7xl mt-5 text-me-orange'>SEPETE EK %25 İNDİRİM</h1>
            </div>
            
          </div>
        </div>

      

       


        

        

        

       

        
        

      </Slider>
    </>
  );
}

export default SliderCom