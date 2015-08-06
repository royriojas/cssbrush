var path = require( 'path' );

module.exports = {
  pkgJSONPath: path.resolve( __dirname, '../package.json' ),
  configFile: {
    defaultName: '.csscomb.json',
    pathToLocalConfig: path.resolve( __dirname, '../configs/csscomb.json' ),
    description: 'Path to your `csscomb` config, if not provided will try to use the `.csscomb.json` file in your current working directory, if not found will use the one provided with this package.\n' +
      'Build your own config here: http://csscomb.com/config'
  },
  //useDefaultOptions: true,
  optionator: {
    prepend: 'Usage: cssbrush [options] glob [glob1] [glob2]..[globN]',
    options: [
      {
        heading: 'Options'
      },
      {
        option: 'check-only',
        alias: 'k',
        type: 'Boolean',
        description: 'Will just run the beautifier and report which files need to be beautified'
      },
      {
        option: 'cache-id',
        alias: 'i',
        type: 'String',
        description: 'An identifier for the cache file to create. This is only needed if you want to run this task in parallel otherwise the next execution might get confusing results for reusing the same cache file.'
      },
      {
        option: 'use-cache',
        alias: 'u',
        type: 'Boolean',
        default: 'true',
        description: 'If true, this module will remember the `mtime` and `size` of the beatufied files and only operate on the ones that changed. If false, the cache will be destroyed. Cache will be used unless `--no-use-cache` is specified '
      }
    ]
  }
};
