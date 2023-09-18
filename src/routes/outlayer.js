import React, { Fragment } from "react";
import Navbar from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";

function Outlayer() {
  return (
    <Fragment>
      <div className="flex  ">
        {/* Sidebar */}
        <Navbar />
        {/* Outlet renders the main content based on the current route */}
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Outlayer;
