import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from "../components/NavBar";
import MovieSection from "../components/MovieSection";


export default function Movie() {
  const location = useLocation();
const targetState = location.state;
  return (
    <>
    <Navbar />
    <MovieSection transferState={targetState}/>
    </>
  )
}
