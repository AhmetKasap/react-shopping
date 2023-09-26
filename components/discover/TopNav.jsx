import React from 'react'
import { BsChevronDown,BsFilter } from "react-icons/bs";



const TopNav = (props) => {
  return (
    <>
        <div className='flex flex-row mt-12 justify-between mb-16'>
            <div>
                <h1 className='text-4xl font-roboto'>{props.paramsName === "shoe" ? ("Ayakkabılar") : ('')}  </h1> 
                <h1 className='text-4xl font-roboto'>{props.paramsName === "clothes" ? ("Giyim") : ('')}   </h1> 
                <h1 className='text-4xl font-roboto'>{props.paramsName === "accessory" ? ("Aksesuarlar") : ('')}  </h1> 
            </div>
            

            <div className='flex flex-row justify-center items-center gap-8'>
                <div className='flex flex-row items-center gap-2'>
                    <p className='text-lg font-roboto ml-96'>Filtreleri Göster / Gizle</p>
                    <BsFilter></BsFilter>

                </div>
                <div className='flex flex-row items-center gap-2'>
                    <p className='text-lg font-roboto'>Sıralama Ölçütü</p>
                    <BsChevronDown className='font-bold text-black'></BsChevronDown>
                </div>
               
                
            </div>
            
        </div>

    </>
  )
}

export default TopNav