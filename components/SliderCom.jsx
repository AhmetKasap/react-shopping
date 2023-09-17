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

        <div className='!flex flex-rows mt-8 gap-2'>

          <div className='!basis-1/4 flex flex-rows items-center justify-center'>
            <Image width={1000} height={1000} src="/1.jpg" className='!w-128 h-128'></Image>

          </div>
          <div className='!basis-1/4 flex flex-rows items-center justify-center'>
            <Image width={1000} height={1000} src="/10.jpg" className='! w-128 h-128'></Image>
          </div>

          <div className='!basis-1/4 flex flex-rows items-center justify-center'>
            <Image width={1000} height={1000} src="/5.jpg" className='!w-128 h-128'></Image>
          </div>

          <div className='!basis-1/4 flex flex-rows items-center justify-center'>
            <Image width={1000} height={1000} src="/4.jpg" className='!w-128 h-128'></Image>
          </div>


        </div>

        <div className='!flex flex-rows mt-8 gap-2'>

          <div className='!basis-1/4 flex flex-rows items-center justify-center'>
            <Image width={1000} height={1000} src="/2.jpg" className='!w-128 h-128'></Image>

          </div>
          <div className='!basis-1/4 flex flex-rows items-center justify-center'>
            <Image width={1000} height={1000} src="/3.jpg" className='! w-128 h-128'></Image>
          </div>

          <div className='!basis-1/4 flex flex-rows items-center justify-center'>
            <Image width={1000} height={1000} src="/7.jpg" className='!w-128 h-128'></Image>
          </div>

          <div className='!basis-1/4 flex flex-rows items-center justify-center'>
            <Image width={1000} height={1000} src="/10.jpg" className='!w-128 h-128'></Image>
          </div>


        </div>

       

        
        

      </Slider>
    </>
  );
}

export default SliderCom