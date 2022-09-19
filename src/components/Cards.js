import { useState,useEffect } from "react"
import cardsData from "../api/cards.json"

export default function Cards() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData)
  }, [])

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-3">
      {cards.length && cards.map(card=>(
        <div className="bg-white flex flex-col md:p-14 p-5 items-center rounded-lg text-center shadow-lg">
          <img className="w-[150px] h-[150px] mb-6" src={card.image}/>
          <h6 className="mt-2 text-primarypurp font-semibold text-lg">{card.title}</h6>
          <p className="mt-2 text-sm text-gray-700 ">{card.desctiption}</p>
        </div>
      ))}
    </div>
  )
}
