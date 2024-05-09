import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="basis-[18%] lg:basis-[24%] xl:basis-[18%] 2xl:basis-[16%] h-screen bg-slate-200 sticky top-0 lg:block hidden">
          <Sidebar />
        </div>
        <div className="basis-[100%] lg:basis-[76%] xl:basis-[82%] 2xl:basis-[84%] relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
