import Navbar from '@/components/Navbar/Navbar'
import Filter from '@/components/discover/Filter'
import TopNav from '@/components/discover/TopNav'
import Footer from '@/components/home/Footer'
import React from 'react'

const Main = () => {
  return (
    <>
        <Navbar></Navbar>

        <div className='w-11/12 mx-auto'>
          <TopNav></TopNav>

          <div className='flex flex-row gap-8'>
            <div className=' basis-1/5'>
              <Filter></Filter>
            </div>
            <div className='basis-full bg-gray-200'>
              
            </div>

          </div>

        </div>

        



        <Footer></Footer>
    </>
  )
}

export default Main