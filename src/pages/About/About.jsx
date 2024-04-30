import { useEffect } from "react";
import { Container, Logo, SmallCard, BigCard } from "./About.styles";

export default function About() {
  useEffect(() => {
    document.title = "About Me";
  }, []);

  return (
    <>
    <h2>about me</h2>
    <Container>
      <SmallCard>
        <Logo src="./assets/digital-nerd.png" alt="Avatar of girl with glasses" />
        </SmallCard>
      <BigCard>
        <p>
          I'm a junior web developer and an ex-librarian who loves organization
          and pretty things!
        </p>
        <p>
          I have my Master's degree in Library and Information Studies and am
          currently taking a full stack flex coding bootcamp and will complete
          it in April 2024. I'm highly resourceful and a quick learner and I
          love rainy days and iced coffee. I can't wait to create new things and
          learn more. Watch this space for real content coming soon!
        </p>
        <p>Here's some more that I have to say.</p>
      </BigCard>
    </Container>
    </>
  );
}
