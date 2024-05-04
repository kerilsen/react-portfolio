import Nav from "../Nav/Nav";
import {
  Wrapper,
  LogoContainer,
  BannerTitle,
  FlowerContainer,
} from "./Header.styles";

export default function Header() {
  return (
    <Wrapper>
      <LogoContainer>
        <BannerTitle>keri sen</BannerTitle>
      </LogoContainer>
      <FlowerContainer>
        <Nav />
      </FlowerContainer>
    </Wrapper>
  );
}
