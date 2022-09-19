import Slider from "react-slick";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import {BsFacebook} from 'react-icons/bs'

export default function ImageSlider() {

    const [selected, setSelected] = useState("TR");
    const phones ={
        US:'+1',
        DE:'+56',
        TR:'+90',
        IT:'+32',
        IN:'+15'
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };

  return (
    <div className="relative h-[200px] sm:h-[500px] before:bg-gradient-to-r before:from-primarypurp before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        <Slider {...settings}>
          <div>
            <img className="w-full h-[200px] sm:h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" />
          </div>
          <div>
            <img className="w-full h-[200px] sm:h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" />
          </div>
          <div>
            <img className="w-full h-[200px] sm:h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" />
          </div>
        </Slider>
        <div className="container flex justify-between items-center absolute top-0 left-1/2 z-20 h-full -translate-x-1/2">
            <div className="hidden sm:block" >
                <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"/>
                <h3 className="mt-8 text-lg md:text-lg lg:text-3xl font-semibold text-white ">Dakikalar içinde <br /> kapınızda</h3>
            </div>
            <div className="w-full h-full sm:h-auto sm:w-[400px] rounded-lg bg-gray-50 p-6">
                <h4 className="text-primarypurp mb-4 font-bold text-center">Giriş yap veya kayıt ol</h4>
                <div className="flex gap-x-2">
                    <ReactFlagsSelect
                        countries={Object.keys(phones)}
                        customLabels={phones}
                        onSelect={code => setSelected(code)}
                        selected={selected}
                        className="flag-select"
                    />
                    <label className="flex-1 relative group block">
                        <input required className="h-14 px-4 border-2 border-gray-200 rounded-lg w-full group-hover:border-primarypurp focus:border-primarypurp transition-colors outline-none cursor-text peer text-sm focus:pt-2" type="text" />
                        <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs cursor-pointer">Telefon Numarası</span>
                    </label>
                </div>
                <div>
                    <button className="w-full bg-primaryyellow rounded-lg mt-2 h-12 font-semibold text-secondrypurp hover:bg-secondrypurp hover:text-primaryyellow">Telefon numarası ile devam et</button>
                    <hr className="h-[1px] bg-gray-300 my-4"/>
                    <button className="w-full hidden sm:flex bg-slate-400/50 rounded-lg mt-2 h-12 font-semibold text-blue-900 hover:bg-slate-400/100 items-center px-4"><BsFacebook size={24}/> <span className="mx-auto">Facebook ile devam et</span> </button>
                </div>
            </div>
        </div>
    </div>
  )
}
