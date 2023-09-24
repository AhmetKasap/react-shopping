'use client'
import React, { useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";




const Filter = () => {
    const [isGender, setIsGender] = useState(false);
    const [isBrand, setIsBrand] = useState(false);


    const toggleDropdown = () => {
        setIsGender(!isGender);
    };

    const toggleDropdown2 = () => {
        setIsBrand(!isBrand);
    };

    return (
        <>
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

                        <hr></hr>
                    </div>
                )
            }




            <div className='flex flex-row justify-between items-center mt-8' onClick={() => toggleDropdown2()}>
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

                        <hr></hr>
                    </div>
                )
            }



        </>
    )
}

export default Filter