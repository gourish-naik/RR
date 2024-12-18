import React from "react";
import { Link, Outlet } from "react-router-dom";


export default function AsideTabs() {
  const data = {
    "Dash Board": "dahsboard",
    "Cources": "cources",
    "Profile": "profile",
  };

  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <Link to={value}>{key}</Link>
        </div>
      ))}
      <Outlet />
    </div>
  );
}
