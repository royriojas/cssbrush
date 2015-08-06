var gonzales = require( 'gonzales-pe' );

module.exports = function ( addLineBeforeSelectors ) {

  function processBlock( x, level ) {

    level = level || 0;

    x.forEach( function ( node ) {
      level++;
      var space;

      if ( node.is( 'declaration' ) ) {

        space = gonzales.createNode( {
          type: 'space',
          content: '\n\n'
        } );

        node.insert( 0, space );
      }

      if ( ( ( node.is( 'selector' )) && addLineBeforeSelectors ) ) {

        space = gonzales.createNode( {
          type: 'space',
          content: addLineBeforeSelectors
        } );

        node.insert( 0, space );
      }

      processBlock( node, level );
    } );
  }

  return {
    name: 'line-before-declaration',
    syntax: [
      'css',
      'less',
      'scss'
    ],
    accepts: {
      boolean: [
        true
      ]
    },

    /**
     * Processes tree node.
     * @param {node} node
     */
    process: function ( node ) {
      if ( !node.is( 'stylesheet' ) ) {
        return;
      }

      processBlock( node, 0 );
    }
  };
};
