import React from "react";
import { useState } from "react";
// style
import "./navbar.css";
// mui
import { AppBar, Toolbar, Stack } from "@mui/material";
// components
import { Navbar_mobile } from "../../components";
// assets
import car_logo from "/car-solid.svg";
import menu_logo from "/bx-menu.svg";
//@ts-ignore
export const PanelContext = React.createContext();

export default function Navbar() {
  let arrOfLinks: string[] = ["Home", "Ride", "Services", "About", "Reviews"];
  let [openPanel, setOpenPanel] = useState<boolean>(false);
  return (
    <>
      <PanelContext.Provider value={{ openPanel, setOpenPanel }}>
        <AppBar
          className="!bg-white !text-gray-500 !shadow-none"
          position="sticky"
        >
          <Toolbar className="justify-between font-bold text-[1.2rem]  lg:!px-[6rem]">
            <img src={car_logo} alt="logo" className="h-[2.5rem]" />
            <button className="lg:hidden" onClick={() => setOpenPanel(true)}>
              <img src={menu_logo} alt="logo" />
            </button>
            <Stack
              direction="row"
              spacing="1.6rem"
              component="ul"
              className="lg:!flex !hidden"
            >
              {arrOfLinks.map((e, i) => {
                return (
                  <li
                    key={i}
                    className="links text-center cursor-pointer w-[6rem]"
                  >
                    <a href={"#" + e}>{e}</a>
                    <div className="h-0.5 w-0 rounded-xl translate-y-1 bg-orange-500"></div>
                  </li>
                );
              })}
            </Stack>
            <div className="flex space-x-[2rem]">
              <button className="">Sign Up</button>
              <button className="bg-blue-500 rounded-xl px-[2rem] py-[0.8rem] text-white">
                Sign In
              </button>
            </div>
          </Toolbar>
          <Navbar_mobile />
        </AppBar>
      </PanelContext.Provider>
    </>
  );
}
