export default function Card ({ products }) {
    return (
        <div className="max-w-sm bg-cyan-200 border border-gray-200 rounded-lg shadow mt-5">
            <div className="h-40 flex justify-center">
                <img className="h-40 m-2 rounded-lg" src={products.thumbnail} />
            </div>
            <div className="p-4">
                <div className="border-b border-gray-400">
                    {products.title}
                </div>
                <div className="flex">
                    <img className="w-4" src="/images/category.svg"/><p>{products.category}</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex">
                        <img className="w-4" src="/images/price.svg"/><p className="px-1 underline underline-offset-1">{products.price}</p>
                    </div>
                    <div className="flex">
                        <img className="w-4" src="/images/box.svg"></img><p>{products.stock}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}