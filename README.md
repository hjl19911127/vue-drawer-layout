# vue-drawer-layout
A simple drawer layout component like Android has for [Vue.js](http://vuejs.org)

## Documentation
[https://github.com/hjl19911127/vue-drawer-layout](https://github.com/hjl19911127/vue-drawer-layout)

## Demo
[http://chat.codehuang.com/message](http://chat.codehuang.com/message)

## Requirements
* [Vue.js](http://vuejs.org) (2.x)

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

```html
<vue-drawer-layout
      ref="menu"
      :width="width"
      :action="sideMenuAction"
      :animate="true"
      :enable="sideMenuEnable"
      @slide-start="handleSlideStart"
      @slide-move="handleSlideMove"
      @slide-end="handleSlideEnd"
      @mask-click="handleMaskClick">
          <div class="drawer-content" slot="drawer">
            <!-- drawer-content -->
          </div>
          <div slot="content">
            <!-- main-content -->
          </div>
</vue-drawer-layout>
```
## API

### Props

| Name | Info | Type | Default | Values |
|-----------|-----------|-----------|-------------|--------------|
| width | width of drawer | `Number` | `80% of the document.body.clientWidth` |  |
| enable | is drawer enable | `Boolean` | - |
| animate | is drawer animate during moving | `Boolean` | - |
| action | set drawer visible or not | `Object` | - | `{visible: boolean}` |

### Slots

| Name | Info | 
|-----------|-----------|
| drawer | content in drawer-content |
| content | content in main-content |

### Events

| Name | Info | arguments |
|-----------|-----------|-----------|
| slide-start | event of drawer start to slide (touchdown) | `pos(int)` |
| slide-move | event of drawer sliding (touchmove) | `pos(int)` |
| slide-end | event of drawer sliding (touchend) | `pos(int),visible(boolean)` |
| mask-click | event of mask click | - |

## License
vue-drawer-layout is open source and released under the [MIT License](LICENSE).

Copyright (c) 2017 Alexander Huang.
