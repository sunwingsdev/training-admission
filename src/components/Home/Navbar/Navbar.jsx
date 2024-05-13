import { IoBookOutline } from "react-icons/io5";
import logo from "../../../assets/logo/logo.jpg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-20">
      <div className=" flex items-center justify-between flex-row container mx-auto py-[8px]">
        <img className="w-20" src={logo} alt="" />
        <div className="flex flex-row gap-8">
          <ul className="flex flex-row items-center justify-center gap-8 text-[18px] font-semibold text-[#1f1e1e]">
            <NavLink
              className={({ isActive }) =>
                `hover:border-b-2 hover:border-[#ff1e1e] ${
                  isActive && "border-b-2 border-[#ff1e1e] "
                }`
              }
              to={"/"}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `hover:border-b-2 hover:border-[#ff1e1e] ${
                  isActive && "border-b-2 border-[#ff1e1e] "
                }`
              }
              to={"/about-us"}
            >
              <li>About us</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `hover:border-b-2 hover:border-[#ff1e1e] ${
                  isActive && "border-b-2 border-[#ff1e1e] "
                }`
              }
              to={"/success-story"}
            >
              <li>Success story</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `hover:border-b-2 hover:border-[#ff1e1e] ${
                  isActive && "border-b-2 border-[#ff1e1e] "
                }`
              }
              to={"/contact"}
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <PrimaryButton
            icon={IoBookOutline}
            text={"Browse Course"}
            arrow={true}
          >
            Browse
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
