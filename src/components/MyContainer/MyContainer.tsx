import "./mycontainer.css";
// mui
import { Container } from "@mui/material";
// components
import { Navbar, Ride, Services } from "../../components";

export default function MyContainer() {
  return (
    <>
      <Navbar />
      <Container>
        <Ride />
        <Services />
      </Container>
    </>
  );
}
