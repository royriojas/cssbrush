var gonzales = require( 'gonzales-pe' );

function processBlock( x, level ) {
  level = level || 0;

  x.forEach( function ( node ) {
    level++;

    if ( node.is( 'declaration' ) ) {
      var space = gonzales.createNode( {
        type: 'space',
        content: '\n'
      } );
      node.insert( 0, space );
    }

    processBlock( node, level );
  } );
}
module.exports = {
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
    // if ( node.type === 'property' ) {
    //   //console.log( 'node', node.content );
    //   node.content[0].content = '\n\n' + node.content[0].content;
    // }

  }
};
