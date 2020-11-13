// JavaScript Document
import React from 'react';
import {Link} from 'react-router-dom'
import './loghi2.css';
import './search.js';

function Footer(){
	return(
		<div>
		<footer>
  <div className="container-fluid text-center ">
    <div className="row">
      <div className="col-12">
        <h2 className> SCELTI PER TE</h2>
        <p>Clicca sui loghi e scopri chi sono, cosa offrono e dove si trovano</p>
      </div>
    </div>
  </div>
  <div className="container-fluid text-center">
    <div className="row justify-content-center">
      <div className="col">
        <input type="text" placeholder="Nome..quartiere..città" id="myInput" onkeyup="filterFunction()">
		</input>
      </div>
    </div>
  </div>
  <div id="myDropdown" className="container-fluid text-center">
    <div className="row barile ">
		
      <div className=" col-4 e  show  bar k scompa"> 
		<Link to="/Ex_Salumeria">
        <div className="logosalume logo"></div>
        <p className="tit">EX SALUMERIA</p>
        <p className="sottit">napoli centro storico napoli</p>
			</Link>
        </div>
      <div className=" col-4 e  show  bar k scompa"> 
		<Link to="/Dopoteatro">
        <div className="logobuco logo"></div>
        <p className="tit">DOPOTEATRO</p>
        <p className="sottit">napoli centro</p>
			</Link>
        </div>
      <div className=" col-4 e  show  bar k scompa"> 
        <div className="logofactory logo"></div>
        <p className="tit">BEER GARDEN</p>
        <p className="sottit">bagnoli coroglio</p>
         </div>
      <div className=" col-4 e  show  bar k scompa"> 
		<Link to="/Pepi_Vintage">
        <div className="logopepi logo"></div>
        <p className="tit">PEPI VINTAGE</p>
        <p className="sottit">napoli centro</p>
			</Link>
      </div>
      <div className=" col-4 e  show  bar k scompa"> 
		<Link to="/Flanagans">
        <div className="logoflanaga logo"></div>
        <p className="tit">FLANAGAN'S</p>
        <p className="sottit">napoli chiaia baretti</p>
			</Link>
       </div>
		
      <div className=" col-4 e  show  bar k scompa">
		<Link to="/La_Fesseria">
        <div className="logofesser logo"></div>
        <p className="tit">LA FESSERIA</p>
        <p className="sottit">napoli centro</p>
			</Link>
  </div>
		
    </div>
  </div>
  <div className="container-fluid text-center footerissimo">
    <div className="row no-gutters justify-content-center">
      <div className="col-12 ">
		
        <div className="logo logo-footer logodrink"></div>
     </div>
		
    </div>
  </div>
  <div className="containe-fluid text-center footerissimo">
    <div className="row">
      <div className="col-2 offset-4 "><a href="https://www.facebook.com/drinkinstreet"><i className="fab fa-facebook"></i></a></div>
      <div className="col-2"><a href="https://www.instagram.com/drinkinstreet/?hl=it"><i className="fab fa-instagram"></i></a></div>
    </div>
    <div className="row justify-content-center">
      <div className="col-12">
        <h3>NAVIGA RESPONSABILMENTE</h3>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-12">
        <p><a href="#">Copyright © DAMN!.All Right Reserved.</a><a href="https://www.drinkinstreet.it/cookies_privacy_policy">Privacy e cookie</a></p>
      </div>
    </div>
  </div>
</footer>
		
		
		</div>
	)
}

export default Footer;