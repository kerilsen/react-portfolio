import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Me";
  }, []);
  return <>"Contact me"</>;
}
