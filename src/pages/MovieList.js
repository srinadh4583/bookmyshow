import React from "react";
import { useLocation } from "react-router-dom";
import List from "../components/List";
import NavBar from "../components/NavBar";
import MyCarousel from "../components/MyCarousel";

export default function MovieList() {
  const location = useLocation();
  const targetState = location.state;
  return (
    <div>
      <NavBar />
      <div className="movieInfo">
        <div className="fgrid">
        <h1>{targetState.movieName}</h1>
        <h5>{targetState.genere}</h5>
        </div>
      </div>
      <div className="move">
      <section >
        <div
          className="movie-ticket-book"
          style={{
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div className="choose-date">
            <p className="heading"></p>
            <div className="wrapper">
              <MyCarousel
                className="carousel owl-carousel"
                dateInfo={targetState.dateInfo}
              ></MyCarousel>
              <div className="marker"></div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <List transferState={targetState} />
    </div>
  );
}
