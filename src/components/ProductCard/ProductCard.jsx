const ProductCard = () => {
  return (
    <div className="mb-20">
      <div>
        <div className=" text-center">
          <p className=" text-center text-xl text-[#6494cc]  mb-2">
            ---Visit Us---
          </p>
        </div>
        <div className=" text-center">
          <p className="mx-auto border-b-4 w-9/12 lg:w-4/12"></p>
          <p className="text-3xl my-4 font-bold">OUR PRODUCTS</p>
          <p className="mx-auto border-b-4 mb-12 w-9/12 lg:w-4/12 "></p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 px-5 lg:px-28">
        <div className="border">
          <div className="bg-[#28C8A4]">
            <p className="absolute  bg-red-600 text-white my-8  ms-8 px-4 py-0.5 rounded-md text-sm">
              new
            </p>
            <img
              src="https://www.penguin.com.bd/wp-content/uploads/2022/10/1865NL01_2.png"
              className="w-full hover:scale-110 duration-300 px-5 pt-5"
              alt=""
            />
          </div>
          <div className="text-center">
            <h3 className="mt-3 text-lg px-5 font-bold">TITAN NP1865NL01 Workwear Black Dial Leather Strap Watch</h3>
            <p className="mt-2 font-medium text-sm">Details</p>
            <p className="text-lg font-bold mt-2 text-[#28C8A4]">$100</p>
            <p className="mt-2">Rating</p>
          </div>
          <div className="bg-gradient-to-r from-[#28C8A4] to-[#28C8A4] mt-3 text-center ">
            <button className="py-3 font-bold text-base text-white uppercase">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
