import { Outlet } from "react-router-dom";

import React from "react";
import Header from "../components/Header";

const RootPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootPage;
