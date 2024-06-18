import React from "react";
import { NavLink } from "react-router-dom";

const DrawerItem = () => {
  return (
    <div>
      <ul role="tablist" className="tabs flex flex-col items-center h-lvh justify-center">
        <li role="tab" className="tab m-4 text-gray-300">
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              isActive
                ? "tab tab-active bg-blue-400 text-white no-underline"
                : "tab hover:bg-blue-400 hover:text-white no-underline"
            }
          >
            All Users
          </NavLink>
        </li>
        <li role="tab" className="tab m-4 text-gray-300">
          <NavLink
            to="/my-places"
            className={({ isActive }) =>
              isActive
                ? "tab tab-active bg-blue-400 text-white no-underline"
                : "tab hover:bg-blue-400 hover:text-white no-underline"
            }
          >
            My Places
          </NavLink>
        </li>
        <li role="tab" className="tab m-4 text-gray-300">
          <NavLink
            to="/add-place"
            className={({ isActive }) =>
              isActive
                ? "tab tab-active bg-blue-400 text-white no-underline"
                : "tab hover:bg-blue-400 hover:text-white no-underline"
            }
          >
            Add Place
          </NavLink>
        </li>
        <li role="tab" className="tab m-4 text-gray-300">
          <NavLink
            to="/authenticate"
            className={({ isActive }) =>
              isActive
                ? "tab tab-active bg-blue-400 text-white no-underline"
                : "tab hover:bg-blue-400 hover:text-white no-underline"
            }
          >
            Authenticate
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DrawerItem;
