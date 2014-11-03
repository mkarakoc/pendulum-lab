// Copyright 2002-2014, University of Colorado Boulder

/**
 * Stopwatch model in 'Pendulum Lab' simulation.
 *
 * @author Andrey Zelenkov (MLearner)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var Movable = require( 'PENDULUM_LAB/common/model/Movable' );

  /**
   * @constructor
   */
  function Stopwatch() {
    Movable.call( this );

    // flag to controls visibility
    this.addProperty( 'isVisible', false );

    // add properties for time tracking
    this.addProperty( 'isRunning', false ); // flag to determine stopwatch state
    this.addProperty( 'elapsedTime', 0 ); // property to track passed time
  }

  return inherit( Movable, Stopwatch );
} );