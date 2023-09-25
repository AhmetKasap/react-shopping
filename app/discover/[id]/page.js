import Navbar from '@/components/Navbar/Navbar'
import Card from '@/components/discover/Card'
import Filter from '@/components/discover/Filter'
import TopNav from '@/components/discover/TopNav'
import Footer from '@/components/home/Footer'
import React from 'react'

const Main = ({params}) => {
  return (
    <>

    
        <Navbar></Navbar>

        <div className='w-11/12 mx-auto'>
          <TopNav paramsName={params.id}></TopNav>

          <div className='flex flex-row gap-8'>
            <div className=' basis-1/6'>
              <Filter></Filter>
            </div>
            <div className='basis-full'>
              <Card></Card>
            </div>

          </div>

        </div>

        



        <Footer></Footer>
    </>
  )
}

export default Main