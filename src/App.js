import React from "react";
import Layout from "./Layout";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import AsideTabs from "./components/Aside";

export default function App() {
  return (
    <div className="layout-wrapper">
      <BrowserRouter>
        <Layout />
        <aside className="side-tabs">
          <AsideTabs />
        </aside>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}
