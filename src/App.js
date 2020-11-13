import React from 'react';

import Header from './header';
import Home from './pages/Home';
import Salumeria from './pages/Ex_Salumeria';
import Pepi from './pages/Pepi_Vintage';
import Dopoteatro from './pages/Dopoteatro';
import Fesseria from './pages/La_Fesseria';
import Flanagans from './pages/Flanagans';


import Footer from './footer';  
import './Style2.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
 

function App(){
	return ( 
	<Router> 
		<div> 
		<Header/>
		<Switch>
		<Route exact path="/" component={Home}/>
		<Route exact path="/Pepi_Vintage" component={Pepi}/>
		<Route exact path="/Ex_Salumeria" component={Salumeria}/>
		<Route exact path="/Dopoteatro" component={Dopoteatro}/>
		<Route exact path="/La_Fesseria" component={Fesseria}/>
		<Route exact path="/Flanagans" component={Flanagans}/>
</Switch>

<Footer/>

		</div>
		</Router>
		
		
		
	)
}

export default App;