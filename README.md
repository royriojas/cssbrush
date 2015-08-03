[![NPM Version](http://img.shields.io/npm/v/cssbrush.svg?style=flat)](https://npmjs.org/package/cssbrush)
[![Build Status](http://img.shields.io/travis/royriojas/cssbrush.svg?style=flat)](https://travis-ci.org/royriojas/cssbrush)

# cssbrush
Alternative cli for csscomb with glob support and that only operates on changed files

## What's different compared to `csscomb`?
- Specify the files to beautify using globs. e.g:

  ```bash
  # operate only on the files that match the glob
  cssbrush 'src/**/*.js' 'diff/**/*.js'
  ```

- Operate on changed files only. Useful if you run this tool as part of a `precommit` or `prepush` hooks.
  By default, this module will remember files it beautified before, and only beautify them again if the files changed.

  **The cache is stored inside your node_modules**, add an entry to ignore `.cache` if you commit your code to your VCS

- Two new options added to the `csscomb.json` file:

  ```javascript
  {
    // adds a new line before each selector to nicely separate them.
    // set it to "" if you don't this behavior
    "space-before-selector": "\n",
    // how many empty lines you want to keep
    "max-empty-lines": "\n\n",
  }
  ```

##

## Install

```bash
npm i -g cssbrush
```

## Usage

Here is the output of the `--help` option

```bash
Usage: cssbrush [options] glob [glob1] [glob2]..[globN]

Options:
  -k, --check-only     Will just run the beautifier and report which files need to be beautified
  -u, --use-cache      If true, this module will remember the `mtime` and `size` of the beatufied files and only operate on the ones that changed. If false,
                       the cache will be destroyed. Cache will be used unless `--no-use-cache` is specified  - default: true
  -h, --help           Show this help
  -v, --version        Outputs the version number
  -q, --quiet          Show only the summary info - default: false
  --colored-output     Use colored output in logs
  -c, --config String  Path to your `csscomb` config, if not provided will try to use the `.csscomb.json` file in your current working directory, if not
                       found will use the one provided with this package.
                       Build your own config here: http://csscomb.com/config
```

```bash
cssbrush 'path/to/files/**/*.less' # or css
```

## Examples

```bash
# lint your code to see how many files need beautification
# this will fail if some file need beautification
cssbrush -k 'path/to/files/**/*.less'

# do not use the cache
#
cssbrush --no-use-cache 'path/to/files/**/*.less'
```

## License

[MIT](./LICENSE)

## Changelog

[Changelog](./changelog.md)
