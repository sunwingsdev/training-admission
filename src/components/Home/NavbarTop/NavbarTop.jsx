import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const NavbarTop = () => {
  return (
    <div className="text-white gradientBg py-3">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center gap-12">
          <div className="flex flex-row gap-2 justify-center items-center">
            <FaPhoneAlt size={20} />
            <p>01329747927</p>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <HiOutlineMail size={30} />
            <p>sunwingsdev@gmail.com</p>
          </div>
        </div>
        <div>
          <p>address</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
