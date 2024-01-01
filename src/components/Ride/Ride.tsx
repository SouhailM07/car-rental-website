import "./ride.css";
// mui
import { Card, CardMedia, CardContent, CardHeader } from "@mui/material";
// components
import { Title } from "../../components";
// assets
import img_1 from "/location-dot-solid.svg";
import img_2 from "/calendar-check-solid.svg";
import img_3 from "/calendar-week-solid.svg";

export default function Ride() {
  interface arrOfCards_type {
    img: string;
    title: string;
    txt: string;
  }
  let arrOfCards: arrOfCards_type[] = [
    {
      img: img_1,
      title: "Choose A Location",
      txt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis et tempora quae reiciendis non nam odio?",
    },
    {
      img: img_2,
      title: "Pick-Up Date",
      txt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis et tempora quae reiciendis non nam odio?",
    },
    {
      img: img_3,
      title: "Book A Car",
      txt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis et tempora quae reiciendis non nam odio?",
    },
  ];
  return (
    <>
      <article>
        <Title title="HOW ITS WORK" txt="Rent With 3 Easy Steps" />
        <ul className="flex justify-between">
          {arrOfCards.map((e, i) => {
            return (
              <Card
                component="li"
                key={i}
                className="w-[25rem] text-center pt-[1rem] !shadow-none"
              >
                <div className="bg-gray-300 rounded-lg w-[3rem] m-auto h-[3rem] grid place-items-center">
                  <CardMedia
                    component="div"
                    image={e.img}
                    className="h-[2rem] w-[2rem] !bg-contain"
                  />
                </div>
                <CardHeader title={<p className="font-bold">{e.title}</p>} />
                <CardContent className="!pt-[0rem] text-[1.2rem]">
                  {e.txt}
                </CardContent>
              </Card>
            );
          })}
        </ul>
      </article>
    </>
  );
}
