// JavaScript Document
import React from 'react';

function stampa() {
	const stampa = () => {
		console.log('stampa')
	}
	return ( 
	<button onClick={stampa}>cliccami</button>
	)
}

export default stampa