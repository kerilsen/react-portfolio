import BodyContent from "../../components/BodyContent";
import { Outlet } from "react-router-dom";

export default function Body({ currentPage }) {
  currentPage = currentPage.substring(1);

  return (
    <>
    <h2>{currentPage}</h2>
    <section>   
      <BodyContent>
        <Outlet />
      </BodyContent>
    </section>
    </>
  );
}
