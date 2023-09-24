import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar';
import Basket from './Basket';
import Categories from './Categories';
import Image from 'next/image';



const Navbar = () => {
  return (
    <>
        <div className='flex flex-row h-20 '>
            <div className=" basis-1/6 flex flex-row items-center justify-center">
                <Link href='/'>
                  <Image width={50} height={50} src='/logo.png'></Image>
                </Link>
            </div>
            <div className=' basis-full flex flex-row justify-center items-center gap-8 relative'>
                    <Categories></Categories>
            </div>
            <div className=' basis-1/3 flex flex-row items-center justify-center'>
                <SearchBar></SearchBar>
                <Basket></Basket>
            </div>
        </div>
        <hr />

    </>
  )
}





export default Navbar