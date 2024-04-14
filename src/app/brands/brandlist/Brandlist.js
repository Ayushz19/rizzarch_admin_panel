"use client"

import React from 'react'
import { DataGrid } from "@mui/x-data-grid";


const columns = [
    {
      field: "Category",
      headerName: "Category",
  
      sortable: false,
      width: 160,
      headerClassName: "header-color",
      align: "left",
      // valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "id",
      headerName: "Icon",
      width: 100,
      headerClassName: "header-color",
    },
  
    {
      field: "Quantity",
      headerName: "Quantity",
      type: "number",
      width: 170,
      headerClassName: "header-color",
      align: "right",
    },
    {
      field: "sale",
      headerName: "Sale",
      type: "number",
      width: 100,
      headerClassName: "header-color",
      align: "right",
    },
  
    {
      field: "Brand",
      headerName: "Start date",
      headerClassName: "header-color",
  
      sortable: false,
      width: 260,
      align: "left",
      // valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];
  
  const rows = [
    {
      Product: "Chair",
      id: "#1234",
      Price: 1200,
      Quantity: 35,
      sale: 100,
      Stock: "out of stock",
      Brand: "Seltos",
      Category: "Furniture",
    },
    {
      Product: "Table",
      id: "#21234",
      Price: 1700,
      Quantity: 135,
      sale: 12300,
      Stock: "out of stock",
      Brand: "DSGSSeltos",
      Category: "Furniture",
    },
    {
      Product: "Lights",
      id: "#12314",
      Price: 111200,
      Quantity: 2335,
      sale: 14300,
      Stock: "In stock",
      Brand: "Seltos",
      Category: "Furniture",
    },
    {
      Product: "Chair",
      id: "#122134",
      Price: 134200,
      Quantity: 325,
      sale: 1030,
      Stock: "out of stock",
      Brand: "Seltos",
      Category: "Furniture",
    },
    {
      Product: "Chair",
      id: "#122134",
      Price: 134200,
      Quantity: 325,
      sale: 1030,
      Stock: "out of stock",
      Brand: "Seltos",
      Category: "Furniture",
    },
    {
      Product: "Chair",
      id: "#122134",
      Price: 134200,
      Quantity: 325,
      sale: 1030,
      Stock: "out of stock",
      Brand: "Seltos",
      Category: "Furniture",
    },
  ];
  
const Brandlist = () => {
  return (
    <div className="container">
    <div className="flex flex-row justify-between ">
      <div className="search ">
        <form class="max-w-md mx-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-800 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#DCDFE3] focus:ring-blue-500 focus:border-blue-500 dark:bg-[#DCDFE3] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search "
              required
            />
          </div>
        </form>
      </div>
      <div>
        <button className="border-[2px] bg-white rounded-lg p-3 border-[#1A0F91] text-[#1A0F91]">
          +Add New
        </button>
      </div>
    </div>
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[2, 5]}
        checkboxSelection
        sx={{
          "& .header-color": {
            color: "grey",
            fontWeight: 700,
          },
        }}
      />
    </div>
  </div>
  )
}

export default Brandlist