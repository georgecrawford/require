/* global require */

require(["one", "two", "three"], function (one, two, three) {

	"use strict";

	var log = document.getElementById('log');

	console.log('one:', one);
	console.log('two:', two);
	console.log('three:', three);

	log.innerHTML += 'done - hooray!';

});