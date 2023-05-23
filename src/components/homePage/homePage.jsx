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
        <p>// welcome to my portfolio, press z</p>
        <p>// you can also see my projects on my Github page</p>
        <p><span className='const'>const</span> <span className='github'>githubLink</span> = "<a href="https://github.com/AazimAnish">https://github.com/AazimAnish</a>"</p>
        </div>
        <div className='backgimg'>
          <img src="./public/assets/images/floatland.png"></img>
        </div>
    </div>

  );
};

export default Home;
