import { useEffect } from "react";
import { Container, Chalkboard } from "./Contact.styles";
import ContactForm from '../../components/ContactForm/ContactForm';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Me";
  }, []);
 
  return (
    <Container>
      <Chalkboard>
        <ContactForm />
      </Chalkboard>
    </Container>
  );
}
