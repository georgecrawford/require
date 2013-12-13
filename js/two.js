/* global define */

define(function () {

	"use strict";

	var name = parseInt(Math.random()*100000, 10) + '-two';

	return {
		name: name
	};
});