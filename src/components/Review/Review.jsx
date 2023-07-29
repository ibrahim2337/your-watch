import Marquee from "react-fast-marquee";
import ratingIcon from "../../assets/icons/rating (1).png";

const Review = () => {
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
          <p className="text-3xl my-4 font-bold">CUSTOMER REVIEWS </p>
          <p className="mx-auto border-b-4 mb-12 w-9/12 lg:w-4/12 "></p>
        </div>
      </div>

      <section className="my-8">
        <Marquee>
          <div className="flex flex-row gap-5">
            <div className="w-72">
              <div className="px-4 py-7 rounded-t-lg  bg-[#a6f5dd] sm:px-8 md:px-10">
                <p className="relative left-0 pt-5 px-5 bg-white rounded-md text-lg text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-6 text-[#28C8A4] "
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className="pb-5 text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-5 top-5 w-8 h-6 text-[#28C8A4] "
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center justify-center py-4 rounded-b-lg bg-[#28C8A4]  text-white">
                <img
                  src="https://i.ibb.co/JcGkwft/out-2.jpg"
                  alt=""
                  className="w-20 h-20  bg-center bg-cover rounded-3xl"
                />
                <div className=" flex flex-col items-center">
                  <p className="text-lg font-semibold">Ibrahim Khalilullah</p>
                  <img src={ratingIcon} className="w-28 h-6" alt="" />
                </div>
              </div>
            </div>
            <div className="w-72">
              <div className="px-4 py-7 rounded-t-lg  bg-[#a6f5dd] sm:px-8 md:px-10">
                <p className="relative left-0 pt-5 px-5 bg-white rounded-md text-lg text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-6 text-[#28C8A4] "
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className="pb-5 text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-5 top-5 w-8 h-6 text-[#28C8A4] "
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center justify-center py-4 rounded-b-lg bg-[#28C8A4]  text-white">
                <img
                  src="https://i.ibb.co/JcGkwft/out-2.jpg"
                  alt=""
                  className="w-20 h-20  bg-center bg-cover rounded-3xl"
                />
                <div className=" flex flex-col items-center">
                  <p className="text-lg font-semibold">Ibrahim Khalilullah</p>
                  <img src={ratingIcon} className="w-28 h-6 -ms-2" alt="" />
                </div>
              </div>
            </div>
            <div className="w-72">
              <div className="px-4 py-7 rounded-t-lg  bg-[#a6f5dd] sm:px-8 md:px-10">
                <p className="relative left-0 pt-5 px-5 bg-white rounded-md text-lg text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-6 text-[#28C8A4] "
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className="pb-5 text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-5 top-5 w-8 h-6 text-[#28C8A4] "
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center justify-center py-4 rounded-b-lg bg-[#28C8A4]  text-white">
                <img
                  src="https://i.ibb.co/JcGkwft/out-2.jpg"
                  alt=""
                  className="w-20 h-20  bg-center bg-cover rounded-3xl"
                />
                <div className=" flex flex-col items-center">
                  <p className="text-lg font-semibold">Ibrahim Khalilullah</p>
                  <img src={ratingIcon} className="w-28 h-6 -ms-2" alt="" />
                </div>
              </div>
            </div>
            <div className="w-72">
              <div className="px-4 py-7 rounded-t-lg  bg-[#a6f5dd] sm:px-8 md:px-10">
                <p className="relative left-0 pt-5 px-5 bg-white rounded-md text-lg text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-6 text-[#28C8A4] "
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className="pb-5 text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-5 top-5 w-8 h-6 text-[#28C8A4] "
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center justify-center py-4 rounded-b-lg bg-[#28C8A4]  text-white">
                <img
                  src="https://i.ibb.co/JcGkwft/out-2.jpg"
                  alt=""
                  className="w-20 h-20  bg-center bg-cover rounded-3xl"
                />
                <div className=" flex flex-col items-center">
                  <p className="text-lg font-semibold">Ibrahim Khalilullah</p>
                  <img src={ratingIcon} className="w-28 h-6 -ms-2" alt="" />
                </div>
              </div>
            </div>
            <div className="w-72 me-5">
              <div className="px-4 py-7 rounded-t-lg  bg-[#a6f5dd] sm:px-8 md:px-10">
                <p className="relative left-0 pt-5 px-5 bg-white rounded-md text-lg text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-6 text-[#28C8A4] "
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className="pb-5 text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-5 top-5 w-8 h-6 text-[#28C8A4] "
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center justify-center py-4 rounded-b-lg bg-[#28C8A4]  text-white">
                <img
                  src="https://i.ibb.co/JcGkwft/out-2.jpg"
                  alt=""
                  className="w-20 h-20  bg-center bg-cover rounded-3xl"
                />
                <div className=" flex flex-col items-center">
                  <p className="text-lg font-semibold">Ibrahim Khalilullah</p>
                  <img src={ratingIcon} className="w-28 h-6 -ms-2" alt="" />
                </div>
              </div>
            </div>
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Review;
