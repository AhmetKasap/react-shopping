import Link from 'next/link'
import React from 'react'
import { BsCartPlus,BsSearch } from 'react-icons/bs';



const Navbar = () => {
  return (
    <>
        <div className='flex flex-row h-20 '>
            <div className=" basis-1/6 flex flex-row items-center justify-center">
                <p className='color1'>LOGO</p>
            </div>
            <div className=' basis-full flex flex-row justify-center items-center gap-8'>
                    <Link href="/" className='text-xl font-roboto2   hover:text-me-orange hover:underline underline-offset-8'>Giyim</Link>
                    <Link href="/" className='text-xl font-roboto2  hover:text-me-orange hover:underline underline-offset-8'>Ayakkabı</Link>
                    <Link href="/" className='text-xl font-roboto2  hover:text-me-orange hover:underline underline-offset-8'>Aksesuar</Link>
                    <Link href="/" className='text-xl font-roboto2  hover:text-me-orange hover:underline underline-offset-8'>İndirim</Link>
            </div>
            <div className=' basis-1/3 flex flex-row items-center justify-center'>

                <input id='searchBar' className='h-10 w-64 rounded-lg border-2 border-slate-500 outline-none  focus:border-amber-600 font-roboto' placeholder='ara'></input>
                <label htmlFor='searchBar' className=' active:text-me-orange'>
                    <BsSearch className='w-12 h-6'></BsSearch>
                </label>
               
                <Link href='/'>
                    <BsCartPlus className='w-12 h-7'></BsCartPlus>
                </Link>

            </div>


        </div>
        <hr />

    </>
  )
}

export default Navbar