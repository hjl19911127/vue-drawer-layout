# vue-drawer-layout
[![npm](https://img.shields.io/npm/v/vue-drawer-layout.svg)](https://www.npmjs.org/package/vue-drawer-layout)
[![npm](https://img.shields.io/npm/dt/vue-drawer-layout.svg)](https://www.npmjs.org/package/vue-drawer-layout)
[![travis](https://img.shields.io/travis/hjl19911127/vue-drawer-layout.svg)](https://travis-ci.org/hjl19911127/vue-drawer-layout)
[![npm](https://img.shields.io/codecov/c/gh/hjl19911127/vue-drawer-layout.svg)](https://codecov.io/gh/hjl19911127/vue-drawer-layout)
[![npm](https://img.shields.io/npm/l/vue-drawer-layout.svg)](https://www.npmjs.org/package/vue-drawer-layout)
> A simple DrawerLayout component for [Vue.js](http://vuejs.org)

[中文文档](README.zh-CN.md)

## Demo

[http://share.codehuang.com/vue-drawer-layout](http://share.codehuang.com/vue-drawer-layout)

[Mobile QQ by Alexander Huang(click me or scan the qrcode)](http://chat.codehuang.com/message)

![Try it](assets/qrcode.png)

Click the avatar at the top-left or touch(click) and drag to right(left).

![Demo](assets/demo.png)

If the image is not animating, maybe your browser does not supports `APNG`, you could turn to the [GIF demo](assets/demo.gif).

## Dependencies
* [Vue.js](http://vuejs.org) (2.x)

## Browser Support
Modern (mobile) browsers and Internet Explorer 10+(due to CSS transition support) and X5 core is supported.

## Installation

```bash
npm install vue-drawer-layout --save
```

## Usage

*The following examples can also be used with CommonJS by replacing ES6-specific syntax with CommonJS equivalents.*

```js
import Vue from 'vue'
import DrawerLayout from 'vue-drawer-layout'

Vue.use(DrawerLayout)
// or
import {DrawerLayout} from 'vue-drawer-layout'
Vue.component(DrawerLayout.name, DrawerLayout)
```
You can easily just set nothing or only `drawer-width` prop to get a simple drawer.It act above the main content.
```html
<vue-drawer-layout ref="drawer" :drawer-width="800">
  <div class="drawer-content" slot="drawer">
    <!-- drawer-content -->
  </div>
  <div slot="content">
    <!-- main-content -->
  </div>
</vue-drawer-layout>
```
Or you can set every prop as you want to get a fantastic drawer like mobile QQ has(It act below the main content and with distance is 1/3 of the main content drag).

```html
<vue-drawer-layout
  ref="drawer"
  :drawer-width="800"
  :enable="true"
  :animatable="true"
  :z-index="0"
  :drawable-distance="Math.floor(800/3)"
  :content-drawable="true"
  :backdrop="true"
  :backdrop-opacity-range="[0,0.4]"
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

| Name | Info | Type | Default |
|-----------|-----------|-----------|-------------|
| drawer-width | width of drawer(px) | `Number` | 80% of the container(parentNode) width |
| drawable-distance | farthest distance to draw(px) | `Number` | same as `drawer-width` prop |
| z-index | z-index of drawer | `Number` | `818`(Don't Ask^_^) |
| content-drawable | whether to make content-wrapper drawable | `Boolean` | `false` |
| backdrop | whether to show backdrop | `Boolean` | `true` |
| backdrop-opacity-range | the opacity range of backdrop[min,max] | `Array` | `[0,0.4]` |
| enable | is drawer enable | `Boolean` | `true` |
| animatable | is drawer animate during moving | `Boolean` | `true` |
| reverse | is drawer slide out from right | `Boolean` | `false` |

### Slots

| Name | Info | 
|-----------|-----------|
| drawer | content in drawer-content |
| content | content in main-content |

### Methods

| Name | Info | Arguments | Usage |
|-----------|-----------|-----------|-----------|
| toggle | method to show and hide drawer | `visible(Boolean)` | `toggle(true/false)` or `toggle()`to show(hide) |

### Events

| Name | Info | Callback Arguments |
|-----------|-----------|-----------|
| slide-start | drawer start to slide (fired when touchdown) | - |
| slide-move | drawer sliding (fired when touchmove) | `pos(int)` |
| slide-end | drawer sliding (fired when touchend or transitionend) | `visible(boolean)` |
| mask-click | touch(click) on mask  | - |

## License
[MIT License](LICENSE).

Copyright (c) 2018 Alexander Huang.
