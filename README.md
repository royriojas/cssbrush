[![NPM Version](http://img.shields.io/npm/v/cssbrush.svg?style=flat)](https://npmjs.org/package/cssbrush)
[![Build Status](http://img.shields.io/travis/royriojas/cssbrush.svg?style=flat)](https://travis-ci.org/royriojas/cssbrush)

# cssbrush
Alternative cli for csscomb with glob support and that only operates on changed files

## What's different?
- Specify the files to beautify using globs. e.g:

  ```bash
  # operate only on the files that match the glob
  cssbrush 'src/**/*.js' 'diff/**/*.js'
  ```

- Operate on changed files only. Useful if you run this tool as part of a `precommit` or `prepush` hooks.
  By default, this module will remember files it beautified before, and only beautify them again if the files changed.

  **The cache is stored inside your node_modules**, add an entry to ignore `.cache` if you commit your code to your VCS

## Install

```bash
npm i -g cssbrush
```

## Usage

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
