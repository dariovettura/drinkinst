
import React from 'react';

import {Helmet} from 'react-helmet'

import ReactPlayer from 'react-player/youtube'


 

function Flanagans(){
	return (
		
		<div>
		<Helmet>
	<meta charset="UTF-8"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
<title>Flanagans</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"></link>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"></link>

			<link rel="stylesheet" href="https://www.drinkinstreet.it/css/style-flanagans.css"></link>
		
		
		</Helmet>

<div  id="player1">
		<ReactPlayer url='https://www.youtube.com/watch?v=K8DcqEThUvs' muted='true' playing='true' height='100%' width='100%' loop='true'/>
		</div>
			
		
		<div class="container-fluid herotit">
  <div class="row">
    <div class="col-12">
      <h1>Flanagan's</h1>
      <h2>"Non c'è niente di meglio che stare dietro a novanta centimetri di mogano"</h2>
    </div>
    <div class="col-12 fotostaff"> </div>
  </div>
</div>
<div class="container-fluid herotit">
  <div class="row">
    <div class="col-12">
      <h2 class="tit-drinklist attivo">LOCATION</h2>
      <div class="informaz">
        <p> Flanagan's nasce dalla voglia di recuperare i valori di un'epoca in cui i cocktail bar erano vissuti in tutt'altro modo.
Vogliamo recuperare quella differenza cruciale tra quantità e qualità e che definiva la scelta di come passare un momento. Per questo offriamo un menù completamente originale in cui ogni drink è pensato per non lasciare solo un gusto, ma soprattutto un ricordo.
</p>
      </div>
    </div>
  </div>
  <div class="row slaider  text-center">
    <div class="col-12 slid location1"></div>
    <div class="col-12 slid location2"></div>
    <div class="col-12 slid location3"></div>
    <div class="col-12 slid location4"></div>
  </div>
</div>
<div id="myDropdown2" class="container-fluid drinklist">
  <div class="row no-gutters justify-content-center">
    <div class="col-12">
      <h2 class="tit-drinklist attivo">DRINKLIST</h2>
    </div>
    <div class="col-12 e show">
      <div class="drink drink1">
        <div role="button" data-toggle="collapse" data-target="#drink1" aria-expanded="true" class="flip-button"><h3>Kivy</h3></div>
        <div class="collapse" id="drink1">
          <div class="card card-body ">
            <div class="flip-text">
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
    <div class="col-12 e show">
      <div class="drink drink2">
        <div role="button" data-toggle="collapse" data-target="#drink2" aria-expanded="false" class="flip-button"> <h3>Lechuza</h3> </div>
        <div class="collapse" id="drink2">
          <div class="card card-body ">
            <div class="flip-text">
              
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
    <div class="col-12 e show">
      <div class="drink drink3">
        <div role="button" data-toggle="collapse" data-target="#drink3" aria-expanded="false" class="flip-button"><h3>St. Martini</h3> </div>
        <div class="collapse" id="drink3">
          <div class="card card-body ">
            <div class="flip-text">
              
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
    <div class="col-12 e show">
      <div class="drink drink4">
        <div role="button" data-toggle="collapse" data-target="#drink4" aria-expanded="false" class="flip-button"><h3>Buddy</h3></div>
        <div class="collapse" id="drink4">
          <div class="card card-body ">
            <div class="flip-text">
              
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
    <div class="col-12 e show">
      <div class="drink drink5">
        <div role="button" data-toggle="collapse" data-target="#drink5" aria-expanded="false" class="flip-button"><h3>Jolly Fizz</h3></div>
        <div class="collapse" id="drink5">
          <div class="card card-body ">
            <div class="flip-text">
              
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
    <div class="col-12 e show">
      <div class="drink drink6">
        <div role="button" data-toggle="collapse" data-target="#drink6" aria-expanded="false" class="flip-button"><h3>Sinsemì</h3> </div>
        <div class="collapse" id="drink6">
          <div class="card card-body ">
            <div class="flip-text">
              
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
    <div class="col-12 e show">
      <div class="drink drink7">
        <div role="button" data-toggle="collapse" data-target="#drink7" aria-expanded="false" class="flip-button"><h3>Springer</h3> </div>
        <div class="collapse" id="drink7">
          <div class="card card-body ">
            <div class="flip-text">
              
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
    <div class="col-12 e show">
      <div class="drink drink8">
        <div role="button" data-toggle="collapse" data-target="#drink8" aria-expanded="false" class="flip-button"><h3>Pachamama</h3> </div>
        <div class="collapse" id="drink8">
          <div class="card card-body ">
            <div class="flip-text">
              
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
    <div class="col-12 e show">
      <div class="drink drink9">
        <div role="button" data-toggle="collapse" data-target="#drink9" aria-expanded="false" class="flip-button"><h3>Calvados</h3> </div>
        <div class="collapse" id="drink9">
          <div class="card card-body ">
            <div class="flip-text">
              
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
   
<div class="container-fluid herotit">
  <div class="row">
    <div class="col-12">
      <h2 class="tit-drinklist attivo">INFO</h2>
    </div>
  </div>
  <div class="row justify-content-center text-center  ">
    <div class="col-12 ">
      <div class="mappi">
        <div>
        
        
        </div>
        <br></br>
      </div>
    </div>
  </div>
  <div class="row justify-content-center text-center ">
    <div class="col-12  ">
      <div class="orario">
        <h3>OPEN 4 P.M.-CLOSE 11 P.M.</h3>
      </div>
    </div>
  </div>
  <div class="row justify-content-center text-center ">
    <div class="col-12  ">
      <div class="bottone-chiama "><a href="">
        <h3>INVIA MESSAGGIO</h3>
        </a></div>
    </div>
  </div>
</div>
		
		
		
		
		
		
		
		
		
		
		
			</div>
	)
}

export default Flanagans;
