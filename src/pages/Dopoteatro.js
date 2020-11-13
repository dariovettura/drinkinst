// JavaScript Document
import React from 'react';

import {Helmet} from 'react-helmet'

import ReactPlayer from 'react-player/youtube'

function Dopoteatro(){
	return ( 
		
		<div>
		
		<Helmet>
	<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
<title>Dopoteatro</title>
			<link rel="stylesheet" href="https://www.drinkinstreet.it/css/style-dopoteatro.css"></link>
		
		</Helmet>

		
		<div  id="player1">
		<ReactPlayer url='https://www.youtube.com/watch?v=mZ18zaLnUwU' muted='true' playing='true' height='100%' width='100%' loop='true'/>
		</div>
		
		
		<div className="container-fluid herotit">
  <div className="row">
    <div className="col-12">
      <h1>DOPOTEATRO</h1>
      <h2>Intrattenimento e miscele</h2>
    </div>
    <div className="col-12 fotostaff"> </div>
  </div>
</div>
<div className="container-fluid herotit">
  <div className="row">
    <div className="col-12">
      <h2 className="tit-drinklist attivo">LOCATION</h2>
      <div className="informaz">
        <p> Cocktail Bar adatto all' aperitivo e degustazioni di alto livello.</p>
      </div>
    </div>
  </div>
  <div className="row slaider  text-center">
    <div className="col-12 slid location1"></div>
    <div className="col-12 slid location2"></div>
    <div className="col-12 slid location3"></div>
   
  </div>
</div>
<div id="myDropdown2" className="container-fluid drinklist">
  <div className="row no-gutters justify-content-center">
    <div className="col-12">
      <h2 className="tit-drinklist attivo">DRINKLIST</h2>
    </div>
    <div className="col-12 e show">
      <div className="drink drink1">
        <div role="button" data-toggle="collapse" data-target="#drink1" aria-expanded="true" className="flip-button"><h3>COCKTAIL 9</h3></div>
        <div className="collapsing" id="drink1">
          <div className="card card-body ">
            <div className="flip-text">
              <h3>Ingredienti /</h3>
              <ul>
                <li>Gin Nikka Coffey</li>
                <li>Pera sciroppo</li>
                <li>Te Verde</li>
                <li>Lime</li>
                <li>Maracuja</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 e show">
      <div className="drink drink2">
        <div role="button" data-toggle="collapse" data-target="#drink2" aria-expanded="false" className="flip-button"> <h3>COCKTAIL 1</h3> </div>
        <div className="collapse" id="drink2">
          <div className="card card-body ">
            <div className="flip-text">
              
              <h3>Ingredienti /</h3>
              <ul>
                <li>Gin Nikka Coffey</li>
                <li>Pera sciroppo</li>
                <li>Te Verde</li>
                <li>Lime</li>
                <li>Maracuja</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 e show">
      <div className="drink drink3">
        <div role="button" data-toggle="collapse" data-target="#drink3" aria-expanded="false" className="flip-button"><h3>COCKTAIL 2</h3> </div>
        <div className="collapse" id="drink3">
          <div className="card card-body ">
            <div className="flip-text">
              
              <h3>Ingredienti /</h3>
              <ul>
                <li>Vodka</li>
                <li>Melograno</li>
                <li>Vaniglia</li>
                <li>Cannella</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 e show">
      <div className="drink drink4">
        <div role="button" data-toggle="collapse" data-target="#drink4" aria-expanded="false" className="flip-button"><h3>COCKTAIL 3</h3></div>
        <div className="collapse" id="drink4">
          <div className="card card-body ">
            <div className="flip-text">
              
              <h3>Ingredienti /</h3>
              <ul>
                <li>Vodka</li>
                <li>Liquore alle erbe</li>
                <li>Liquore al bergamotto</li>
                <li>Vermouth Bianco</li>
                <li>Peychaud's Bitter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 e show">
      <div className="drink drink5">
        <div role="button" data-toggle="collapse" data-target="#drink5" aria-expanded="false" className="flip-button"><h3>COCKTAIL 4</h3></div>
        <div className="collapse" id="drink5">
          <div className="card card-body ">
            <div className="flip-text">
              
              <h3>Ingredienti /</h3>
              <ul>
                <li>Mezcal Nuestra Soledad</li>
                <li>Salvia</li>
                <li>Zucchero</li>
                <li>Soluzione Salina</li>
                <li>Chiodi Di Garofano</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 e show">
      <div className="drink drink6">
        <div role="button" data-toggle="collapse" data-target="#drink6" aria-expanded="false" className="flip-button"><h3>COCKTAIL 5</h3> </div>
        <div className="collapse" id="drink6">
          <div className="card card-body ">
            <div className="flip-text">
              
              <h3>Ingredienti /</h3>
              <ul>
                <li>Mezcal Nuestra Soledad</li>
                <li>Salvia</li>
                <li>Zucchero</li>
                <li>Soluzione Salina</li>
                <li>Chiodi Di Garofano</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 e show">
      <div className="drink drink7">
        <div role="button" data-toggle="collapse" data-target="#drink7" aria-expanded="false" className="flip-button"><h3>COCKTAIL 6</h3> </div>
        <div className="collapse" id="drink7">
          <div className="card card-body ">
            <div className="flip-text">
              
              <h3>Ingredienti /</h3>
              <ul>
                <li>Mezcal Nuestra Soledad</li>
                <li>Salvia</li>
                <li>Zucchero</li>
                <li>Soluzione Salina</li>
                <li>Chiodi Di Garofano</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 e show">
      <div className="drink drink8">
        <div role="button" data-toggle="collapse" data-target="#drink8" aria-expanded="false" className="flip-button"><h3>COCKTAIL 7</h3> </div>
        <div className="collapse" id="drink8">
          <div className="card card-body ">
            <div className="flip-text">
              
              <h3>Ingredienti /</h3>
              <ul>
                <li>Mezcal Nuestra Soledad</li>
                <li>Salvia</li>
                <li>Zucchero</li>
                <li>Soluzione Salina</li>
                <li>Chiodi Di Garofano</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 e show">
      <div className="drink drink9">
        <div role="button" data-toggle="collapse" data-target="#drink9" aria-expanded="false" className="flip-button"><h3>COCKTAIL 8</h3> </div>
        <div className="collapse" id="drink9">
          <div className="card card-body ">
            <div className="flip-text">
              
              <h3>Ingredienti /</h3>
              <ul>
                <li>Mezcal Nuestra Soledad</li>
                <li>Salvia</li>
                <li>Zucchero</li>
                <li>Soluzione Salina</li>
                <li>Chiodi Di Garofano</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
     </div>
    </div>
<div className="container-fluid herotit">
  <div className="row">
    <div className="col-12">
      <h2 className="tit-drinklist attivo">INFO</h2>
    </div>
  </div>
  <div className="row justify-content-center text-center  ">
    <div className="col-12 ">
      <div className="mappi">
        <div>
         
         
        </div>
        <br></br>
      </div>
    </div>
  </div>
  <div className="row justify-content-center text-center ">
    <div className="col-12  ">
      <div className="orario">
        <h3>OPEN 4 P.M.-CLOSE 11 P.M.</h3>
      </div>
    </div>
  </div>
  <div className="row justify-content-center text-center ">
    <div className="col-12  ">
      <div className="bottone-chiama "><a href="">
        <h3>INVIA MESSAGGIO</h3>
        </a></div>
    </div>
  </div>
</div>
		
		
			</div>
			)
}

export default Dopoteatro;