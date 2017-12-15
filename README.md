# vue-drawer-layout
[![npm](https://img.shields.io/npm/v/vue-drawer-layout.svg)](https://www.npmjs.org/package/vue-drawer-layout)
[![npm](https://img.shields.io/npm/dt/vue-drawer-layout.svg)](https://www.npmjs.org/package/vue-drawer-layout)
> A simple DrawerLayout component like Android has for [Vue.js](http://vuejs.org)

[中文文档](README.zh-CN.md)

## Demo
[Mobile QQ by Alexander Huang(click me or scan the qrcode)](http://chat.codehuang.com/message)

![Try it](assets/qrcode.png)

Click the avatar at the top-left or touch(click) and drag to right(left).

![Demo](assets/demo.gif)

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
You can easily just set nothing or only`width` prop to get a simple drawer.It act above the main content.
```html
<vue-drawer-layout
      ref="drawer"
      :width="800">
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
      :width="width"
      :enable="true"
      :animatable="true"
      :z-index="0"
      :drawable-distance="Math.floor(width/3)"
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
| width | width of drawer(px) | `Number` | 80% of the body width |
| drawable-distance | farthest distance to draw(px) | `Number` | same as `width` prop |
| z-index | z-index of drawer | `Number` | `818`(Don't Ask) |
| content-drawable | whether to make content-wrapper drawable | `Boolean` | `false` |
| backdrop | whether to show backdrop | `Boolean` | `true` |
| backdrop-opacity-range | the opacity range of backdrop[min,max] | `Array` | `[0,0.4]` |
| enable | is drawer enable | `Boolean` | `true` |
| animatable | is drawer animate during moving | `Boolean` | `true` |

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

Copyright (c) 2017 Alexander Huang.
