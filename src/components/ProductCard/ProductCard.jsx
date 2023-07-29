
const ProductCard = () => {
    return (
        <div className="grid grid-cols-3 px-28">
           <div className="border">
           <div>
                <img src="https://i.ibb.co/JcGkwft/out-2.jpg" className="h-64 w-full" alt="" />
            </div>
            <div className="text-center">
                <h3 className="mt-2">Title</h3>
                <p className="mt-2">Details</p>
                <p className="text-lg font-bold mt-2 text-[#28C8A4]">$100</p>
                <p className="mt-2">Rating</p>
            </div>
            <div className="bg-gradient-to-r from-[#28C8A4] to-[#28C8A4] mt-3 text-center ">
                <button className="py-3 font-bold text-base text-white uppercase">Add to Cart</button>
            </div>
           </div>
        </div>
    );
};

export default ProductCard;