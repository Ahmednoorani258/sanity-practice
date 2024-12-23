"use client";
import Form from "next/form"
import Link from "next/link";
import { BsCart3} from "react-icons/bs";
import { TbPackages } from "react-icons/tb";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white flex-wrap">
      {/* Logo */}
      <div className="flex w-full flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-500  hover:opacity-50 cursor-pointer mx-auto sm:mx-0 ">
          Shopr
        </Link>

        <Form action="search" className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0">
            <input type="text" name="query" placeholder="Search For Product" className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl" />
        </Form>

        <div className="flex space-x-4 mt-4 sm:mt-0 justify-center sm:flex-none">
            <Link href="/cart" className="flex-1 relative flex justify-center sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  hover:opacity-50 cursor-pointer">
            <BsCart3 className="w-6 h-6" />
                <span>My Cart</span>
            </Link>

            <Link href="/orders" className="flex-1 relative flex justify-center sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  hover:opacity-50 cursor-pointer">
            <TbPackages className="w-6 h-6" />
            <span>My Orders</span>
            </Link>


            <div className="flex-1 relative flex justify-center sm:flex-none items-center space-x-2 bg-gray-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  hover:opacity-50 cursor-pointer">
                Sign Up | Sign In
            </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
