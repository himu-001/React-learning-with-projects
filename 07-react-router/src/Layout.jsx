/*
<Outlet /> is a placeholder provided by React Layoutr.
It renders the component of the currently matched child route.
It is commonly used in a layout component to display different pages
while keeping common elements like the Navbar and Footer unchanged.
*/

import Header from "./component/Header/header";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
