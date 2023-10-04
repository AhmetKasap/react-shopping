'use client'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import {useSelector,useDispatch} from 'react-redux'
import categorySlice from '@/redux/features/categorySlice';
import { getCategory } from '@/redux/features/categorySlice';



const Filter = () => {
    const dispatch = useDispatch()
    const category = useSelector((state) => state.category.products )





    const [isGender, setIsGender] = useState(false);
    const [isBrand, setIsBrand] = useState(false);
    const [isPrice, setIsPrice] = useState(false)
    const [isSize, setIsSize] = useState(false)
    const [isColor, setIsColor] = useState(false)



    const toggleDropdown = () => {
        setIsGender(!isGender);
    };

    const toggleDropdown2 = () => {
        setIsBrand(!isBrand);
    };

    const toggleDropdown3 = () => {
        setIsPrice(!isPrice);
    };

    const toggleDropdown4 = () => {
        setIsSize(!isSize);
    };

    const toggleDropdown5 = () => {
        setIsColor(!isColor);
    };



    const [categoryName, setCategoryName] = useState()

    useEffect(() => {
        dispatch(getCategory(categoryName))
    },[categoryName])
   
    console.log(category)






    return (
        <>

            <div className='mb-8 flex flex-col items-start ml-1'>

                {
                    categoryName && categoryName ==="classhoe" ? (
                        <button className='font-roboto text-lg mt-2 text-me-orange hover:text-me-orange' onClick={() => setCategoryName('classhoe')}>Klasik </button>
                    ) : (
                        <button className='font-roboto text-lg mt-2 hover:text-me-orange' onClick={() => setCategoryName('classhoe')}>Klasik </button>

                    )
                }
                 {
                    categoryName && categoryName ==="snekearshoe" ? (
                        <button className='font-roboto text-lg mt-2 text-me-orange hover:text-me-orange' onClick={() => setCategoryName('snekearshoe')}>Snekears </button>
                    ) : (
                        <button className='font-roboto text-lg mt-2 hover:text-me-orange' onClick={() => setCategoryName('snekearshoe')}>Snekears </button>

                    )
                }
                 {
                    categoryName && categoryName ==="sporshoe" ? (
                        <button className='font-roboto text-lg mt-2 text-me-orange hover:text-me-orange' onClick={() => setCategoryName('sporshoe')}>Spor </button>
                    ) : (
                        <button className='font-roboto text-lg mt-2 hover:text-me-orange' onClick={() => setCategoryName('sporshoe')}>Spor </button>

                    )
                }
                 {
                    categoryName && categoryName ==="botshoe" ? (
                        <button className='font-roboto text-lg mt-2 text-me-orange hover:text-me-orange' onClick={() => setCategoryName('botshoe')}>Bot </button>
                    ) : (
                        <button className='font-roboto text-lg mt-2 hover:text-me-orange' onClick={() => setCategoryName('botshoe')}>Bot </button>

                    )
                }
                 {
                    categoryName && categoryName ==="basketballshoe" ? (
                        <button className='font-roboto text-lg mt-2 text-me-orange hover:text-me-orange' onClick={() => setCategoryName('basketballshoe')}>Basketbol </button>
                    ) : (
                        <button className='font-roboto text-lg mt-2 hover:text-me-orange' onClick={() => setCategoryName('basketballshoe')}>Basketbol </button>

                    )
                }
                 {
                    categoryName && categoryName ==="cramponshoe" ? (
                        <button className='font-roboto text-lg mt-2 text-me-orange hover:text-me-orange' onClick={() => setCategoryName('cramponshoe')}>Krampon </button>
                    ) : (
                        <button className='font-roboto text-lg mt-2 hover:text-me-orange' onClick={() => setCategoryName('cramponshoe')}>Krampon </button>

                    )
                }

{
                    categoryName && categoryName ==="topukshoe" ? (
                        <button className='font-roboto text-lg mt-2 text-me-orange hover:text-me-orange' onClick={() => setCategoryName('topukshoe')}>Topuklu </button>
                    ) : (
                        <button className='font-roboto text-lg mt-2 hover:text-me-orange' onClick={() => setCategoryName('topukshoe')}>Topuklu </button>

                    )
                }
                
            </div>







            <div className='flex flex-row justify-between items-center' onClick={() => toggleDropdown()}>
                {
                    isGender ? (<button className='font-roboto font-medium p-2 rounded-lg border-2 text-sm text-white bg-me-orange' onClick={() => toggleDropdown()}>Cinsiyet</button>)
                        : (<button className='font-roboto font-medium p-2 rounded-lg border-2 text-sm text-white bg-black ' onClick={() => toggleDropdown()}>Cinsiyet</button>)
                }
                {
                    isGender ? (<AiOutlineArrowUp className='text-me-orange text-2xl' onClick={() => toggleDropdown()}></AiOutlineArrowUp>)
                        : (<AiOutlineArrowDown className=' text-2xl' onClick={() => toggleDropdown()}></AiOutlineArrowDown>)
                }
            </div>

            {
                isGender && (
                    <div className='flex flex-col gap-2 mt-4'>
                        <div className='flex flex-row gap-16 items-center'>
                            <label htmlFor='male' className='basis-1/3 ml-1'>Erkek</label>
                            <input id='male' type='checkbox' className='basis-1/6'></input>
                        </div>
                        <div className='flex flex-row gap-16 items-center'>
                            <label htmlFor='female' className='basis-1/3 ml-1'>Kadın</label>
                            <input id='female' type='checkbox' className='basis-1/6'></input>
                        </div>

                    </div>
                )
            }

            <hr className='mt-2' />


            <div className='flex flex-row justify-between items-center mt-4' onClick={() => toggleDropdown2()}>
                {
                    isBrand ? (<button className='font-roboto font-medium p-2 rounded-lg border-2 text-sm text-white bg-me-orange' onClick={() => toggleDropdown2()}>Marka</button>)
                        : (<button className='font-roboto font-medium p-2 rounded-lg border-2 text-sm text-white bg-black ' onClick={() => toggleDropdown2()}>Marka</button>)
                }
                {
                    isBrand ? (<AiOutlineArrowUp className='text-me-orange text-2xl' onClick={() => toggleDropdown2()}></AiOutlineArrowUp>)
                        : (<AiOutlineArrowDown className=' text-2xl' onClick={() => toggleDropdown2()}></AiOutlineArrowDown>)
                }
            </div>

            {
                isBrand && (
                    <div className='flex flex-col gap-2 mt-4'>
                        <div className='flex flex-row items-center '>
                            <label htmlFor='male' className='basis-1/2 ml-1'>Nike</label>
                            <input id='male' type='checkbox' className='basis-1/4'></input>
                        </div>
                        <div className='flex flex-row  items-center'>
                            <label htmlFor='female' className='basis-1/2 ml-1'>Addidas</label>
                            <input id='female' type='checkbox' className='basis-1/4' ></input>
                        </div>

                        <div className='flex flex-row  items-center'>
                            <label htmlFor='female' className='basis-1/2 ml-1'>Puma</label>
                            <input id='female' type='checkbox' className='basis-1/4'></input>
                        </div>

                    </div>
                )
            }


            <hr className='mt-2' />

            <div className='flex flex-row justify-between items-center mt-4' onClick={() => toggleDropdown3()}>
                {
                    isPrice ? (<button className='font-roboto font-medium p-2 rounded-lg border-2 text-sm text-white bg-me-orange' onClick={() => toggleDropdown3()}>Fiyat</button>)
                        : (<button className='font-roboto font-medium p-2 rounded-lg border-2 text-sm text-white bg-black ' onClick={() => toggleDropdown3()}>Fiyat</button>)
                }
                {
                    isPrice ? (<AiOutlineArrowUp className='text-me-orange text-2xl' onClick={() => toggleDropdown3()}></AiOutlineArrowUp>)
                        : (<AiOutlineArrowDown className=' text-2xl' onClick={() => toggleDropdown3()}></AiOutlineArrowDown>)
                }
            </div>



            {
                isPrice && (
                    <div className='flex flex-col gap-2 mt-4'>
                        <div className='flex flex-row items-center '>
                            <label htmlFor='male' className='basis-1/2 ml-1  font-roboto'>1000 TL altında</label>
                            <input id='male' type='checkbox' className='basis-1/4'></input>
                        </div>
                        <div className='flex flex-row  items-center'>
                            <label htmlFor='female' className='basis-1/2 ml-1 font-roboto'>1000 - 2000 TL</label>
                            <input id='female' type='checkbox' className='basis-1/4' ></input>
                        </div>

                        <div className='flex flex-row  items-center'>
                            <label htmlFor='female' className='basis-1/2 ml-1 font-roboto'>2000 - 3000 TL</label>
                            <input id='female' type='checkbox' className='basis-1/4' ></input>
                        </div>

                        <div className='flex flex-row  items-center'>
                            <label htmlFor='female' className='basis-1/2 ml-1 font-roboto'>3000 - 5000 TL</label>
                            <input id='female' type='checkbox' className='basis-1/4' ></input>
                        </div>

                        <div className='flex flex-row  items-center'>
                            <label htmlFor='female' className='basis-1/2 ml-1 font-roboto'>5000 TL üzeri</label>
                            <input id='female' type='checkbox' className='basis-1/4' ></input>
                        </div>



                    </div>
                )
            }


            <hr className='mt-2' />

            <div className='flex flex-row justify-between items-center mt-4' onClick={() => toggleDropdown4()}>
                {
                    isSize ? (<button className='font-roboto font-medium p-2 rounded-lg border-2 text-sm text-white bg-me-orange' onClick={() => toggleDropdown4()}>Numara/Beden</button>)
                        : (<button className='font-roboto font-medium p-2 rounded-lg border-2 text-sm text-white bg-black ' onClick={() => toggleDropdown4()}>Numara/Beden</button>)
                }
                {
                    isSize ? (<AiOutlineArrowUp className='text-me-orange text-2xl' onClick={() => toggleDropdown4()}></AiOutlineArrowUp>)
                        : (<AiOutlineArrowDown className=' text-2xl' onClick={() => toggleDropdown4()}></AiOutlineArrowDown>)
                }
            </div>


            {
                isSize && (
                    <>
                        <div className='flex flex-row gap-2 mt-4'>

                            <div className='basis-1/3'>
                                <button className='border-2 p-1 pl-3 pr-3 text-lg text-white  bg-gray-400 hover:border-4 rounded-lg'>36</button>
                            </div>

                            <div className='basis-1/3'>
                                <button className='border-2 p-1 pl-3 pr-3 text-lg text-white  bg-gray-400 hover:border-4 rounded-lg'>37</button>
                            </div>

                            <div className='basis-1/3'>
                                <button className='border-2 p-1 pl-3 pr-3 text-lg text-white  bg-gray-400 hover:border-4 rounded-lg'>38</button>
                            </div>
                        </div>

                        <div className='flex flex-row gap-2 mt-4'>

                            <div className='basis-1/3'>
                                <button className='border-2 p-1 pl-3 pr-3 text-lg text-white  bg-gray-400 hover:border-4 rounded-lg'>39</button>
                            </div>

                            <div className='basis-1/3'>
                                <button className='border-2 p-1 pl-3 pr-3 text-lg text-white  bg-gray-400 hover:border-4 rounded-lg'>40</button>
                            </div>

                            <div className='basis-1/3'>
                                <button className='border-2 p-1 pl-3 pr-3 text-lg text-white  bg-gray-400 hover:border-4 rounded-lg'>41</button>
                            </div>
                        </div>


                        <div className='flex flex-row gap-2 mt-4'>

                            <div className='basis-1/3'>
                                <button className='border-2 p-1 pl-3 pr-3 text-lg text-white  bg-gray-400 hover:border-4 rounded-lg'>42</button>
                            </div>

                            <div className='basis-1/3'>
                                <button className='border-2 p-1 pl-3 pr-3 text-lg text-white  bg-gray-400 hover:border-4 rounded-lg'>43</button>
                            </div>

                            <div className='basis-1/3'>
                                <button className='border-2 p-1 pl-3 pr-3 text-lg text-white  bg-gray-400 hover:border-4 rounded-lg'>44</button>
                            </div>
                        </div>



                    </>



                )
            }


            <hr className='mt-2' />

            <div className='flex flex-row justify-between items-center mt-4' onClick={() => toggleDropdown5()}>
                {
                    isColor ? (<button className='font-roboto font-medium p-2 rounded-lg border-2 text-sm text-white bg-me-orange' onClick={() => toggleDropdown5()}>Renk</button>)
                        : (<button className='font-roboto font-medium p-2 rounded-lg border-2 text-sm text-white bg-black ' onClick={() => toggleDropdown5()}>Renk</button>)
                }
                {
                    isColor ? (<AiOutlineArrowUp className='text-me-orange text-2xl' onClick={() => toggleDropdown5()}></AiOutlineArrowUp>)
                        : (<AiOutlineArrowDown className=' text-2xl' onClick={() => toggleDropdown5()}></AiOutlineArrowDown>)
                }
            </div>



            {
                isColor && (
                    <>
                        <div className='flex flex-row gap-2 mt-4'>

                            <div className='basis-1/3 flex flex-col justify-center items-center'>
                                <button className='border-2 p-3 text-sm text-white  bg-red-500 hover:border-4 rounded-full'></button>
                                <span className='text-sm text-center'>Kırmızı</span>
                            </div>

                            <div className='basis-1/3 flex flex-col justify-center items-center'>
                                <button className='border-2 p-3 text-sm text-white  bg-yellow-500 hover:border-4 rounded-full'></button>
                                <span className='text-sm text-center'>Sarı</span>
                            </div>

                            <div className='basis-1/3 flex flex-col justify-center items-center'>
                                <button className='border-2 p-3 text-sm text-white  bg-black hover:border-4 rounded-full'></button>
                                <span className='text-sm text-center'>Siyah</span>
                            </div>
                        </div>


                        <div className='flex flex-row gap-2 mt-4'>

                            <div className='basis-1/3 flex flex-col justify-center items-center'>
                                <button className='border-2 p-3 text-sm text-white  bg-yellow-900 hover:border-4 rounded-full'></button>
                                <span className='text-sm text-center'>Kahverengi</span>
                            </div>

                            <div className='basis-1/3 flex flex-col justify-center items-center'>
                                <button className='border-2 p-3 text-sm text-white  bg-green-500 hover:border-4 rounded-full'></button>
                                <span className='text-sm text-center'>Yeşil</span>
                            </div>

                            <div className='basis-1/3 flex flex-col justify-center items-center'>
                                <button className='border-2 p-3 text-sm text-white  bg-blue-500 hover:border-4 rounded-full'></button>
                                <span className='text-sm text-center'>Mavi</span>
                            </div>
                        </div>





                    </>



                )
            }





        </>
    )
}

export default Filter