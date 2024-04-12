import Image from "next/image";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link'

export default function Home() {
  
  
  return (
    <main className="">
      <div className="">
    <div className="add box flex flex-col justify-center items-center text-center gap-3 mt-16">
      <div className="w-[40%]">
      <Accordion className="">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="p-3"
        >
          Products
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-4 mt-[-20px]" >
          <Link href="/products/add_products">
          <button className="border-4 border-[#535353] w-fit p-2">
            Add Products
          </button>
          </Link>
          <Link href="/products/productslist" >
          <button className="border-4 border-[#535353] w-fit p-2">
            Products List
          </button>
          </Link>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className="w-[40%]">
      <Accordion className="">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="p-3"
        >
          Categories
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-4 mt-[-20px]" >
          <button className="border-4 border-[#535353] w-fit p-2">
            Add Categories
          </button>
          <button className="border-4 border-[#535353] w-fit p-2">
            Categories List
          </button>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className="w-[40%]">
      <Accordion className="">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="p-3"
        >
          Orders
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-4 mt-[-20px]" >
          <button className="border-4 border-[#535353] w-fit p-2">
            Add Orders
          </button>
          <button className="border-4 border-[#535353] w-fit p-2">
            Orders List
          </button>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className="w-[40%]">
      <Accordion className="">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="p-3"
        >
          Users
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-4 mt-[-20px]" >
          <button className="border-4 border-[#535353] w-fit p-2">
            Add Products
          </button>
          <button className="border-4 border-[#535353] w-fit p-2">
            Products List
          </button>
        </AccordionDetails>
      </Accordion>
      </div>

    </div>
      </div>
    </main>
  );
}
