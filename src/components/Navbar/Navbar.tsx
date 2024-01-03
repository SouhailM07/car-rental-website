import "./navbar.css";
// mui
import { AppBar, Toolbar, Stack } from "@mui/material";
// assets
import car_logo from "/car-solid.svg";

export default function Navbar() {
  let arrOfLinks: string[] = ["Home", "Ride", "Services", "About", "Reviews"];
  return (
    <>
      <AppBar
        className="!bg-white !text-gray-500 !shadow-none"
        position="sticky"
      >
        <Toolbar className="justify-between font-bold text-[1.2rem]  !px-[6rem]">
          <img src={car_logo} alt="logo" className="h-[2.5rem]" />
          <Stack direction="row" spacing="1.6rem" component="ul" className="">
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
      </AppBar>
    </>
  );
}
