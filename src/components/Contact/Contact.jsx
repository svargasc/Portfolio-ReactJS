import React from "react";
import { Header } from "../Header/Header";

export const Contact = () => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center items-center w-screen">
        <div className="contentForm w-5/12 flex flex-col justify-center items-center h-auto p-4">
          <div className="contactInformation w-full flex flex-col items-center justify-center bg-[url('https://i.pinimg.com/originals/0b/a3/3f/0ba33f8ea44152d1d16bfddad66ef25d.jpg')] bg-cover opacity-80 h-60">
            <h1 className="text-4xl text-white font-semibold">
              Contact with me
            </h1>
            <p className="text-2xl text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              quisquam debitis fugit tempore autem dolorum commodi magnam maxime
              consequatur enim.+
            </p>
          </div>
          <form
            action="#"
            className="bg-[#e0ccf8] flex flex-col justify-center items-center h-auto p-4 w-full"
          >
            <div className="backForm bg-[#4a187d7d] w-96 flex flex-col justify-center items-center border-solid border-2 border-[#4B187D] p-2 rounded-md">
              <h1 className="font-semibold text-white">Contact us:</h1>
              <div className="p-2 w-full">
                <label
                  className="bg-[#4B187D] p-2 rounded-r-none rounded-md text-white"
                  htmlFor="nameUser"
                >
                  Name:
                </label>
                <input
                  className="bg-[#872C93] p-2 rounded-md rounded-l-none w-60 outline-none"
                  type="text"
                />
              </div>
              <div className="">
                <label
                  className="bg-[#4B187D] p-2 rounded-r-none rounded-md text-white"
                  htmlFor="emailUser"
                >
                  Email:
                </label>
                <input
                  className="bg-[#872C93] p-2 rounded-md rounded-l-none w-60 outline-none"
                  type="email"
                />
              </div>
              <div className="">
                <h2 className="font-semibold text-white">Message:</h2>
                <textarea
                  className="bg-[#872C93] w-72 rounded-md outline-none p-2"
                  name="message"
                  id=""
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <div>
                <button
                  className="bg-[#4B187D] w-36 rounded-md text-lg text-white font-semibold"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
