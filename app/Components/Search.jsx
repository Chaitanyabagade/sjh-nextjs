import React from 'react'
import SearchIcon from "../public/searchicon.png"
import Image from "next/image"
const Search = () => {
  return (
    <div className='h-[43px] border-[1px] border-purple-600 rounded-full w-[90%] sm:w-[70%] bg-purple-600 md:w-[50%] lg:w-[600px] ml-auto mr-auto flex ' >
        <input   className="w-[100%] h-[40px] rounded-tl-full rounded-bl-full text-xl pl-5 mt-[1px] " type="text" placeholder='Search...'/>
        <button className='w-[45px] bg-white h-[40px] rounded-tr-full rounded-br-full mt-[1px]'><Image className='w-[30px] bg-white h-[30px]  rounded-tr-full rounded-br-full ' src={SearchIcon}></Image></button> 
    </div>
  )
}

export default Search
