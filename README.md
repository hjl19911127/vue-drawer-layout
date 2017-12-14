# vue-drawer-layout
A simple drawer layout component like Android has for [Vue.js](http://vuejs.org)

[中文文档](https://github.com/hjl19911127/vue-drawer-layout)

## Demo
[Mobile QQ by Alexander Huang](http://chat.codehuang.com/message)

Click the avatar at the top-left or touch(click) and drag to right.

## Requirements
* [Vue.js](http://vuejs.org) (2.x)

## Browser Support
Modern browsers and Internet Explorer 10+(due to CSS transition support).

## Installation

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
You can easily just set nothing or only`width` prop to get a simple drawer.
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
Or you can set every prop as you want to get a fantastic drawer like mobile QQ has.

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

| Name | Info | Type | Default | Values |
|-----------|-----------|-----------|-------------|--------------|
| width | width of drawer(px) | `Number` | 80% of the body width | - |
| drawable-distance | farthest distance to draw(px) | `Number` | same as `width` prop | - |
| z-index | z-index of drawer | `Number` | `818` |  |
| content-drawable | z-index of drawer | `Boolean` | `false` | - |
| backdrop | whether to show backdrop | `Boolean` | `true` | - |
| backdrop-opacity-range | the opacity range of backdrop | `Array` | `[0,0.4]` | - |
| enable | is drawer enable | `Boolean` | `true` | - |
| animatable | is drawer animate during moving | `Boolean` | `true` |

### Slots

| Name | Info | 
|-----------|-----------|
| drawer | content in drawer-content |
| content | content in main-content |

### Methods

| Name | Info | Arguments | Usage |
|-----------|-----------|-----------|-----------|
| toggle | method to show and hide drawer | `visible(Boolean)` | `toggle(true/false)` or `toggle()`to toggle visible status

### Events

| Name | Info | Callback Arguments |
|-----------|-----------|-----------|
| slide-start | drawer start to slide (touchdown) | - |
| slide-move | drawer sliding (touchmove) | `pos(int)` |
| slide-end | drawer sliding (touchend) | `visible(boolean)` |
| mask-click | touch(click) on mask  | - |

## License
vue-drawer-layout is open source and released under the [MIT License](LICENSE).

Copyright (c) 2017 Alexander Huang.
