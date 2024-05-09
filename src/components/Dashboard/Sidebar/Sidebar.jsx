import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
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

  return (
    <div>
      <div className="">
        <Link to="/">
          {/* <div className="p-4 text-center">
            <h2 className="text-4xl font-black text-white shadow-2xl cursor-pointer">
              <span className="text-[#f40027]">K</span>FC
            </h2>
          </div> */}
        </Link>
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
              <Link to="/dashboard/add-subcategory">
                <li className="bg-green-500 hover:bg-green-600 mb-2 py-2 px-4 w-full">
                  Add Subcategory
                </li>
              </Link>
              <Link to="/dashboard/add-item">
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2 w-full">
                  Add Item
                </li>
              </Link>
              <Link to={"/dashboard/all-items"}>
                <li className="bg-green-500 hover:bg-green-600 py-2 px-4 w-full">
                  All Items
                </li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
