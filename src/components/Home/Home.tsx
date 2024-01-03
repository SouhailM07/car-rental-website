import "./home.css";
// mui
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
} from "@mui/material";
// assets
import jeep_img from "/about.png";
import ios_logo from "/ios.png";
import android_logo from "/android.png";
export default function Home() {
  let arrOfBtns: string[] = [android_logo, ios_logo];
  return (
    <>
      <Card
        id="Home"
        className="!flex justify-between mt-[3rem] items-center !shadow-none"
      >
        <div className="w-[50%] pl-[1rem]">
          <CardHeader
            title={
              <h1 className="text-[4rem] font-bold">
                <span className="text-orange-500">Looking </span>to
                <br />
                rent a car
              </h1>
            }
          />
          <CardContent className="text-[1.2rem] font-medium ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            voluptates veniam possimus suscipit nobis soluta autem doloremque
            hic, voluptas fuga.
          </CardContent>
          <CardActions className="space-x-[1rem]">
            {arrOfBtns.map((e, i) => {
              return (
                <Button key={i} className="!w-[10rem] !p-0">
                  <img src={e} alt="img" />
                </Button>
              );
            })}
          </CardActions>
        </div>
        <div className="flex justify-center items-center">
          <div className=" bg-gradient-to-b rounded-xl from-orange-500 to-orange-300 w-[30rem] h-[40rem]"></div>
          <img
            src={jeep_img}
            alt="img"
            className="h-[25rem] w-[44rem] absolute"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </Card>
    </>
  );
}
