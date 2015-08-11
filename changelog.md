
# cssbrush - Changelog
## v0.4.1
- **Build Scripts Changes**
  - Update to latest clix-logger - [144bef3]( https://github.com/royriojas/cssbrush/commit/144bef3 ), [royriojas](https://github.com/royriojas), 11/08/2015 13:53:40

    
## v0.4.0
- **Build Scripts Changes**
  - Add back esbeautifier as a dev dependency - [e4fc411]( https://github.com/royriojas/cssbrush/commit/e4fc411 ), [royriojas](https://github.com/royriojas), 05/08/2015 21:17:52

    
## v0.3.0
- **Build Scripts Changes**
  - Add cache-id to cssbrush to be able to run this task in parallel - [09e098d]( https://github.com/royriojas/cssbrush/commit/09e098d ), [royriojas](https://github.com/royriojas), 05/08/2015 18:12:52

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
  - change the default quotes to single - [305a0a6]( https://github.com/royriojas/cssbrush/commit/305a0a6 ), [royriojas](https://github.com/royriojas), 03/08/2015 11:26:25

    
## v0.2.2
- **Bug Fixes**
  - lock dependencies - [2f74599]( https://github.com/royriojas/cssbrush/commit/2f74599 ), [royriojas](https://github.com/royriojas), 03/08/2015 11:03:39

    
## v0.2.1
- **Build Scripts Changes**
  - Remove test resources created during tests - [97fc3e2]( https://github.com/royriojas/cssbrush/commit/97fc3e2 ), [royriojas](https://github.com/royriojas), 03/08/2015 10:44:22

    
## v0.2.0
- **Features**
  - Add option to add a new line before selectors and to limit the number of empty lines - [1e42fee]( https://github.com/royriojas/cssbrush/commit/1e42fee ), [royriojas](https://github.com/royriojas), 02/08/2015 20:57:30

    
## v0.1.0
- **Features**
  - First working version of cssbrush - [b15fe78]( https://github.com/royriojas/cssbrush/commit/b15fe78 ), [royriojas](https://github.com/royriojas), 02/08/2015 02:23:52

    
