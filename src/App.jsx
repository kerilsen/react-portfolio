import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Page from "./pages/Page";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import './assets/reset.css'
import './assets/mystyle.css'
// import { useLocation } from "react-router-dom";

export default function App() {
  // const currentPage = useLocation().pathname;

  return (
    <>
      <Header>
        {/* <Nav currentPage={currentPage} /> */}
      </Header>
      <main>
        {/* <Portfolio /> */}
        {/* <Page currentPage={currentPage} /> */}
      </main>
      <Footer />
    </>
  );
}