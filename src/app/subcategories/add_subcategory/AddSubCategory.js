/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const AddCategory = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [size, setSize] = React.useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  return (
    <div className="container">
      <div className="head">
        <h1 className="text-[54px]">Add Sub Category</h1>
      </div>
      <div className="section bg-white w-full flex  flex-row gap-[25rem] justify-between">
        <div className="left w-full sec p-4 flex flex-col gap-5">
          <div className="flex w-fit flex-row">
            <div className="label-1 flex  flex-col gap-1 p-3 ">
              <label
                htmlFor="price"
                className="block text-[24px] leading-6 text-gray-900"
              >
                Sub Category Name
              </label>
              <div className="relative mt-2 rounded-xl shadow-sm">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-2xl border-0 py-1 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter Category Name"
                />
              </div>
            </div>
            <div className="label-1 flex  flex-col gap-1 p-3 ">
              <label
                htmlFor="price"
                className="block text-[24px] leading-6 text-gray-900"
              >
                Parent Category Name
              </label>
              <div className="relative mt-2 rounded-xl shadow-sm">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-2xl border-0 py-1 pl-3  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter Category Name"
                />
              </div>
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
        </div>
        <div className="right p-4 mt-5">
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
          <div className="3-buttons flex  justify-between mt-8">
            <button className="bg-[#1A0F91] text-white p-2 rounded-lg">
              Add Sub Category
            </button>
            <button className="p-2 rounded-lg border-[1px] text-[#1A0F91] border-[#1A0F91]">
              Delete Sub Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
