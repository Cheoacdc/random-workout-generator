import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function NavbarLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}