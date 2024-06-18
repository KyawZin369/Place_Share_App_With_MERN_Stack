import React, { useState } from "react";
import { Navbar, Button } from "react-daisyui";
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import NavList from "./NavList";
import DrawerItem from "./DrawerItem";
import DropBack from "../UIComponents/DropBack";

const MainNavigation = () => {
  const [sideDrawerOpen, setSideDrawer] = useState(false);

  const openhanbergerButton = () => {
    setSideDrawer(true)
  }

  const closehanbergerButton = () => {
    setSideDrawer(false)
  }

  return (
    <React.Fragment>
      {sideDrawerOpen && <DropBack className="w-3/12 h-lvh z-20 absolute right-0" onClick={()=>closehanbergerButton()}/>}
      {sideDrawerOpen && (
        <SideDrawer className=" bg-slate-800 w-9/12 h-lvh z-20 absolute">
          <DrawerItem />
        </SideDrawer>
      )}
      <MainHeader className="bg-slate-300 shadow-md">
        <Navbar className="container mx-auto p-4 crach-style">
          <div className="flex-none">
            <Button shape="square" color="ghost" onClick={()=>openhanbergerButton()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
          <div className="flex-1 text-center">
            <a href="/" className="btn btn-ghost normal-case text-xl">
              MERN App
            </a>
          </div>
          <div className="flex-none hidden md:block ">
            <NavList />
          </div>
        </Navbar>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
