import React from "react";
import "../App.css";
import Times from "./Times";

export default function List(props) {
  const { transferState } = props;
  return (
    <div className="main">
        {transferState.theatreDetails.map((ele) => {
          const showTimes = ele.time; // Get the showTimes for each theatre
          return (
            <>
            <div className="applygrid" key={ele.theatreId}>
              <div className="grid grid-cols-2 grid-rows-2 gap-2 firstdiv">
                <h3>{ele.theatreName}</h3>
                <div>
                  <i className="fa-solid fa-info"></i>
                  <h5>info</h5>
                </div>
                <div className="seconddiv">
                  <i className="fa-solid fa-mug-hot"></i>
                  <h3>food&Beverage</h3>
                </div>
              </div>
              <Times time={showTimes} sound={ele.theatreSoundType} theatreName={ele.theatreName} movieName={transferState.movieName}/>
            </div>
            <div className="line"></div>
            </>
          );
        })}
    </div>
  );
}
