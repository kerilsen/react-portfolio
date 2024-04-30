import Nav from "../Nav/Nav";
import { CircleContainer, BannerTitle, NavBar } from "./Header.styles";

export default function Header() {
  return (
    <>
      <CircleContainer>
        <BannerTitle>keri sen</BannerTitle>
      </CircleContainer>
      <NavBar>
        <Nav />
      </NavBar>
    </>
  );
}
