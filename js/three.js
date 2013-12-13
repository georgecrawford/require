/* global define */

define(["./one", "./two"], function(one, two) {

	"use strict";

		return {
			name: 'three',
			one:  one,
			two:  two
		};
	}
);