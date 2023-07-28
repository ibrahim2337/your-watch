const Gallery = () => {
  return (
    <div>
      <div>
        <div className=" text-center">
          <p className=" text-center text-xl text-[#6494cc]  mb-2">
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
        <div className="container flex flex-col justify-center px-5 lg:px-20 mx-auto">
          <div className=" grid grid-cols-1 gap-10 lg:grid-cols-4 sm:grid-cols-2">
            <div>
              <p className="absolute bg-black text-white my-2 ms-2 px-3 py-1 rounded-lg">
                Popular
              </p>
              <img
                className=" object-cover w-full rounded-lg aspect-square"
                src="https://i.ibb.co/DYNJK12/pexels-photo-1857375.jpg"
              />
            </div>
            <div>
              <p className="absolute bg-black text-white my-2 ms-2 px-3 py-1 rounded-lg">
                Popular
              </p>
              <img
                className="object-cover w-full  rounded-lg aspect-square"
                src="https://i.ibb.co/t3Ndt8P/pexels-photo-2755612.jpg"
              />
            </div>
            <div>
              <p className="absolute bg-black text-white my-2  ms-2 px-3 py-1 rounded-lg">
                Popular
              </p>
              <img
                className="object-cover w-full  rounded-lg aspect-square"
                src="https://i.ibb.co/TtnDHb9/pexels-photo-2737004.jpg"
              />
            </div>
            <div>
              <p className="absolute bg-black text-white my-2  ms-2 px-3 py-1 rounded-lg">
                Popular
              </p>
              <img
                className="object-cover w-full  rounded-lg aspect-square"
                src="https://i.ibb.co/F6hCy6j/pexels-photo-2681751.jpg"
              />
            </div>
            <div>
              <p className="absolute bg-black text-white my-2  ms-2 px-3 py-1 rounded-lg">
                Popular
              </p>
              <img
                className="object-cover w-full  rounded-lg aspect-square"
                src="https://i.ibb.co/WVNxQkx/pexels-photo-2584269.jpg"
              />
            </div>
            <div>
              <p className="absolute bg-black text-white my-2  ms-2 px-3 py-1 rounded-lg">
                Popular
              </p>
              <img
                className="object-cover w-full  rounded-lg aspect-square"
                src="https://i.ibb.co/9868hrD/pexels-photo-2829373.jpg"
              />
            </div>
            <div>
              <p className="absolute bg-black text-white my-2  ms-2 px-3 py-1 rounded-lg">
                Popular
              </p>
              <img
                className="object-cover w-full  rounded-lg aspect-square"
                src="https://i.ibb.co/txSTCQn/pexels-photo-2034435.jpg"
              />
            </div>
            <div>
              <p className="absolute bg-black text-white my-2  ms-2 px-3 py-1 rounded-lg">
                Popular
              </p>
              <img
                className="object-cover w-full  rounded-lg aspect-square"
                src="https://i.ibb.co/ZfsPCjq/wedding-dresses-fashion-character-bride-157757.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
