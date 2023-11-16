import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../App.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MyCarousel = (props) => {

  const options = {
    margin: 20,
    loop: true,
    responsive: {
      0: {
        items: 3,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  };

  return (
    <OwlCarousel className="carousel owl-carousel" {...options}>
      {
        props.dateInfo.map((ele)=>{   
        return <div className="card card-1" key={ele.day}>
          <p>{ele.day} {ele.month},{ele.year}</p>
          <p style={{color:'blue'}}>{ele.weekday}</p>
        </div>
        })
      }
    </OwlCarousel>
  );
};

export default MyCarousel;
