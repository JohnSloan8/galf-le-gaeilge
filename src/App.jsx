import * as React from "react";
import { Link, Outlet } from "react-router-dom"

export default function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <h1>Galf le Gaeilge</h1>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/courses">Courses</Link> |{" "}
        <Link to="/players">Players</Link> 
      </nav>
      <Outlet />
    </div>
  );
}
