import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </Header>
      <Container>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
