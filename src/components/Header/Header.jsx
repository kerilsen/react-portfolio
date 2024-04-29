import Nav from "../Nav/Nav";
import { TopBanner, BannerTitle, NavBar } from "./Header.styles";

export default function Header() {
  return (
    <>
      <TopBanner>
        <BannerTitle>keri sen</BannerTitle>
      </TopBanner>
      <NavBar><Nav /></NavBar>
    </>
  );
}
