import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Times(props) {
  const { time } = props;
  const timeEntries = Object.entries(time);
  let num=25;
 let[selectedShowTime,setSelectedShowTime]=useState([])

  // Function to handle the button click and update the selectedShowTime state
  const handleShowTimeClick = (showTime) => {
    selectedShowTime.push(showTime)
  };
  return (
    <div className="right">
      <Link to="/ticket" state={{theatreName:props.theatreName,movieName:props.movieName,time:time,ShowTime:selectedShowTime}}>
      {timeEntries.slice(1, timeEntries.length).map(([showName, showTime]) => (
        <button className="tb" key={num++} onClick={()=>handleShowTimeClick(showTime)}>
        <h3>{showTime}</h3>
        <h5>{props.sound}</h5>
      </button>
      ))}
      </Link>
    </div>
  );
}
