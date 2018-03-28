<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/carlosthe19916/w4-forms/master/demo/src/assets/logo.svg">
</p>

# w4-forms - Angular library built with ❤ using ngx-library yeoman generator.

[![npm version](https://badge.fury.io/js/w4-forms.svg)](https://badge.fury.io/js/w4-forms),
[![Build Status](https://travis-ci.org/carlosthe19916/w4-forms.svg?branch=master)](https://travis-ci.org/carlosthe19916/w4-forms)
[![Coverage Status](https://coveralls.io/repos/github/carlosthe19916/w4-forms/badge.svg?branch=master)](https://coveralls.io/github/carlosthe19916/w4-forms?branch=master)
[![dependency Status](https://david-dm.org/carlosthe19916/w4-forms/status.svg)](https://david-dm.org/carlosthe19916/w4-forms)
[![devDependency Status](https://david-dm.org/carlosthe19916/w4-forms/dev-status.svg?branch=master)](https://david-dm.org/carlosthe19916/w4-forms#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/carlosthe19916/w4-forms.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://carlosthe19916.github.io/w4-forms

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `w4-forms` via:
```shell
npm install --save w4-forms
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `w4-forms`:
```js
map: {
  'w4-forms': 'node_modules/w4-forms/bundles/w4-forms.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'w4-forms';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'w4-forms';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'w4-forms';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Carlos Feria. Licensed under the MIT License (MIT)
