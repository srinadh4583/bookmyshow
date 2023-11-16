import React from "react";
import Navbar from "../components/NavBar";
import SeatingLayout from "../components/SeatingLayout";
import { useLocation } from "react-router-dom";

export default function Tickets() {
  const location = useLocation();
  const targetState = location.state;
  return (
    <div>
      <Navbar />
      <div>
        <SeatingLayout transferState={targetState}/>
      </div>
    </div>
  );
}
