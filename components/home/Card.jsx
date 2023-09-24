import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <>
        <h1 className='font-roboto text-3xl mt-24 mb-8'>Bu Haftanın Trendleri</h1>

        <div className='flex flex-row 	gap-16'>
            <div className='basis-1/3 '>
                <Link href='/'> 
                    <Image width={550} height={600} src="/shoe5.jpg" className=' h-128' />
                </Link>
                <div className='flex flex-row items-center justify-between  mx-auto mt-4 '>
                    <p className='font-roboto text-lg text-gray-800'>Puma Ayakkabı</p>
                    <p className='font-rem text-lg text-me-orange'>3750 TL</p>
                </div>
            </div>
            <div className='basis-1/3 '>
                <Link href='/'> 
                    <Image width={550} height={600} src="/jacket2.jpg" className='h-128' />
                </Link>
                <div className='flex flex-row items-center justify-between  mx-auto mt-4 '>
                    <p className='font-roboto text-lg text-gray-800'>Deri Ceket</p>
                    <p className='font-rem text-lg text-me-orange'>900 TL</p>
                </div>
            </div>

            <div className='basis-1/3 '>
                <Link href='/'> 
                    <Image width={550} height={600} src="/tshirt1.jpg" className='h-128' />
                </Link>
                <div className='flex flex-row items-center justify-between  mx-auto mt-4 '>
                    <p className='font-roboto text-lg text-gray-800'>Tişört</p>
                    <p className='font-rem text-lg text-me-orange'>475 TL</p>
                </div>
            </div>
          

            
            
        </div>
    </>
  )
}

export default Card