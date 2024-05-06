import { useEffect } from "react";
import { Container, Logo, SmallCard, BigCard } from "./About.styles";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    document.title = "About Me";
  }, []);

  return (
    <>
    <Container>
      <SmallCard>
        <Logo src="./assets/digital-nerd.png" alt="Avatar of girl with glasses" />
        </SmallCard>
      <BigCard>
        <p>
          I'm a full stack web developer and an ex-librarian who loves organization
          and pretty things!
        </p>
        <p>
          I have a degree in English literature and my Master's degree in Library and Information Studies and have recently completed a full stack flex coding bootcamp. I'm highly resourceful, a creative thinker, excellent writer and a quick learner with an interest in visual storytelling and UX/UI.
          love rainy days and iced coffee. 
        </p>
        <p>For a limited time only, I'm taking on free projects to gain experience if you want to get in on the action!</p>
        <Link to="/contact">
          Contact me
        </Link>! 
      </BigCard>
    </Container>
    </>
  );
}
