import "./reviews.css";
// mui
import { Card, CardContent, CardHeader, Avatar, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
// components
import { Title } from "../../components";
// assets
import img_1 from "/craig-mckay-jmURdhtm7Ng-unsplash.jpg";
import img_2 from "/jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg";
import img_3 from "/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg";

// --------------------------------------------------------------------
// making a custom styles to a mui component [Tool of power]
// --------------------------------------------------------------------
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#f97316",
  },
});
// --------------------------------------------------------------------
// --------------------------------------------------------------------

export default function Reviews() {
  let arrOfCards = [img_1, img_2, img_3];
  return (
    <>
      <article id="Reviews">
        <Title title="REVIEWS" txt="Whats Our Customer Say" />
        <ul className="CardContainer">
          {arrOfCards.map((e, i) => {
            return (
              <Card key={i} className="Card ">
                <Avatar src={e} className="Avatar " />
                <div>
                  <CardHeader
                    title={<p className="font-bold">Someone Name</p>}
                  />
                  <StyledRating name="read-only" value={4} readOnly />
                </div>
                <CardContent className="italic font-medium" component="p">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatem culpa blanditiis laudantium inventore iste nemo et
                  consequatur vel fugiat nostrum?
                </CardContent>
              </Card>
            );
          })}
        </ul>
      </article>
    </>
  );
}
