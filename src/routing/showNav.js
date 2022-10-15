import React from "react";
import Nav from "../components/Nav/Nav";
import { Outlet } from "react-router";

const showNav = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default showNav;
