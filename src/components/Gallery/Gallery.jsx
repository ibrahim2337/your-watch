import { useEffect, useState } from "react";
import { Watch } from "react-loader-spinner";

const Gallery = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      <div>
        <div className=" text-center">
          <p className=" text-center text-xl text-[#28C8A4]  mb-2">
            ---Visit Us---
          </p>
        </div>
        <div className=" text-center">
          <p className="mx-auto border-b-4 w-9/12 lg:w-4/12"></p>
          <p className="text-3xl my-4 font-bold">OUR WATCH GALLERY</p>
          <p className="mx-auto border-b-4 mb-12 w-9/12 lg:w-4/12 "></p>
        </div>
      </div>
      <section className="mt-10 mb-20">
        {loading ? (
          <Watch
            height="80"
            width="80"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          false
        )}
        <div className="container flex flex-col justify-center px-5 lg:px-20 mx-auto">
          <div className=" grid grid-cols-1 gap-10 lg:grid-cols-4 sm:grid-cols-2">
            <div>
              <p className="absolute bg-red-600 text-white my-2  ms-2 px-4 py-0.5 rounded-md text-sm">
                Popular
              </p>
              <img
                className=" object-cover w-full border-2 rounded-lg aspect-square"
                src="https://www.penguin.com.bd/wp-content/uploads/2022/10/1865NL01_2.png"
              />
            </div>
            <div>
              <p className="absolute  bg-red-600 text-white my-2  ms-2 px-4 py-0.5 rounded-md text-sm">
                Popular
              </p>
              <img
                className="object-cover w-full border-2 rounded-lg aspect-square"
                src="https://www.penguin.com.bd/wp-content/uploads/2022/10/1865NL01_2.png"
              />
            </div>
            <div>
              <p className="absolute  bg-red-600 text-white my-2  ms-2 px-4 py-0.5 rounded-md text-sm">
                Popular
              </p>
              <img
                className="object-cover w-full border-2 rounded-lg aspect-square"
                src="https://www.penguin.com.bd/wp-content/uploads/2022/10/1865NL01_2.png"
              />
            </div>
            <div>
              <p className="absolute bg-red-600 text-white my-2  ms-2 px-4 py-0.5 rounded-md text-sm">
                Popular
              </p>
              <img
                className="object-cover w-full border-2 rounded-lg aspect-square"
                src="https://www.penguin.com.bd/wp-content/uploads/2022/10/1865NL01_2.png"
              />
            </div>
            <div>
              <p className="absolute  bg-red-600 text-white my-2  ms-2 px-4 py-0.5 rounded-md text-sm">
                New
              </p>
              <img
                className="object-cover w-full border-2 rounded-lg aspect-square"
                src="https://www.penguin.com.bd/wp-content/uploads/2022/10/1865NL01_2.png"
              />
            </div>
            <div>
              <p className="absolute  bg-red-600 text-white my-2  ms-2 px-4 py-0.5 rounded-md text-sm">
                New
              </p>
              <img
                className="object-cover w-full border-2 rounded-lg aspect-square"
                src="https://www.penguin.com.bd/wp-content/uploads/2022/10/1865NL01_2.png"
              />
            </div>
            <div>
              <p className="absolute  bg-red-600 text-white my-2  ms-2 px-4 py-0.5 rounded-md text-sm">
                New
              </p>
              <img
                className="object-cover w-full border-2 rounded-lg aspect-square"
                src="https://www.penguin.com.bd/wp-content/uploads/2022/10/1865NL01_2.png"
              />
            </div>
            <div>
              <p className="absolute  bg-red-600 text-white my-2  ms-2 px-4 py-0.5 rounded-md text-sm">
                new
              </p>
              <img
                className="object-cover w-full  border-2  rounded-lg aspect-square"
                src="https://www.penguin.com.bd/wp-content/uploads/2022/10/1865NL01_2.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
