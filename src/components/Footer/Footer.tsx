import "./footer.css";
// mui
import { Stack } from "@mui/material";
// assets
import twitter_logo from "/bxl-twitter.svg";
import facebook_logo from "/bxl-facebook.svg";
import instagram_logo from "/bxl-instagram.svg";

export default function Footer() {
  let arrOfLinks: string[] = [facebook_logo, twitter_logo, instagram_logo];
  return (
    <>
      <footer>
        <div className="bg-gradient-to-r space-y-[2rem] from-orange-600 to-orange-400 flex justify-center items-center h-[20rem] flex-col">
          <h2 className="text-[2.7rem] font-bold text-white">
            Subscribe To NewsLetter
          </h2>
          <div className="flex bg-white py-[0.6rem] font-medium rounded-lg px-[1rem]">
            <input
              type="text"
              placeholder="email@example.com"
              className=" outline-none text-[1.2rem] min-w-[20rem]"
            />
            <button className="hover:bg-blue-600 bg-blue-500 text-white text-[1.3rem] py-[1rem] rounded-lg px-[2rem]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex justify-between p-[3rem]">
          <p className="font-medium text-[1.3rem]">All Right reserved.</p>
          <Stack component="ul" direction="row" spacing="1.5rem">
            {arrOfLinks.map((e, i) => {
              return (
                <li key={i}>
                  <a href="#">
                    <img src={e} alt="logo" />
                  </a>
                </li>
              );
            })}
          </Stack>
        </div>
      </footer>
    </>
  );
}
