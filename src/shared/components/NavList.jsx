import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../Context/LoginContext";
import { Button } from "react-daisyui";

const NavList = () => {
  const auth = useContext(authContext);

  return (
    <ul role="tablist" className="tabs flex space-x-4">
      <li role="tab" className="tab">
        <NavLink
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
      {auth.isLoggedIn && (
        <li role="tab" className="tab">
          <NavLink
            to="/u2/place"
            className={({ isActive }) =>
              isActive
                ? "tab tab-active bg-blue-400 text-white no-underline"
                : "tab hover:bg-blue-400 hover:text-white no-underline"
            }
          >
            My Places
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li role="tab" className="tab">
          <NavLink
            to="/place/new"
            className={({ isActive }) =>
              isActive
                ? "tab tab-active bg-blue-400 text-white no-underline"
                : "tab hover:bg-blue-400 hover:text-white no-underline"
            }
          >
            Add Place
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li role="tab" className="tab">
          <NavLink
            to="/Auth"
            className={({ isActive }) =>
              isActive
                ? "tab tab-active bg-blue-400 text-white no-underline"
                : "tab hover:bg-blue-400 hover:text-white no-underline"
            }
          >
            Authenticate
          </NavLink>
        </li>
      )}
      {
        auth.isLoggedIn && (
          <li role="tab" className="tab mb-4">
            <Button
            onClick={auth.logout}
            className="tab bg-blue-400 text-white hover:bg-blue-700 no-underline border-0"
          >
            LOG OUT
          </Button>
          </li>
        )
      }
    </ul>
  );
};

export default NavList;
