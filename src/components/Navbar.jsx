import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-red-100 p-3 ">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">TO-DO LIST</a>

          <ul className="flex space-x-15  ">
            <a href="#" className=" hover:text-gray-600">
              Home
            </a>
            <a href="#" className=" hover:text-gray-600">
              About
            </a>
            <a href="#" className=" hover:text-gray-600">
              Contact
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
