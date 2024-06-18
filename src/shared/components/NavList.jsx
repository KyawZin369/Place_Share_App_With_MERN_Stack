import React from "react";
import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <ul role="tablist" className="tabs flex space-x-4">
      <li role="tab" className="tab">
        <NavLink
          exact
          to="/"
          className={({ isActive }) =>
            isActive ? "tab tab-active bg-blue-400 text-white no-underline" : "tab hover:bg-blue-400 hover:text-white no-underline"
          }
        >
          All Users
        </NavLink>
      </li>
      <li role="tab" className="tab">
        <NavLink
          to="/u2/place"
          className={({ isActive }) =>
            isActive ? "tab tab-active bg-blue-400 text-white no-underline" : "tab hover:bg-blue-400 hover:text-white no-underline"
          }
        >
          My Places
        </NavLink>
      </li>
      <li role="tab" className="tab">
        <NavLink
          to="/add-place"
          className={({ isActive }) =>
            isActive ? "tab tab-active bg-blue-400 text-white no-underline" : "tab hover:bg-blue-400 hover:text-white no-underline"
          }
        >
          Add Place
        </NavLink>
      </li>
      <li role="tab" className="tab">
        <NavLink
          to="/authenticate"
          className={({ isActive }) =>
            isActive ? "tab tab-active bg-blue-400 text-white no-underline" : "tab hover:bg-blue-400 hover:text-white no-underline"
          }
        >
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
