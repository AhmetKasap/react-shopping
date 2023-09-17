import React from 'react'
import {BsSearch } from 'react-icons/bs';


const SearchBar = () => {
  return (
    <>
     <input id='searchBar' className='h-10 w-64 rounded-lg border-2 border-slate-500 outline-none  focus:border-amber-600 font-roboto' placeholder='ara'></input>
     <label htmlFor='searchBar' className=' active:text-me-orange'>
        <BsSearch className='w-12 h-6'></BsSearch>
    </label>


    </>
  )
}

export default SearchBar