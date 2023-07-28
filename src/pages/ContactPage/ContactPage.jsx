import phone from "../../assets/contact/phone.png";
import location from "../../assets/contact/location.png";
import clock from "../../assets/contact/clock.png";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_921npf3', 'template_ppiwlyq', form.current, 'GeKPzMP0z0QSv5ZIC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="mb-5">
      <div className="">
        <div>
          <div className=" text-center mt-7">
            <p className=" text-center text-xl text-[#6494cc]  mb-2">
              ---Visit Us---
            </p>
          </div>
          <div className=" text-center">
            <p className="mx-auto border-b-4 w-9/12 lg:w-4/12"></p>
            <p className="text-3xl my-4 font-bold">OUR LOCATION </p>
            <p className="mx-auto border-b-4 mb-12 w-9/12 lg:w-4/12 "></p>
          </div>
          <div className="container mx-auto px-5 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:px-40 text-center  ">
            <div className="border rounded-b-3xl">
              <div className=" bg-[#7ba4d3]  py-3">
                <img className="w-6 h-6 mx-auto" src={phone} />
              </div>
              <div className="bg-[#dfeafc] py-10 mx-5 mb-5 rounded-b-3xl">
                <h3 className="text-lg font-bold mb-2">PHONE</h3>
                <p className="text-sm">+38 (012) 34 56 789</p>
                <p className="text-sm">+38 (012) 34 56 789</p>
              </div>
            </div>
            <div className="border rounded-b-3xl">
              <div className=" bg-[#7ba4d3]  py-3">
                <img className="w-6 h-6 mx-auto" src={location} />
              </div>
              <div className="bg-[#dfeafc] py-10 mx-5 mb-5 rounded-b-3xl">
                <h3 className="text-lg font-bold mb-2">ADDRESS</h3>
                <p className="text-sm">+38 (012) 34 56 789</p>
                <p className="text-sm">+38 (012) 34 56 789</p>
              </div>
            </div>
            <div className="border rounded-b-3xl">
              <div className=" bg-[#7ba4d3]  py-3">
                <img className="w-6 h-6 mx-auto" src={clock} />
              </div>
              <div className="bg-[#dfeafc] py-10 mx-5 mb-5 rounded-b-3xl">
                <h3 className="text-lg font-bold mb-2">WORKING HOURS</h3>
                <p className="text-sm">Mon - Fri: 08:00 - 22:00 </p>
                <p className="text-sm">Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mt-20">
          <p className="text-center text-xl text-[#6494cc] mb-2">
            ---Send Us a Message---
          </p>
        </div>
        <div className=" text-center">
          <p className="mx-auto border-b-4 w-9/12 lg:w-4/12"></p>
          <p className="text-3xl my-4 font-bold">CONTACT FORM </p>
          <p className="mx-auto border-b-4 mb-12 w-9/12 lg:w-4/12"></p>
        </div>

        <div className="container mx-auto text-center ">
          <div className="px-5  lg:px-40">
            <div className="p-4 py-6 rounded-lg bg-[#dfeafc]  md:p-8">
              <form ref={form} onSubmit={sendEmail}>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-md font-semibold text-start">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Enter Your First Name"
                      className="block w-full px-5 py-2.5 mt-2 rounded-md placeholder-gray-400  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-md font-semibold text-start">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Enter Your Last Name"
                      className="block w-full px-5 py-2.5 mt-2 rounded-md placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-md font-semibold text-start">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Enter Your Email Address"
                    className="block w-full px-5 py-2.5 mt-2 rounded-md placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-md font-semibold text-start">
                    Message
                  </label>
                  <textarea
                    className="block w-full px-5 py-2.5 mt-2 mb-10 rounded-md placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3   text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg bg-gradient-to-r from-[#7ba4d3] to-[#a8c6eb] ">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
        
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
