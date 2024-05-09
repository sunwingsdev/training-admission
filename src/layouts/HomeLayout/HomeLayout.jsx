import { Outlet } from "react-router-dom";
import Navbar from "../../components/Home/Navbar/Navbar";
import NavbarTop from "../../components/Home/NavbarTop/NavbarTop";

const HomeLayout = () => {
  return (
    <div className="relative">
      <NavbarTop />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
