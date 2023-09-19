interface Itemtype {
    Item: {
        id: number;
        title: string;
        description: string;
        price: number;
        image: string;
        rating: {
            rate: string,
            count: number,
        }
    }
}

const Product = (props: Itemtype) => {
    const { id, title, description, price, image , rating } = props.Item;
    return (
        <div className="rounded overflow-hidden shadow-xl h-full flex flex-col">           
            <img src={image} alt="Product" className="w-32 h-32 m-auto" />
            <div className="px-6 py-4">
                <div className="font-bold text-base mb-2">
                    <h4>{id}. {title}</h4>
                </div>
                <p className="text-gray-700 text-xs line-clamp-3">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-2 pb-2">
                <span className="text-xs block font-semibold">Price: ${price}</span>
                <span className="text-xs block font-semibold">Quantity: {rating.count}</span>
                <span className="text-xs block font-semibold">Rating: {rating.rate}</span>
            </div>
            <div className="">
                <button className="w-full bg-emerald-600 text-gray-2 font-semibold">Add to Cart</button>
            </div>
        </div>
    )
}

export default Product