import React from 'react'
import { BsApple } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';
import { SiHuawei } from 'react-icons/si';

export default function MobileApp() {
  return (
    <div className='container mx-auto'>
      <div className='my-8 rounded-lg flex justify-between bg-hero bg-primarypurp h-[312px] w-full '>
        <div className='items-center flex'>
          <div className='m-12'>
          <h3 className='text-3xl text-white font-semibold pb-2'>Getir'i indirin!</h3>
          <p className='text-lg font-semibold text-white'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
          <div className='mt-8 flex'>
            <button className='flex rounded-lg bg-gray-900 items-center px-3 py-2 my-2 mr-2 text-white min-w-max'><BsApple size={25}/> <div className='pl-2'><p className='  font-semibold'>App Store'dan</p> <p className=' font-light items-start flex text-xs'>indirin</p></div></button>
            <button className='flex rounded-lg bg-gray-900 items-center px-3 py-2 my-2 mr-2 text-white min-w-max'><FaGooglePlay size={25}/> <div className='pl-2'><p className='  font-semibold'>Google Play &nbsp;&nbsp;&nbsp;</p> <p className=' font-light items-start flex text-xs'>'DEN ALIN</p></div></button>
            <button className='flex rounded-lg bg-gray-900 items-center px-3 py-2 my-2 mr-2 text-white min-w-max'><SiHuawei size={25}/> <div className='pl-2'><p className='  font-semibold'>AppGallery &nbsp;&nbsp;&nbsp;</p> <p className=' font-light items-start flex text-xs'>İLE KEŞFEDİN</p></div></button>          
          </div>
          </div>
        </div>
        <div className='items-end lg:flex hidden'>
          <img className='rounded-br-lg' src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="" />
        </div>
      </div>  
    </div>
  )
}
