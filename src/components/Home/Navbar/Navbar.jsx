import { IoBookOutline } from "react-icons/io5";
import logo from "../../../assets/logo/logo.jpg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
const Navbar = () => {
  return (
    <div className="bg-white z-50 flex items-center justify-between flex-row container mx-auto py-[15px] sticky top-0">
      <img className="w-20" src={logo} alt="" />
      <div className="flex flex-row gap-8">
        <ul className="flex flex-row items-center justify-center gap-8 text-[18px] font-semibold text-[#1f1e1e]">
          <li>Home</li>
          <li>About us</li>
          <li>Success story</li>
          <li>Freelancing</li>
          <li>Contact</li>
        </ul>
        <PrimaryButton icon={IoBookOutline} text={"Browse Course"} arrow={true}>
          Browse
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Navbar;
