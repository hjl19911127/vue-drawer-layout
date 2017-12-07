# vue-drawer-layout
A simple drawer layout component like Android has for [Vue.js](http://vuejs.org)

## Documentation
[https://github.com/hjl19911127/vue-drawer-layout](https://github.com/hjl19911127/vue-drawer-layout)

## Demo
[http://chat.codehuang.com/message](http://chat.codehuang.com/message)

## Requirements
* [Vue.js](http://vuejs.org) (^v2.0.0)

## Browser Support
Modern browsers and Internet Explorer 10+(due to CSS transition support).

## Installation

### NPM

```bash
npm install vue-drawer-layout --save
```

## Usage


### ES6
*The following examples can also be used with CommonJS by replacing ES6-specific syntax with CommonJS equivalents.*

```js
import Vue from 'vue'
import DrawerLayout from 'vue-drawer-layout'

Vue.use(DrawerLayout)
// or
import {DrawerLayout} from 'vue-drawer-layout'
Vue.component(DrawerLayout.name, DrawerLayout)
```

### Globals (script tag)

Add a script tag pointing to `dist/vue-drawer-layout.js` *after* adding Vue.

Example:

```html
<html>
<head>
  ...
</head>
<body>
  <div id="app">
    <vue-drawer-layout></vue-drawer-layout>
  </div>

  <script src="path/to/vue.js"></script>
  <script src="path/to/vue-drawer-layout.js"></script>
  <script>
    new Vue({
      el: '#app'
    })
    Vue.use(DrawerLayout)
  </script>
</body>
</html>
```

## License
vue-drawer-layout is open source and released under the [MIT License](LICENSE).

Copyright (c) 2017 Alexander Huang.
