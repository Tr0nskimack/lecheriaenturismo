import React from 'react'
import { MdOutlineLanguage } from "react-icons/md";
import { MenuPhone } from './MenuPhone'

export const Navbar = () => {
  return (
    <div className='bg-white h-[60px] flex justify-between items-center px-5 shadow-sm '>
      <div>
        <h1 className='text-[13px] font-bold'>Lecheriaenturismo</h1>
      </div>
      <div>
        <MenuPhone />
      </div>
      <div className='flex items-center space-x-4 text-[13px]'>
        <div className='flex items-center space-x-1'>
          <MdOutlineLanguage className='text-gray-400 '/>
          <h1>English</h1>

        </div>
        <button className='bg-black text-white font-light tracking-wider rounded-full px-3 py-1 shadow-md'>
          contacto

        </button>

      </div>
    </div>
  )
}
