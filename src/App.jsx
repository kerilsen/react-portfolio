import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./assets/Global.style";
import Page from "./pages/Page/Page";

import { useLocation } from "react-router-dom";

export default function App() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <GlobalStyle />
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </>
  );
}
