import React from 'react'
import Link from 'next/link'

const MiniSlider = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center gap-8 mt-16 mb-8'>
            <h1 className=' font-roboto text-6xl'>KEŞFET</h1>
            <h4 className='font-rem text-xl'>En Trend ve En Kaliteli Ürünleri Keşfetmeye Hazır Mısın ?</h4>

            <Link href='/discover' className='text-sm font-roboto2 hover:bg-me-orange bg-black border-2 rounded-xl p-3 text-white'>Keşfet</Link>
            <hr/>

        </div>

    </>
  )
}

export default MiniSlider