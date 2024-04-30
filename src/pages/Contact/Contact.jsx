import { useEffect, useState } from "react";
import { Container, Circle } from "./Contact.styles";
import Stamen from "../../components/Flower/Flower";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Me";
  }, []);
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleHoverCircle = (position) => {
    setSelectedCircle(position);
  };

  return (
    <Container>
      <Circle
        $position="top"
        onMouseEnter={() => handleHoverCircle("top")}
        onMouseLeave={() => handleHoverCircle(null)}
      >Top</Circle>
      <Circle
        $position="bottom"
        onMouseEnter={() => handleHoverCircle("bottom")}
        onMouseLeave={() => handleHoverCircle(null)}
      >Bottom</Circle>
      <Circle
        $position="left"
        onMouseEnter={() => handleHoverCircle("left")}
        onMouseLeave={() => handleHoverCircle(null)}
        >Left</Circle>
      <Circle
        $position="right"
        onMouseEnter={() => handleHoverCircle("right")}
        onMouseLeave={() => handleHoverCircle(null)}
        >Right</Circle>
      <Circle
        $position="center"
        onMouseEnter={() => handleHoverCircle("center")}
        onMouseLeave={() => handleHoverCircle(null)}
        >Center</Circle>
        <Stamen />
    </Container>
  );
}
