import "./services.css";
// mui
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
// components
import { Title } from "../../components";
// assets
import car_1 from "/c-b-cAbH8B-14Vo-unsplash.jpg";
import car_2 from "/harrison-fitts-zE2VGbJSYns-unsplash.jpg";
import car_3 from "/jannis-lucas-5B0EXiwdJrg-unsplash.jpg";
import car_4 from "/jonathan-cooper-YuUjJUBk6pY-unsplash.jpg";
import car_5 from "/kenny-eliason-yDekvyZ52dU-unsplash.jpg";
import car_6 from "/blake-meyer-CRNbHjNaljo-unsplash.jpg";

export default function Services() {
  let arrOfCars = [
    { img: car_1, title: "Bentley" },
    { img: car_2, title: "2018 Honda Civic" },
    { img: car_3, title: "Range Rover" },
    { img: car_4, title: "Porsche 911" },
    { img: car_5, title: "Jeep " },
    { img: car_6, title: "Audi R8 " },
  ];
  return (
    <>
      <article id="Services">
        <Title
          title="BEST SERVICES"
          txt="Explore Out Top DEals From Top Rated Dealers"
        />
        <ul className="CardContainer">
          {arrOfCars.map((e, i) => {
            return (
              <Card
                key={i}
                className="Card w-[25rem] px-[1rem] py-[1rem] mb-[2rem] "
                component="li"
              >
                <CardMedia
                  component="div"
                  image={e.img}
                  className="h-[15rem] rounded-xl "
                />
                <CardHeader
                  title={
                    <div className="border-2 border-gray-600 text-center rounded-xl text-gray-600 w-[5rem]">
                      2017
                    </div>
                  }
                />
                <CardContent className="flex flex-col space-y-[0.8rem]">
                  <h3 className="text-[1.3rem] font-bold">{e.title}</h3>
                  <div>
                    <span className="text-orange-500 font-bold text-[1.2rem]">
                      $58500 | $358
                    </span>
                    /month
                  </div>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      fontSize: "1.2rem",
                      py: "0.8rem",
                      color: "white",
                    }}
                    className="w-full   !bg-blue-500"
                  >
                    Rent Now
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </ul>
      </article>
    </>
  );
}
