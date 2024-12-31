import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Contact } from "../components/Contact";

export const Layout = () => {
  return (
    <div className=" h-screen w-screen bg-primary">
      <NavBar />
      <Outlet />
      <Contact />
    </div>
  );
};
