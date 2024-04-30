import { Outlet } from "react-router-dom";

export default function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  return (
    <section>
        <Outlet />
    </section>
  );
}
