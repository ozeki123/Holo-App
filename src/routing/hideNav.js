import React from "react";
import { Outlet } from "react-router";

const hideNav = () => {
  return (
    <Outlet/>
  )
}

export default hideNav;
