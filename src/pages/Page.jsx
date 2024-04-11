import { useEffect } from 'react';
import PageContent from '../components/PageContent';

// import { capitalizeFirstLetter } from '../../utils/helpers';
import { Outlet } from 'react-router-dom';

export default function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);

  return (
    <section>
      <h2>{currentPage}</h2>
      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}