import React from "react";

const Addproducts = () => {
  return (
    <div className="main p-6">
      <div className="heading products flex ">
        <h5 className="text-[54px]">Products</h5>
      </div>
      <div className="sections bg-white w-fit">
        <div className="left-sec p-4">
          <div className="label-1 flex  flex-col gap-1 p-3">
            <label
              htmlFor="price"
              className="block text-[24px] leading-6 text-gray-900"
            >
              Product Name
            </label>
            <div className="relative mt-2 rounded-xl shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-2xl border-0 py-1 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter Product Name"
              />
            </div>
          </div>
          <div className="label-1 flex  flex-col gap-1 p-3">
            <label
              htmlFor="price"
              className="block text-[24px] leading-6 text-gray-900"
            >
              Category
            </label>
            <div className="relative mt-2 rounded-xl shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-2xl border-0 py-1 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Choose Category"
              />
            </div>
          </div>
          <div className="label-1 flex  flex-col gap-1 p-3">
            <label
              htmlFor="price"
              className="block text-[24px] leading-6 text-gray-900"
            >
              Gender
            </label>
            <div className="relative mt-2 rounded-xl shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-2xl border-0 py-1 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Choose Gender"
              />
            </div>
          </div>
          <div className="label-1 flex  flex-col gap-1 p-3">
            <label
              htmlFor="price"
              className="block text-[24px] leading-6 text-gray-900"
            >
              Brand
            </label>
            <div className="relative mt-2 rounded-xl shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-2xl border-0 py-1 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Choose Brand"
              />
            </div>
          </div>
          <div className="label-1 flex  flex-col gap-1 p-3">
            <label
              htmlFor="price"
              className="block text-[24px] leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="relative mt-2 rounded-xl shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-[20rem] h-[20rem] rounded-2xl border-0 py-1 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="size-box p-3 flex flex-row gap-4 ">
            <p className="block text-[24px] leading-6 text-gray-900">Size</p>
            <div className="flex flex-row gap-3 justify-center items-center text-center">
              <button className="bg-[#E3E5E7] rounded-lg p-1 px-2">L</button>
              <button className="bg-[#E3E5E7] rounded-lg p-1 px-2">M</button>
              <button className="bg-[#E3E5E7] rounded-lg p-1 px-2">S</button>
            </div>
          </div>
          <div className="colors p-3 flex flex-row gap-4 ">
            <p className="block text-[24px] leading-6 text-gray-900">Colors</p>
            <div className="all colors flex flex-row gap-3">
              <div className="w-5 h-5 rounded-full bg-[#BDBDBD]"></div>
              <div className="w-5 h-5 rounded-full bg-[#705041]"></div>
              <div className="w-5 h-5 rounded-full bg-[#AD7558]"></div>
            </div>
          </div>
          <div className="size-box p-3 flex flex-row gap-4 ">
            <p className="block text-[24px] leading-6 text-gray-900">
              Quantity
            </p>
            <div className="flex flex-row gap-3 justify-center items-center text-center">
              <button className="bg-[#E3E5E7] rounded-lg p-1 px-2">L</button>
              <button className="bg-[#E3E5E7] rounded-lg p-1 px-2">M</button>
              <button className="bg-[#E3E5E7] rounded-lg p-1 px-2">S</button>
            </div>
          </div>
          <div className="label-1 flex  flex-col gap-1 p-3">
            <label
              htmlFor="price"
              className="block text-[24px] leading-6 text-gray-900"
            >
              Product Detail
            </label>
            <div className="relative mt-2 rounded-xl shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-[20rem] h-[10rem] rounded-2xl border-0 py-1 pl-3 bg-white  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
              />
            </div>
          </div>
          <div className="label-1 flex  flex-col gap-1 p-3">
            <label
              htmlFor="price"
              className="block text-[24px] leading-6 text-gray-900"
            >
             Specifications
            </label>
            <div className="relative mt-2 rounded-xl shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-[20rem] h-[10rem] rounded-2xl border-0 py-1 pl-3 bg-white  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
              />
            </div>
          </div>
          <div className="label-1 flex  flex-col gap-1 p-3">
            <label
              htmlFor="price"
              className="block text-[24px] leading-6 text-gray-900"
            >
              Techincal Specifications
            </label>
            <div className="relative mt-2 rounded-xl shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-[20rem] h-[10rem] rounded-2xl border-0 py-1 pl-3 bg-white  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
              />
            </div>
          </div>
          <div className="label-1 flex  flex-col gap-1 p-3">
            <label
              htmlFor="price"
              className="block text-[24px] leading-6 text-gray-900"
            >
              Customer Review
            </label>
            <div className="relative mt-2 rounded-xl shadow-sm">
              <input
                type="text"
                name="price"
                id="price"
                className="block w-[20rem] h-[10rem] rounded-2xl border-0 py-1 pl-3 bg-white  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproducts;
