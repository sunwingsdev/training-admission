import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { useToasts } from "react-toast-notifications";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const { addToast } = useToasts();
  const [collapsed, setCollapsed] = useState({
    admission: true,
    branch: true,
    saleHistory: true,
    stockManager: true,
    paymentGateway: true,
    setting: true,
  });

  const toggleCollapse = (dropdown) => {
    setCollapsed((prevState) => {
      const updatedCollapsed = {};
      // Close all collapses except the one being toggled
      Object.keys(prevState).forEach((key) => {
        updatedCollapsed[key] = key === dropdown ? !prevState[key] : true;
      });
      return updatedCollapsed;
    });
  };

  const handleLogout = async () => {
    try {
      await logOut();
      addToast("Logged out successfully", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error) {
      addToast(error.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div>
      <div className="">
        <ul className="flex gap-2 flex-col p-4 text text-base">
          <li className=" text-white cursor-pointer">
            <div
              className="bg-green-600 hover:bg-green-700  duration-300 py-2 px-4 flex gap-2 items-center lg:text-lg"
              onClick={() => toggleCollapse("admission")}
            >
              {/* <MdOutlineRestaurantMenu /> */}
              Admission
            </div>
            <ul
              className={`pl-4 mt-2 text-sm lg:text-base ${
                collapsed.admission
                  ? "hidden"
                  : "block transition-all ease-in duration-500"
              }`}
            >
              <Link to="/dashboard/admission-student">
                <li className="bg-green-500 hover:bg-green-600 mb-2 py-2 px-4 w-full">
                  Admission Student List
                </li>
              </Link>
            </ul>
          </li>
          <li
            onClick={handleLogout}
            className="text-white cursor-pointer bg-green-600 hover:bg-green-700  duration-300 py-2 px-4 flex gap-2 items-center lg:text-lg"
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
