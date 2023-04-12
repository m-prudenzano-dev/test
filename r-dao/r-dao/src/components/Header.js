import React from 'react';
import MyImage from '../images/myImage.jpg';

function Header() {
  return (
    <header>
      <button id="connect-wallet-btn">Connect Wallet</button>
      <h1>ROLLER DAO </h1>
      <h2>Crowdfunding Platform</h2>
      <img src={MyImage} alt="myImage" />
      <nav>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#create-project">Create a Project</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
