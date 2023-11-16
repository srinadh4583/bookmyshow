// import React, { useState, useEffect } from "react";
// import OwlCarousel from "react-owl-carousel";
// import "../App.css";
// import data from "./data";

// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// const MyCarousel = (props) => {
//   const options = {
//     margin: 20,
//     loop: true,
//     responsive: {
//       0: {
//         items: 3,
//         nav: true,
//       },
//       600: {
//         items: 3,
//         nav: true,
//       },
//       1000: {
//         items: 3,
//         nav: true,
//       },
//     },
//   };

//   return (
//     <OwlCarousel className="carousel owl-carousel" {...options}>
//       {
//         props.data.map((ele)=>{   
//         return <div className="card card-1" key={ele.id}>
//           <p>{ele.screenType}</p>
//           <p>{ele.Time}</p>
//         </div>
//         })
//       }
//     </OwlCarousel>
//   );
// };

// export default MyCarousel;
