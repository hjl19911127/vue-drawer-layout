<template>
  <div class="layout">
    <div class="head">
      <div class="container">
        <div class="left">
          <h1 class="title">Vue Drawer Layout</h1>
          <h3 class="hint">
            A simple DrawerLayout component like Android has for
            <a href="http://vuejs.org">Vue.js</a>
          </h3>
        </div>
        <div class="right">
          <div class="github-btn">
            <a href="https://github.com/hjl19911127/vue-drawer-layout">View on Github</a>
          </div>
          <div>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=hjl19911127&repo=vue-drawer-layout&type=star&count=true&size=large"
              frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=hjl19911127&repo=vue-drawer-layout&type=watch&count=true&size=large&v=2"
              frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=hjl19911127&repo=vue-drawer-layout&type=fork&count=true&size=large"
              frameborder="0" scrolling="0" width="158px" height="30px"></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="example">
        <h2 class="title">
          Install
        </h2>
        <p class="hint">
          npm install vue-drawer-layout --save
        </p>
      </div>
      <div class="example">
        <h2 class="title">
          Basic Usage
        </h2>
        <p class="hint">
          Try to use your mouse drag from left to right.
        </p>
        <div class="wrap">
          <div class="demo">
            <demo1/>
          </div>
          <div class="code">
            <codes name="demo1"/>
          </div>
        </div>
      </div>
      <div class="example">
        <h2 class="title">
          Slide out from right
        </h2>
        <p class="hint">
          Set <code>reverse="true"</code> then drag from right to left.
        </p>
        <div class="wrap">
          <div class="demo">
            <demo2/>
          </div>
          <div class="code">
            <codes name="demo2"/>
          </div>
        </div>
      </div>
      <div class="example">
        <h2 class="title">
          Content movable
        </h2>
        <p class="hint">
          Set <code>content-drawable="true"</code> to enable content moving.
        </p>
        <div class="wrap">
          <div class="demo">
            <demo3/>
          </div>
          <div class="code">
            <codes name="demo3"/>
          </div>
        </div>
        <p class="hint">
          And you could set <code>drawer-width</code> and <code>drawable-distance</code>with different value to make
          drawer and content with different
          move distance(speed). Set <code>z-index="0"</code> to hide the drawer below the content then you could have a
          clear view of it.
        </p>
        <div class="wrap">
          <div class="demo">
            <demo4/>
          </div>
          <div class="code">
            <codes name="demo4"/>
          </div>
        </div>
      </div>
      <div class="example">
        <h2 class="title">
          Methods
        </h2>
        <p class="hint">
          Use method <code>toggle</code> to show and hide drawer.
        </p>
        <div class="wrap">
          <div class="demo">
            <demo5/>
          </div>
          <div class="code">
            <codes name="demo5"/>
          </div>
        </div>
      </div>
      <div class="example">
        <h2 class="title">
          Events
        </h2>
        <p class="hint">
          We defined several events such as <code>slide-start</code> <code>slide-move</code> <code>slide-end</code> and
          <code>mask-click</code>. This example show you how to use it to do fun jobs like hide drawer by clicking mask.
        </p>
        <div class="wrap">
          <div class="demo">
            <demo6/>
          </div>
          <div class="code">
            <codes name="demo6"/>
          </div>
        </div>
        <p class="hint">
          You could get full api doc <a href="https://github.com/hjl19911127/vue-drawer-layout">View on Github</a> and
          wish this component is really helpful to you. Thanks!
        </p>
      </div>
    </div>
    <div class="foot">
      Copyright © {{new Date().getFullYear()}} <a href="https://github.com/hjl19911127">Alexander Huang</a>. Developed
      and maintained by <a href="https://github.com/hjl19911127">Alexander Huang</a>.
    </div>
  </div>
</template>
<script>
  import codes from './components/demos/DemoCode'
  import Demo1 from './components/demos/Demo1'
  import Demo2 from './components/demos/Demo2'
  import Demo3 from './components/demos/Demo3'
  import Demo4 from './components/demos/Demo4'
  import Demo5 from './components/demos/Demo5'
  import Demo6 from './components/demos/Demo6'

  export default {
    data() {
      return {}
    },
    components: {
      codes,
      Demo1,
      Demo2,
      Demo3,
      Demo4,
      Demo5,
      Demo6
    },
    methods: {},
  }
</script>
<style lang="scss">
  .layout {
    font-size: 16px;

    a {
      font-size: 16px;
    }
  }

  .container {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .head {
    background: #f5f5f5 linear-gradient(to bottom, #eee 0, #f5f5f5 100%);
    padding: 30px 0;

    a {
      text-decoration: underline
    }

    .title {
      font-size: 36px;
      color: #333;
      line-height: 2;
    }

    .hint {
      color: #666;
    }
  }

  .left {
    float: left
  }

  .right {
    float: right;

    .github-btn {
      text-align: right;
      padding: 52px 36px 20px 0;

      a {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 18px;
        display: inline-block;
        padding: 0 16px;
        text-align: center;
        height: 40px;
        line-height: 40px;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #ccc;
        color: #333;

        &:hover {
          background-color: darken(#fff, 5%)
        }

        &:active {
          background-color: darken(#fff, 10%)
        }
      }
    }
  }

  .foot {
    height: 100px;
    line-height: 100px;
    text-align: center;
    background-color: #666;
    color: #fff;
    margin-top: 80px;

    a {
      color: #fff;
      text-decoration: underline;
    }
  }

  .example {
    overflow: hidden;

    .title {
      font-size: 30px;
      font-weight: bold;
      margin: 60px 0 0 0;
    }

    .hint {
      margin: 20px 0 1em 0;
      line-height: 1.5;
      color: #666;
    }

    code {
      background-color: #eee;
    }
  }

  .wrap {
    overflow: hidden;
  }

  .demo {
    position: relative;
    float: left;
    width: 600px;
    height: 300px;
    background-color: #fa8787;
    user-select: none;
    margin-right: 50px;
  }

  .code {
    box-sizing: border-box;
    font-size: 14px;
    float: left;
    position: relative;
    width: 550px;
    height: 300px;
    overflow: auto;
    padding: 0 20px;
    background-color: #fdf6e3;
  }

  .drawer {
    position: absolute;
    background-color: #ff9d7a;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .content {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #fa8787;
  }

  .text {
    font-size: 50px;
    text-align: center;
    line-height: 300px;
    color: #ffffff;
  }

  .btn {
    position: absolute;
    display: block;
    border-radius: 5px;
    top: 5px;
    left: 5px;
    font-size: 14px;
    padding: 10px 12px;
    color: #333;
    background-color: #fff;
    text-decoration: none;
  }
</style>
