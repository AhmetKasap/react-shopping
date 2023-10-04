'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useSelector,useDispatch} from 'react-redux'
import { getProduct } from '@/redux/features/productSlice'
import { getCategory } from '@/redux/features/categorySlice'

const Card = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products)
    const category = useSelector((state) => state.category.products)


    useEffect(() => {
        dispatch(getProduct())
    },[])


    console.log("card içerisindeki ", category)







 
    return (
        <>

            <div className='flex flex-row flex-wrap '>

                {
                    category && category.products && category.products.length>0 ? (
                        category.products.map(data => {
                            return(
                                <>
                                    <div className='basis-1/3 mb-40'>
                                        <div className='m-4'>
                                            <Link href='/'>
                                                <Image width={1000} height={600} src={"http://localhost:5000/uploads/"+data.image[0]} className=' w-auto h-128' />
                                            </Link>
                                            <div className='flex flex-row items-center justify-between  mx-auto mt-4 '>
                                                <p className='font-roboto text-lg text-gray-800'> {data.title} </p>
                                                <p className='font-rem text-lg text-me-orange '> {data.price} TL</p>
                                            </div>
                                        </div>
                                    
                                    </div>

                            </>
                            )
                        })
                    ) : 
                    (
                        products.products && products.products.map(product => {
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
                    )
                }

              



            </div>



        </>
    )
}

export default Card