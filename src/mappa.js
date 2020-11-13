// JavaScript Document
var myIcon = L.icon({
  iconUrl: '../src/img/pin.png',
  iconSize: [24, 42],
});

var mymap = L.map( 'mapid', {

  gestureHandling: true
}).setView([40.846588, 14.256086], 13);
L.tileLayer('http://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFyaW92ZXR0dXJhIiwiYSI6ImNrOW0yNTVsdTAwNzkzZm1rb3pwNDhmdWQifQ.fHNLOfHCosy5Bt8_CxyT6Q', {
  maxZoom: 24,
  attribution: 'Map data © <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors, '
    + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '
    + 'Imagery © <a href="http://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
}).addTo(mymap);

L.control.locate({
  initialZoomLevel: '13',
  returnToPrevBounds: 'true',
  icon: 'gps'
}).addTo(mymap);
var markerfesseriaria = L.marker([40.847719, 14.256807], {
  icon: myIcon
}).addTo(mymap).bindPopup('<a href="https://www.drinkinstreet.it/La_Fesseria//">LA FESSERIA<div class="logofesser logos"></div></a>');
var markerpepi = L.marker([40.8498256, 14.2541471], {
  icon: myIcon
}).addTo(mymap).bindPopup('<a href="https://www.drinkinstreet.it/Pepi_Vintage/">PEPI VINTAGE	<div class="logopepi logos"></div></a>');
var markersalumeria = L.marker([40.845756, 14.254832], {
  icon: myIcon
}).addTo(mymap).bindPopup('<a href="https://www.drinkinstreet.it/EX_Salumeria/">EX SALUMERIA<div class="logosalume logos"></div></a>');
var markersflanagans = L.marker([40.833893, 14.240342], {
  icon: myIcon
}).addTo(mymap).bindPopup('<a href="https://www.drinkinstreet.it/Flanagans/">FLANAGANS<div class="logoflanaga logos"></div></a>');
var markersbeer = L.marker([40.800695, 14.176836], {
  icon: myIcon
}).addTo(mymap).bindPopup('<a href="https://www.drinkinstreet.it/?page_id=463">BEER GARDEN<div class="logofactory logos"></div></a>');

var markerfactory = L.marker([40.8502758, 14.2505547], {
  icon: myIcon
}).addTo(mymap).bindPopup('<a href="https://www.drinkinstreet.it/Dopoteatro/">Dopoteatro<div class="logobuco logos"></div></a>');
