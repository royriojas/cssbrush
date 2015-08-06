'use strict';

module.exports = {
  run: function ( cli ) {

    var expand = require( 'glob-expand' );
    var sFormat = require( 'stringformat' );
    var path = require( 'path' );
    var process = require( './../lib/process' );

    var opts = cli.opts;

    var files = opts._.map( function ( glob ) {
      return path.resolve( process.cwd(), glob );
    } );

    files = expand.apply( null, files );

    if ( files.length === 0 ) {
      //console.log( chalk.green( '>> no files to beautify' ) );
      cli.ok( 'No files to beautify' );
      return;
    }

    var cfg = cli.getConfig();
    var checkOnly = !!opts.checkOnly;
    var useCache = !!opts.useCache;

    var beautifier = require( '../index' ).create( {
      useCache: useCache,
      checkOnly: checkOnly,
      cfg: cfg,
      cacheId: opts.cacheId
    } );

    beautifier.on( 'beautify:start', function ( e, _args ) {
      cli.subtle( 'Total files: ' + files.length + ', files to process: ' + _args.files.length );
      if ( _args.files.length === 0 ) {
        cli.subtle( 'No files have changed since last run' );
      }
    } );

    if ( !checkOnly ) {
      beautifier.on( 'need:beautify.cli', function ( e, _args ) {
        cli.subtle( 'beautifying', _args.file );
      } );

      beautifier.on( 'done.cli', function ( e, _args ) {
        var msg = _args.count > 0 ? sFormat( '{0} file(s) beautified', _args.count ) : 'No files needed beautification!';

        cli.success( msg );
        cli.ok( 'Esbeautifier done!' );
      } );
    } else {

      var filesToBeautify = [];

      beautifier.on( 'need:beautify.cli', function ( e, _args ) {
        filesToBeautify.push( _args.file );
      } );

      beautifier.on( 'done.cli', function () {
        if ( filesToBeautify.length > 0 ) {
          cli.error( 'the following files need beautification:\n\n   - ' + filesToBeautify.join( '\n   - ' ) + '\n' );
          throw new Error( sFormat( '{0} files need beautification', filesToBeautify.length ) );
        } else {
          cli.success( 'All files are beautified.' );
          cli.ok( 'Done!' );
        }
      } );
    }

    cli.subtle( 'cache:', useCache + ', checkOnly:', checkOnly );

    beautifier.beautify( files );

    beautifier.off( '.cli' );
  }
};
