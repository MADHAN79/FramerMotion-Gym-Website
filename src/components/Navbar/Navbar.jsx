// react icons: https://www.npmjs.com/package/react-icons
// npm install react-icons --save
// https://react-icons.github.io/react-icons/
import { FaDumbbell } from "react-icons/fa";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";

import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {

  //for Hamburger menu:
  const [open, setOpen] = useState(false);

  return (
        <>
            <nav>
            {/* container class css is added in tailwind.config.js file */}
            <div className="container flex justify-between items-center py-8">

                <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                  <FaDumbbell />
                  <p>Coders</p>
                  <p className="text-secondary">Gym</p>
                </div>

                <div className="hidden md:block">
                  <ul className="flex items-center gap-6 text-gray-600">
                    {NavbarMenu.map((item) => {  //this array object in mockData > data.js
                      return (
                        <li key={item.id}>
                          <a href={item.link} className="inline-block py-1 px-3 hover:text-primary font-semibold"> {item.title} </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="flex items-center gap-4">
                  <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                    <CiSearch />
                  </button>
                  <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                    <PiShoppingCartThin />
                  </button><button className="text-primary hover:bg-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
                    Login
                  </button>
                </div>

                {/* Hamburger Menu for small screen devices */}
                {/* onclick changing the state of Hamburger menu */}
                <div className="md:hidden" onClick={() =>setOpen(!open)} > 
                    <MdMenu className="text-4xl" />
                </div>

            </div>
            </nav>

        <ResponsiveMenu open={open} />
            
        </>

  )
};

export default Navbar;
