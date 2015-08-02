var dispatcher = require( 'dispatchy' );
var merge = require( 'extend' );
var fs = require( 'fs' );
var Comb = require( 'csscomb-core' );

var beautifier = merge( dispatcher.create(), {
  _init: function ( opts ) {
    var me = this;
    me.opts = opts;
    var CSSComb = require( 'csscomb/lib/csscomb' );
    me.comb = new CSSComb();
    me.cleanerComb = new Comb( [
      require( './lib/options/line-before-declaration' )
    ], 'css', 'less', 'scss', 'sass' );
    me.cleanerComb.configure( {
      'line-before-declaration': true
    } );
    me.comb.configure( opts.cfg );
  },
  format: function ( source, options ) {
    var me = this;
    source = me.cleanerComb.processString( source, options );
    return me.comb.processString( source, options );
  },
  beautify: function ( files ) {
    var me = this;
    var opts = me.opts;

    var useCache = !!opts.useCache;
    var checkOnly = !!opts.checkOnly;

    files = files || [];

    var cache = require( 'file-entry-cache' ).create( checkOnly ? '__cssbrush.check__' : '__cssbrush__' );

    if ( !useCache ) {
      cache.deleteCacheFile();
    } else {
      files = cache.getUpdatedFiles( files );
    }

    var write = require( 'write' ).sync;

    var count = 0;

    me.fire( 'beautify:start', {
      files: files
    } );

    if ( files.length === 0 ) {
      me.fire( 'done', {
        checkOnly: checkOnly,
        files: files,
        count: count
      } );
      return;
    }

    files.forEach( function ( file ) {
      var source = fs.readFileSync( file, {
        encoding: 'utf8'
      } );
      var syntax = file.split( '.' ).pop();
      var output;
      try {
        output = me.format( source, {
          syntax: syntax,
          filename: file
        } );
      } catch (ex) {
        console.log( ex.stack );
        throw new Error( 'Error: ' + file + ':' + ex.lineNumber + ':' + ex.column + ' \n>> ' + ex.message );
      }

      if ( source !== output ) {
        if ( !checkOnly ) {
          write( file, output );
        } else {
          cache.removeEntry( file );
        }
        count++;
        me.fire( 'need:beautify', {
          check: checkOnly,
          file: file,
          count: count
        } );
      }
    } );

    cache.reconcile();
    me.fire( 'done', {
      checkOnly: checkOnly,
      files: files,
      count: count
    } );
  }
} );

module.exports = {
  create: function ( opts ) {
    var ins = Object.create( beautifier );
    ins._init( opts );

    return ins;
  }
};
