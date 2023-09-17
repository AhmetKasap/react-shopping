import React from 'react'
import Link from 'next/link'
import { BsCartPlus } from 'react-icons/bs';


const Basket = () => {
  return (
    <>
        <Link href='/'>
            <BsCartPlus className='w-12 h-7'></BsCartPlus>
        </Link>
    </>
  )
}

export default Basket