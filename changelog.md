
# cssbrush - Changelog
## v0.6.0
- **undefined**
  - package.json & .snyk to reduce vulnerabilities - [3f25637]( https://github.com/royriojas/cssbrush/commit/3f25637 ), [snyk-bot](https://github.com/snyk-bot), 04/12/2017 18:06:09

    The following vulnerabilities are fixed with a Snyk patch:
    - https://snyk.io/vuln/npm:moment:20170905
    
    Latest report for royriojas/cssbrush:
    https://snyk.io/test/github/royriojas/cssbrush
## v0.5.0
- **Bug Fixes**
  - Make sure mixins and variables are always on top - [c8cb657]( https://github.com/royriojas/cssbrush/commit/c8cb657 ), [royriojas](https://github.com/royriojas), 08/10/2015 19:10:31

    
## v0.4.9
- **Enhancements**
  - destroy the cache when the configuration options change - [e5c26f9]( https://github.com/royriojas/cssbrush/commit/e5c26f9 ), [royriojas](https://github.com/royriojas), 23/09/2015 22:56:23

    
## v0.4.8
- **Build Scripts Changes**
  - Do not depend on shrink-wrap - [3a97b01]( https://github.com/royriojas/cssbrush/commit/3a97b01 ), [royriojas](https://github.com/royriojas), 31/08/2015 13:56:53

    
## v0.4.7
- **Bug Fixes**
  - missing `glob-expand` error - [8e1abbc]( https://github.com/royriojas/cssbrush/commit/8e1abbc ), [royriojas](https://github.com/royriojas), 18/08/2015 03:12:28

    
## v0.4.6
- **Bug Fixes**
  - Make sure the right clix module is loaded - [de1ccf0]( https://github.com/royriojas/cssbrush/commit/de1ccf0 ), [royriojas](https://github.com/royriojas), 17/08/2015 17:13:04

    
## v0.4.5
- **Bug Fixes**
  - properly expand globs that contains globs with exclude patterns - [1f4a93e]( https://github.com/royriojas/cssbrush/commit/1f4a93e ), [royriojas](https://github.com/royriojas), 16/08/2015 22:18:13

    
## v0.4.4
- **Build Scripts Changes**
  - update clix dep to get nicer log output - [fa95bec]( https://github.com/royriojas/cssbrush/commit/fa95bec ), [royriojas](https://github.com/royriojas), 11/08/2015 19:31:17

    
## v0.4.3
- **Build Scripts Changes**
  - Update to latest clix - [aa4b574]( https://github.com/royriojas/cssbrush/commit/aa4b574 ), [royriojas](https://github.com/royriojas), 11/08/2015 16:39:35

    
## v0.4.2
- **Build Scripts Changes**
  - remove unused dep and added latest clix - [eb6393b]( https://github.com/royriojas/cssbrush/commit/eb6393b ), [royriojas](https://github.com/royriojas), 11/08/2015 15:58:59

    
## v0.4.1
- **Build Scripts Changes**
  - Update to latest clix-logger - [144bef3]( https://github.com/royriojas/cssbrush/commit/144bef3 ), [royriojas](https://github.com/royriojas), 11/08/2015 15:53:40

    
## v0.4.0
- **Build Scripts Changes**
  - Add back esbeautifier as a dev dependency - [e4fc411]( https://github.com/royriojas/cssbrush/commit/e4fc411 ), [royriojas](https://github.com/royriojas), 05/08/2015 23:17:52

    
## v0.3.0
- **Build Scripts Changes**
  - Add cache-id to cssbrush to be able to run this task in parallel - [09e098d]( https://github.com/royriojas/cssbrush/commit/09e098d ), [royriojas](https://github.com/royriojas), 05/08/2015 20:12:52

    Doing
    
    ```bash
    cssbrush --cache-id='some-id' '/path/to/files/**/*.less'
    ```
    
    or
    
    ```bash
    cssbrush -i 'some-id' '/path/to/files/**/*.less'
    ```
    
    will generate a cache file like __cssbrush__some-id inside the flat-cache module
    
## v0.2.3
- **Refactoring**
  - change the default quotes to single - [305a0a6]( https://github.com/royriojas/cssbrush/commit/305a0a6 ), [royriojas](https://github.com/royriojas), 03/08/2015 13:26:25

    
## v0.2.2
- **Bug Fixes**
  - lock dependencies - [2f74599]( https://github.com/royriojas/cssbrush/commit/2f74599 ), [royriojas](https://github.com/royriojas), 03/08/2015 13:03:39

    
## v0.2.1
- **Build Scripts Changes**
  - Remove test resources created during tests - [97fc3e2]( https://github.com/royriojas/cssbrush/commit/97fc3e2 ), [royriojas](https://github.com/royriojas), 03/08/2015 12:44:22

    
## v0.2.0
- **Features**
  - Add option to add a new line before selectors and to limit the number of empty lines - [1e42fee]( https://github.com/royriojas/cssbrush/commit/1e42fee ), [royriojas](https://github.com/royriojas), 02/08/2015 22:57:30

    
## v0.1.0
- **Features**
  - First working version of cssbrush - [b15fe78]( https://github.com/royriojas/cssbrush/commit/b15fe78 ), [royriojas](https://github.com/royriojas), 02/08/2015 04:23:52

    
