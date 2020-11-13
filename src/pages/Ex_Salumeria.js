// JavaScript Document
import React from 'react';

import {Helmet} from 'react-helmet'

import ReactPlayer from 'react-player/youtube'





function Salumeria(){
	return (
<div>
		
		<Helmet>
	<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
<title>Pepi Vintage</title>
			<link rel="stylesheet" href="https://www.drinkinstreet.it/css/style-exsalumeria.css"></link>
		
		</Helmet>
<div  id="player1">
		<ReactPlayer url='https://www.youtube.com/watch?v=mZ18zaLnUwU' muted='true' playing='true' height='100%' width='100%' loop='true'/>
		</div>

<div className="container-fluid herotit">
  <div className="row">
    <div className="col-12">
      <h1>Ex Salumeria</h1>
      <h2>"La bottega del rum"</h2>
    </div>
    <div className="col-12 fotostaff"> </div>
  </div>
</div>
<div className="container-fluid herotit">
  <div className="row">
    <div className="col-12">
      <h2 className="tit-drinklist attivo">LOCATION</h2>
      <div className="informaz">
        <p> "Era il 2012 quando iniziammo la ricerca di un piccolo angolo dove preparare cocktails a base di rum caraibico, frutta fresca e spezie varie. Ci imbattemmo così in una piccola salumeria nel cuore di Napoli e fu allora che la trasformammo in quella che oggi conoscete come Ex Salumeria, la Bottega del Rum. Senza rendercene conto demmo vita ad un’intera linea di rum speziati Made in Italy, totalmente naturali. Nacquero così i nostri Ron Especiado. Da allora vestiamo a mano, una ad una, bottiglie di vari formati con corda di canapa, stoffa, cera e legno inciso a fuoco."

</p>
      </div>
    </div>
  </div>
  <div className="row slaider  text-center">
    <div className="col-12 slid location1"></div>
   
  </div>
</div>
<div id="myDropdown2" className="container-fluid drinklist">
  <div className="row no-gutters justify-content-center">
    <div className="col-12">
      <h2 className="tit-drinklist attivo">DRINKLIST</h2>
    </div>
    <div className="col-12 e show">
      <div className="drink drink1">
        <div role="button" data-toggle="collapse" data-target="#drink1" aria-expanded="true" className="flip-button"><h3>MOJITO SPEZIATO</h3></div>
        <div className="collapse" id="drink1">
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
        <div role="button" data-toggle="collapse" data-target="#drink2" aria-expanded="false" className="flip-button"> <h3>CHOCO COCKTAIL</h3> </div>
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
        <div role="button" data-toggle="collapse" data-target="#drink3" aria-expanded="false" className="flip-button"><h3>COCO COCKTAIL</h3> </div>
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
        <div role="button" data-toggle="collapse" data-target="#drink4" aria-expanded="false" className="flip-button"><h3>FRUTOS ROJOS COCKTAIL</h3></div>
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
        <div role="button" data-toggle="collapse" data-target="#drink5" aria-expanded="false" className="flip-button"><h3>MIEL COCKTAIL</h3></div>
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
        <div role="button" data-toggle="collapse" data-target="#drink6" aria-expanded="false" className="flip-button"><h3>NARANJA Y CANELA COCKTAIL</h3> </div>
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
        <div role="button" data-toggle="collapse" data-target="#drink7" aria-expanded="false" className="flip-button"><h3>REGALIZ COCKTAIL</h3> </div>
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
        <div role="button" data-toggle="collapse" data-target="#drink8" aria-expanded="false" className="flip-button"><h3>VAINILLA COCKTAIL</h3> </div>
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
        <div role="button" data-toggle="collapse" data-target="#drink9" aria-expanded="false" className="flip-button"><h3>ANALCOLICO</h3> </div>
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

export default Salumeria;
		
		