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
        <div id="Footer_s1">
          <h2>Subscribe To NewsLetter</h2>
          <div>
            <input type="text" placeholder="email@example.com" />
            <button>Subscribe</button>
          </div>
        </div>
        {/*  */}
        <div id="Footer_s2">
          <p>All Right reserved.</p>
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
