// JavaScript Document
import React from 'react';
import {Link} from 'react-router-dom'
import './menu_style2.css';
import './Menu.js';

function Header(){
	return(
	<header id="header">
  <div className="container-fluid cookie-banner">
    <div className="row">
      <div className="col-10">
        <p> Navigando sul nostro sito, accetti la nostra <div>cookie e privacy policy</div>
		</p>
      </div>
      <div className="col-1">
        <button className="close">× </button>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-6"> 
		<Link to="/">
        <div className="logo-header">
		</div>
	</Link>
        
		</div>
      <div className="col-6">
        <div className="button_container" id="toggle"><span className="top"></span><span className="middle"></span><span className="bottom"></span></div>
      </div>
    </div>
  </div>
  <div className="overlay" id="overlay">
    <nav className="overlay-menu">
      <ul>
        <li><div>
          <h2>COS'È DRINKIN'ST</h2>
          </div>
		</li>
        <li><div>
          <h2>IL CLIENTE PERFETTO</h2>
          </div>
		</li>
        <li>
          <div className="dropdown">
            <h2 className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SCELTI PER TE</h2>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
		<div className="dropdown-item" >BEER GARDEN</div> 
		<Link to="/Flanagans">
		<div className="dropdown-item" >FLANAGANS</div> 
		</Link>
		<Link to="/Ex_Salumeria">
		<div className="dropdown-item" >EX SALUMERIA</div>
		</Link>
		<Link to="/Pepi_Vintage">
		<div className="dropdown-item" >PEPI VINTAGE</div>
		</Link>
		<Link to="/La_Fesseria">
		<div className="dropdown-item" >LA FESSERIA</div> 
		</Link>
		<Link to="/Dopoteatro">
		<div className="dropdown-item" >DOPOTEATRO</div>
		</Link>
		</div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</header>
	
	)
}

export default Header;