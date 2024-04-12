/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Addproducts = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [size, setSize] = React.useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  return (
    <div className="main p-6">
      <div className="heading products flex ">
        <h5 className="text-[54px]">Products</h5>
      </div>
      <div className="sections bg-white w-full flex  flex-row gap-[25rem] justify-between ">
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
        <div className="right side p-4 mt-5">
          <div className="img up flex flex-col gap-4  ">
            <p className="block text-[24px] leading-6 text-gray-900">
              Upload Image
            </p>
            <div className="flex gap-4 mt-5">
              {selectedImage && (
                <div>
                  <Image
                    src={URL.createObjectURL(selectedImage)}
                    width={200}
                    height={200}
                  />
                  <br />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="bg-grey-300"
                  >
                    Remove
                  </button>
                </div>
              )}
              <input
                className=""
                type="file"
                name="myImage"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </div>
            <div className="">
              <p className="text-[14px]">
                You need to add at least four images. Pay attention to the
                quality of the pictures you add, comply with the background
                color standards. Pictures must be in certain dimensions. Notice
                that the product shows all the details.
              </p>
            </div>
          </div>
          <div className="size-date flex justify-between  ">
            <div className="size">
              <h3>Add size</h3>
              <Box sx={{ minWidth: 120 }}>
                <FormControl className="w-full">
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="Size"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>EU-41</MenuItem>
                    <MenuItem value={20}>EU-38</MenuItem>
                    <MenuItem value={30}>EU-39</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="date">
              <h3>Product Date</h3>
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      label="Select Date"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
          </div>
          <div className="3-buttons flex  justify-between mt-8">
            <button className="bg-[#1A0F91] text-white p-2 rounded-lg">
              Add Product
            </button>
            <button className="p-2 rounded-lg border-[1px] text-[#1A0F91] border-[#1A0F91]">
              Delete Product
            </button>
            <button className="p-2 rounded-lg border-[1px] border-[#535353] ">
              Schedule
            </button>
          </div>
          <div className="rest mt-6 flex flex-col gap-4">
            <div className="">
              <h3>Ratings</h3>
              <input
                type="text"
                name="price"
                id="price"
                className="block mt-2  rounded-2xl border-0 py-1 pl-3 bg-white  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="">
              <h3>FAQs</h3>
              <input
                type="text"
                name="price"
                id="price"
                className="block mt-2  rounded-2xl border-0 py-1 pl-3 bg-white  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="">
              <h3>Brands</h3>
              <input
                type="text"
                name="price"
                placeholder="Select Brands"
                id="price"
                className="block mt-2  rounded-2xl border-0 py-1 pl-3 bg-white  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="">
              <h3>Categories</h3>
              <input
                type="text"
                name="price"
                placeholder="Select Categories"
                id="price"
                className="block mt-2  rounded-2xl border-0 py-1 pl-3 bg-white  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="">
              <h3>Sub Categories</h3>
              <input
                type="text"
                name="price"
                placeholder="Select Sub categories"
                id="price"
                className="block mt-2  rounded-2xl border-0 py-1 pl-3 bg-white  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproducts;
