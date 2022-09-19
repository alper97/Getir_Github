import { BsApple } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';
import { SiHuawei } from 'react-icons/si';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { RiGlobalLine } from 'react-icons/ri';


export default function Footer() {


  return (
    <div className='bg-white shadow-lg mt-16'>
      <div className='container mx-auto py-14 lg:flex lg:justify-between grid grid-cols-2 gap-y-6 lg:flex-row'>
        <div>
          <h6 className='text-xl text-primarypurp'></h6>
          <button className='flex rounded-lg bg-gray-900 items-center px-3 py-2 my-5 mr-2 text-white min-w-max'><BsApple size={25}/> <div className='pl-2'><p className='  font-semibold'>App Store'dan</p> <p className=' font-light items-start flex text-xs'>indirin</p></div></button>
          <button className='flex rounded-lg bg-gray-900 items-center px-3 py-2 my-5 mr-2 text-white min-w-max'><FaGooglePlay size={25}/> <div className='pl-2'><p className='  font-semibold'>Google Play &nbsp;&nbsp;&nbsp;</p> <p className=' font-light items-start flex text-xs'>'DEN ALIN</p></div></button>
          <button className='flex rounded-lg bg-gray-900 items-center px-3 py-2 my-5 mr-2 text-white min-w-max'><SiHuawei size={25}/> <div className='pl-2'><p className='  font-semibold'>AppGallery &nbsp;&nbsp;&nbsp;</p> <p className=' font-light items-start flex text-xs'>İLE KEŞFEDİN</p></div></button>          
        </div>
        <div>
          <h6 className='text-xl text-primarypurp'>Getir'i keşfedin</h6>
          <div className='pt-4 font-light text-gray-600 flex flex-col text-base gap-y-3'>
            <a href="#"><span>Hakkımızda</span></a>
            <a href="#"><span>Kariyer</span></a>
            <a href="#"><span>Teknoloji Kariyerleri</span></a>
            <a href="#"><span>İletişim</span></a>
            <a href="#"><span>COVID-19 Duyuru</span></a>
            <a href="#"><span>Sosyal Sorumluluk Projeleri</span></a>
          </div>
        </div>
        <div>
          <h6 className='text-xl text-primarypurp'>Yardıma mı ihtiyacınız var?</h6>
          <div className='pt-4 font-light text-gray-600 flex flex-col text-base gap-y-3'>
            <a href="#"><span>Sıkça Sorulan Sorular</span></a>
            <a href="#"><span>Kişisel Verilerin Korunması</span></a>
            <a href="#"><span>Gizlilik Politikası</span></a>
            <a href="#"><span>Kullanım Koşulları</span></a>
            <a href="#"><span>Çerez Politikası</span></a>
          </div>
        </div>
        <div>
          <h6 className='text-xl text-primarypurp'>İş Ortağımız Olun</h6>
          <div className='pt-4 font-light text-gray-600 flex flex-col text-base gap-y-3'>
            <a href="#"><span>Bayimiz Olun</span></a>
            <a href="#"><span>Deponuzu Kiralayın</span></a>
            <a href="#"><span>GetirYemek Restoranı Olun</span></a>
            <a href="#"><span>GetirÇarşı İşletmesi Olun</span></a>
          </div>
        </div>
        <div className='p-5 border-[1px] h-full shadow-md rounded-lg'>
          <img className='w-[72px] ' src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png"/>
        </div>
      </div>
      <div className='container mx-auto border-t-2 flex justify-between items-center'>
        <div className='flex text-sm text-gray-700 py-3 gap-x-5'>
          <p>© 2022 Getir</p><li className='text-primarypurp'><a href="#">Bilgi Toplumu Hizmetleri</a></li>
        </div>
        <div className='flex py-8 gap-2 opacity-70'>
          <a href="#" className='hover:text-primarypurp hover:bg-primarypurp hover:bg-opacity-30 p-2 rounded-lg'><BsFacebook size={20}/></a>
          <a href="#" className='hover:text-primarypurp hover:bg-primarypurp hover:bg-opacity-30 p-2 rounded-lg'><BsTwitter size={20}/></a>
          <a href="#" className='hover:text-primarypurp hover:bg-primarypurp hover:bg-opacity-30 p-2 rounded-lg'><BsInstagram size={20}/></a>
          <a href="#" className='hover:text-primarypurp hover:bg-primarypurp hover:bg-opacity-30 p-2 rounded-lg border-[1px] flex gap-3 text-sm shadow-md'><RiGlobalLine size={20}/>Türkçe (TR)</a>
        </div>
      </div>
    </div>
  )
}
