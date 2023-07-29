import ratingIcon from "../../assets/icons/rating (1).png";

const ProductCard = () => {
  return (
    <div className="mb-20">
      <div>
        <div className=" text-center">
          <p className=" text-center text-xl text-[#28C8A4]  mb-2">
            ---Visit Us---
          </p>
        </div>
        <div className=" text-center">
          <p className="mx-auto border-b-4 w-9/12 lg:w-4/12"></p>
          <p className="text-3xl my-4 font-bold">OUR PRODUCTS</p>
          <p className="mx-auto border-b-4 mb-12 w-9/12 lg:w-4/12 "></p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 px-5 lg:px-28">
        <div className="border">
          <div className="bg-[#28C8A4]">
            <p className="absolute  bg-red-600 text-white my-8  ms-8 px-4 py-0.5 rounded-md text-sm">
              -30%
            </p>
            <img
              src="https://www.penguin.com.bd/wp-content/uploads/2022/10/1865NL01_2.png"
              className="w-full hover:scale-110 duration-300 px-5 pt-5"
              alt=""
            />
          </div>
          <div className="text-center ">
            <h3 className="pt-4 text-lg px-5 font-bold">
              TITAN NP1865NL01 Workwear Black Dial Leather Strap Watch
            </h3>
            <p className="mt-2 font-medium text-sm">Details</p>
            <p className="text-2xl font-bold mt-2 text-[#28C8A4]">$100</p>
            <div className="flex flex-row justify-center mt-2">
              <img src={ratingIcon} className="w-24 h-5" alt="" />
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-[#28C8A4] to-[#459483] rounded-tr-full rounded-tl-full
           text-center mt-3 "
          >
            <button className="py-3 font-bold text-base  text-white uppercase">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="border">
          <div className="bg-[#28C8A4]">
            <p className="absolute  bg-red-600 text-white my-8  ms-8 px-4 py-0.5 rounded-md text-sm">
              -30%
            </p>
            <img
              src="https://www.penguin.com.bd/wp-content/uploads/2022/10/1865NL01_2.png"
              className="w-full hover:scale-110 duration-300 px-5 pt-5"
              alt=""
            />
          </div>
          <div className="text-center">
            <h3 className="pt-4 text-lg px-5 font-bold">
              TITAN NP1865NL01 Workwear Black Dial Leather Strap Watch
            </h3>
            <p className="mt-2 font-medium text-sm">Details</p>
            <p className="text-2xl font-bold mt-2 text-[#28C8A4]">$100</p>
            <div className="flex flex-row justify-center mt-2">
              <img src={ratingIcon} className="w-24 h-5" alt="" />
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-[#28C8A4] to-[#459483] rounded-tr-full rounded-tl-full
           text-center mt-3 "
          >
            <button className="py-3 font-bold text-base  text-white uppercase">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="border">
          <div className="bg-[#28C8A4]">
            <p className="absolute  bg-red-600 text-white my-8  ms-8 px-4 py-0.5 rounded-md text-sm">
              -30%
            </p>
            <img
              src="https://www.penguin.com.bd/wp-content/uploads/2022/10/1865NL01_2.png"
              className="w-full hover:scale-110 duration-300 px-5 pt-5"
              alt=""
            />
          </div>
          <div className="text-center">
            <h3 className="pt-4 text-lg px-5 font-bold">
              TITAN NP1865NL01 Workwear Black Dial Leather Strap Watch
            </h3>
            <p className="mt-2 font-medium text-sm">Details</p>
            <p className="text-2xl font-bold mt-2 text-[#28C8A4]">$100</p>
            <div className="flex flex-row justify-center mt-2">
              <img src={ratingIcon} className="w-24 h-5" alt="" />
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-[#28C8A4] to-[#459483] rounded-tr-full rounded-tl-full
           text-center mt-3 "
          >
            <button className="py-3 font-bold text-base  text-white uppercase">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
