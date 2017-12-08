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
      :enable="sideMenuEnable"
      @slide-start="handleSlideStart"
      @slide-move="handleSlideMove"
      @slide-end="handleSlideEnd"
      @mask-click="handleMaskClick">
          <div class="menu-content" slot="drawer">
            <!--drawer-content （左侧滑动内容区）-->
          </div>
          <div slot="content">
            <!--main-content （主内容区）-->
          </div>
</vue-drawer-layout>
```
## API

### props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|--------------|
| width | 抽屉宽度 | `Number` | `body宽度的80%` |  |
| enable | 抽屉是否可用 | `Boolean` | - |
| action | 动作 | `Object` | - | `{visible: boolean}` |

### slots

| 参数 | 说明 | 
|-----------|-----------|
| drawer | 抽屉内嵌内容 |
| content | 主体区内容 |

### events

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| slide-start | drawer拖拽滑动开始的事件 | `pos(当前位置)` |
| slide-move | drawer拖拽滑动中的事件 | `pos(当前位置)` |
| slide-end | drawer拖拽滑动结束的事件 | `pos(当前位置),visible(开启关闭状态)` |
| mask-click | 蒙层点击的事件 | - |

## License
vue-drawer-layout is open source and released under the [MIT License](LICENSE).

Copyright (c) 2017 Alexander Huang.
