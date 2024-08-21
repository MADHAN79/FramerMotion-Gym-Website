//mockData.js contains the array object of navbar list items
import { FaDumbbell } from "react-icons/fa";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";

const Navbar = () => {
  return (
        <>
            <nav>
            {/* container class css is added in tailwind.config.js file */}
            <div className="container">

                <div className="text-2xl flex items-center gap-2 font-bold py-8">
                  <FaDumbbell />
                  <p>Coders</p>
                  <p className="text-secondary">Gym</p>
                </div>

            </div>
            </nav>


            
        </>

  )
};

export default Navbar;
