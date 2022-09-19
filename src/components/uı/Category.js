export default function Category({ category: {id, title, image} }) {

    return (
        <a href="#" className="flex flex-col font-semibold tracking-tight text-gray-600 items-center gap-y-2 transition hover:bg-purple-50 text-center p-4 hover:text-primarypurp">
            <img src={image} alt={title} className="w-12 rounded border-gray-200 border-[1px]"/>
            <span className="text-sm whitespace-nowrap ">{title}</span>
        </a>
    )
}