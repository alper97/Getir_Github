export default function ProductItem({product}) {
  return (
    <div className="bg-white relative flex flex-col gap-y-1 p-3 items-center text-center font-semibold text-sm">
        <img src={product.image} alt={product.title} />
        <div className="text-primarypurp">₺ {product.price}</div>
        <div>{product.title}</div>
        <div className="font-normal text-gray-500">{product.alt}</div>
        <button className="absolute hover:bg-primarypurp hover:border-0 hover:text-primaryyellow font-semibold text-primarypurp text-xl border-[1px] px-2 py-1 rounded-lg bg-white drop-shadow-md right-4">+</button>
    </div>
  )
}
