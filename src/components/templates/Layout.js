import { Outlet } from "react-router-dom";

import Footer from "components/organisms/Footer";
import GNB from "components/organisms/GNB";

export default function Layout() {
  return (
    <>
      <GNB />
      <Outlet />
      <Footer />
    </>
  );
}