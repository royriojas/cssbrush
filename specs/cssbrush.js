describe( 'csscomb', function () {
  var expand = require( 'glob-expand' );
  var path = require( 'path' );

  var exec = require( '../lib/exec' );
  var read = function ( file ) {
    return require( 'fs' ).readFileSync( file, { encoding: 'utf8' } );
  };
  //var write = require( 'write' ).sync;

  var fs = require( 'fs-extra' );

  fs.removeSync( './tmp' );
  fs.copySync( './resources', './tmp' );

  var files = expand( 'tmp/fixtures/**/*.{less,scss}' );
  files.forEach( function ( file ) {

    var basename = path.basename( file );

    it( 'should format the file ' + basename + ' and match the expected result', function ( done ) {
      exec( './bin/cli.js --no-use-cache ' + file, { stdio: 'ignore' } ).then( function () {

        var expected = read( path.join( 'tmp/expected/', basename ) );
        var result = read( file );
        //console.log('here >> task complete, result', result, expected);

        expect( result ).to.equal( expected );

        done();
      } ).catch( function ( err ) {

        done( err );
      } );
    } );
  } );

  after( function () { //eslint-disable-line
    fs.removeSync( './tmp' );
  } );

} );
