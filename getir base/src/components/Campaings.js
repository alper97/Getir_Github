import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Banners from '../api/banners.json'

export default function Campaings() {

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
}, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive:[
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };


  return (
    <div className="container mx-auto">
      <h3 className="text-sm font-semibold mb-3 py-4">Kampanyalar</h3>
      <div>
      <Slider {...settings}>
            {banners.length && banners.map((banner, index) => (
                    <div key={banner.id}>
                        <picture className="block md:px-2 ">
                            <img src={banner.image} className="md:rounded-lg" />
                        </picture>
                    </div>
                ))}
        </Slider>
      </div>
    </div>

  )
}
