// import React from "react";
import { Navbar } from '../navBar/navBar';
import './homePage.css';

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <h3>Hi all. I am,</h3>
        <h1>Aazim Anish</h1>
        <h2>&gt; Tech Enthusiast</h2>
        </div>
        <div className='commenttext'>
        <p className='line1'>// welcome to my portfolio, press z</p>
        <p className='line2'>// you can also see my projects on my Github page</p>
        <p className='line3'>const githubLink = "<a href="https://github.com/AazimAnish">https://github.com/AazimAnish</a>"</p>
        </div>
    </div>

  );
};

export default Home;
