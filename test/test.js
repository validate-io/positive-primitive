/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isPositive = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-positive-primitive', function tests() {

	it( 'should export a function', function test() {
		expect( isPositive ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isPositive( 5 );
		assert.ok( bool );

		bool = isPositive( Math.PI );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			'5',
			0,
			-5,
			Number.NEGATIVE_INFINITY,
			new Number( 5 ),
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ), values[i] );
		}
		function badValue( value ) {
			return isPositive( value );
		}
	});

});
