'use client'
import React, { useState } from 'react'
import Link from 'next/link'



const Categories = () => {
    const [menu , setMenu] = useState(false)
    const [menu2 , setMenu2] = useState(false)
    const [menu3 , setMenu3] = useState(false)
    const [menu4 , setMenu4] = useState(false)


    const openMenu = () => {
        setMenu(!menu)
    }
    const openMenu2 = () => {
        setMenu2(!menu2)
    }
    const openMenu3 = () => {
        setMenu3(!menu3)
    }
    const openMenu4 = () => {
        setMenu4(!menu4)
    }


    
    return (
        <>  
            <Link href="/discover/shoe" onMouseEnter={() => openMenu()}  className='text-xl font-roboto2  hover:text-me-orange hover:underline underline-offset-8'>Ayakkabı</Link>
            <Link href="/" onMouseEnter={() => openMenu2()} className='text-xl font-roboto2   hover:text-me-orange hover:underline underline-offset-8'>Giyim</Link>
            <Link href="/" onMouseEnter={() => openMenu3()}  className='text-xl font-roboto2  hover:text-me-orange hover:underline underline-offset-8'>Aksesuar</Link>
            <Link href="/" onMouseEnter={() => openMenu4()} className='text-xl font-roboto2  hover:text-me-orange hover:underline underline-offset-8'>İndirim</Link>

            {
                menu === true ? (
                    <div className="absolute top-full w-96 p-2 text-center h-48 flex flex-row justify-center items-center gap-8">
                        <div className='basis-1/2 flex flex-col'>
                            <Link href="/" className='mb-2  font-inter hover:text-me-orange' >Günlük Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Rahat Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Klasik Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Spor Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Botlar</Link>

                        </div>

                        <div className='basis-1/2 flex flex-col'>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Snekars</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Krampon</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Koşu Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Halısaha Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Yürüyüş Ayakkabılar</Link>

                        </div>   
                    </div>

                ) : ('')
            }

{
                menu2 === true ? (
                    <div className="absolute top-full w-96 p-2 text-center h-48 flex flex-row justify-center items-center gap-8">
                        <div className='basis-1/2 flex flex-col'>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange' >Tüm Ürünler</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Yeni Ürünler</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>T-Shirts</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Eşofman</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Sweatshirts</Link>

                        </div>

                        <div className='basis-1/2 flex flex-col'>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Pantolon</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Şort</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Ceket</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Mont</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Çorap</Link>

                        </div>   
                    </div>

                ) : ('')
            }

{
                menu3 === true ? (
                    <div className="absolute top-full w-96 p-2 text-center h-48 flex flex-row justify-center items-center gap-8">
                        <div className='basis-1/2 flex flex-col'>
                            <Link href="/" className='mb-2  font-inter hover:text-me-orange' >Günlük Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Rahat Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Klasik Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Spor Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Botlar</Link>

                        </div>

                        <div className='basis-1/2 flex flex-col'>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Snekars</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Krampon</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Koşu Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Halısaha Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Yürüyüş Ayakkabılar</Link>

                        </div>   
                    </div>

                ) : ('')
            }


{
                menu4 === true ? (
                    <div className="absolute top-full w-96 p-2 text-center h-48 flex flex-row justify-center items-center gap-8">
                        <div className='basis-1/2 flex flex-col'>
                            <Link href="/" className='mb-2  font-inter hover:text-me-orange' >Günlük Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Rahat Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Klasik Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Spor Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Botlar</Link>

                        </div>

                        <div className='basis-1/2 flex flex-col'>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Snekars</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Krampon</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Koşu Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Halısaha Ayakkabılar</Link>
                            <Link href="/" className='mb-2 font-inter hover:text-me-orange'>Yürüyüş Ayakkabılar</Link>

                        </div>   
                    </div>

                ) : ('')
            }

        </>

    )
}

export default Categories