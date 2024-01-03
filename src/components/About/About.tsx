import "./about.css";
// mui
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  CardMedia,
} from "@mui/material";
// assets
import jeep_img from "/about.png";

export default function About() {
  return (
    <>
      <Card id="About" className="!bg-transparent !flex !shadow-none">
        <CardMedia image={jeep_img} component="img" className="h-[25rem]" />
        <div className="flex flex-col justify-between pl-[5rem] ">
          <CardHeader title="ABOUT US" className="text-orange-500" />
          <CardContent className="text-[1.3rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            doloremque nisi ducimus veniam quis amet iste accusamus alias
            adipisci cum quia pariatur tempora qui debitis, rem eos sequi sed
            voluptatem nihil nostrum, suscipit assumenda nesciunt ipsum dolore.
            Temporibus, et quaerat?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            beatae illo qui ad provident optio!
          </CardContent>
          <CardActions>
            <button className="bg-blue-500 py-[0.6rem] w-[10rem] rounded-lg text-white text-[1.2rem] font-medium">
              Learn More
            </button>
          </CardActions>
        </div>
      </Card>
    </>
  );
}
