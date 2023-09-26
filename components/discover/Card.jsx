'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        const api = async () => {
            const response = await fetch('http://localhost:5000/products', {
                method: "GET"
            })
            const data = await response.json()
            setProducts(data.products)
        }

        api()

    }, [])

    console.log(products)

    return (
        <>

            <div className='flex flex-row flex-wrap '>
                {
                    products && products.map(product => {
                        return (
                            <>
                                <div className='basis-1/3 mb-40'>
                                    <div className='m-4'>
                                        <Link href='/'>
                                            <Image width={1000} height={600} src={"http://localhost:5000/uploads/"+product.image[0]} className=' w-auto h-128' />
                                        </Link>
                                        <div className='flex flex-row items-center justify-between  mx-auto mt-4 '>
                                            <p className='font-roboto text-lg text-gray-800'> {product.title} </p>
                                            <p className='font-rem text-lg text-me-orange '> {product.price} TL</p>
                                        </div>
                                    </div>
                                   
                                </div>

                            </>



                        )


                    })
                }





            </div>



        </>
    )
}

export default Card