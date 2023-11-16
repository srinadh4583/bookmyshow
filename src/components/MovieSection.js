import React, { Component } from "react";
import "../App.css";
import MyCarousel from "./MyCarousel";
import { Link } from "react-router-dom";
import { addDays, format } from "date-fns";

let marker = document.querySelector(".marker");
let items = document.querySelectorAll("nav ul li");

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

items.forEach((link) => {
  link.addEventListener("click", (e) => {
    indicator(e.target);
  });
});

export default class MovieSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateInfoArray: [],
    };
  }

  componentDidMount() {
    this.generateDateArray();
  }

  // Function to generate an array with formatted date information
  generateDateArray() {
    const currentDate = new Date();
    const dateInfoArray = [];

    for (let i = 0; i < 4; i++) {
      const date = addDays(currentDate, i);

      // Format date information using key-value pairs
      const formattedDateInfo = {
        weekday: format(date, "EEE"),
        day: format(date, "dd"),
        month: format(date, "MMM"),
        year: format(date, "y"),
      };

      dateInfoArray.push(formattedDateInfo);
    }

    this.setState({ dateInfoArray });
  }
  render() {
    const { transferState } = this.props;
    const myStyle = {
      backgroundImage: `url(${transferState.details.movieBgPic})`,
      backgroundSize: "100% 100%",
      marginTop:'75px',
    };
    return (
      <header style={myStyle}>
        <div className="popular-movie-slider">
          <img src={transferState.details.picture} className="poster" alt="" />

          <div className="popular-movie-slider-content">
            <p className="release">2023</p>
            <h2 className="movie-name">{transferState.details.movieName}</h2>
            <ul className="category">
              <p>{transferState.details.movieGenere}</p>
              {/* <li>genere 2</li>
              <li>genere3</li> */}
            </ul>
            <p className="desc">{transferState.details.movieDescription}</p>

            <div className="movie-info">
              <i className="fa fa-clock-o">
                {" "}
                &nbsp;&nbsp;&nbsp;
                <span>{transferState.details.movieDuration} min</span>
              </i>
              <i className="fa fa-volume-up">
                {" "}
                &nbsp;&nbsp;&nbsp;<span>Subtitles</span>
              </i>
              <i className="fa fa-circle">
                {" "}
                &nbsp;&nbsp;&nbsp;
                <span>
                  Imdb: <b>9.9/10</b>
                </span>
              </i>
            </div>

            <div className="movie-btns">
              <button>
                <i className="fa fa-play"></i> &nbsp; Watch trailer
              </button>
              <button className="read-more">
                <i className="fa fa-circle"></i>{" "}
                <i className="fa fa-circle"></i>{" "}
                <i className="fa fa-circle"></i>&nbsp; Read more
              </button>
            </div>
          </div>
        </div>

        <section>
          <div className="movie-ticket-book">
            <div className="choose-date">
              <p className="heading">choose date:</p>
              <div className="wrapper">
                <MyCarousel
                  className="carousel owl-carousel"
                  dateInfo={this.state.dateInfoArray}
                ></MyCarousel>
                <div className="marker"></div>
              </div>
            </div>
            <Link
              to="/movielist"
              state={{
                theatreDetails: transferState.details.theatreDetails,
                movieName: transferState.details.movieName,
                genere:transferState.details.movieGenere,
                dateInfo:this.state.dateInfoArray,
              }}
            >
              {" "}
              <button>Buy ticket</button>
            </Link>
          </div>
        </section>
      </header>
    );
  }
}
