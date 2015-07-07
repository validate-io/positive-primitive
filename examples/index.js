'use strict';

var isPositive = require( './../lib' );

console.log( isPositive( 5 ) );
// returns true

console.log( isPositive( Math.PI ) );
// returns true

console.log( isPositive( 0 ) );
// returns false

console.log( isPositive( -5 ) );
// returns false

console.log( isPositive( new Number( 5 ) ) );
// returns false
