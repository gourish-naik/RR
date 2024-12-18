import React from "react";
import { Outlet } from "react-router";
import AsideTabs from "./components/Aside";
import "./index.scss";

export default function Layout() {
  return (
    <div className="header">
      <div className="inner-wrapper-header">
        <h1>Hello</h1>
      </div>
    </div>
  );
}
