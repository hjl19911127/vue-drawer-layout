<template>
  <div id="app">
    <DrawerLayout
      ref="drawerLayout"
      :drawer-width="200"
      :enable="true"
      :animatable="true"
      :z-index="0"
      :content-drawable="true"
      :backdrop="true"
      :backdrop-opacity-range="[0,0.4]"
      @slide-start="handleSlideStart"
      @slide-move="handleSlideMove"
      @slide-end="handleSlideEnd"
      @mask-click="handleMaskClick">
      <div class="sidebar" slot="drawer">
        <div class="accordion">
          <input id="accordion-1" type="radio" name="accordion-radio" hidden="" checked="">
          <label class="accordion-header c-hand" for="accordion-1"><i class="icon icon-arrow-right mr-1"></i>Elements</label>
          <div class="accordion-body">
            <ul class="menu menu-nav">
              <li class="menu-item"><a href="#accordions">Element 1</a></li>
              <li class="menu-item"><a href="#accordions">Element 2</a></li>
            </ul>
          </div>
        </div>
        <div class="accordion">
          <input id="accordion-2" type="radio" name="accordion-radio" hidden="">
          <label class="accordion-header c-hand" for="accordion-2"><i class="icon icon-arrow-right mr-1"></i>Layout</label>
          <div class="accordion-body">
            <ul class="menu menu-nav">
              <li class="menu-item"><a href="#accordions">Layout 1</a></li>
              <li class="menu-item"><a href="#accordions">Layout 2</a></li>
            </ul>
          </div>
        </div>
        <div class="accordion">
          <input id="accordion-3" type="radio" name="accordion-radio" hidden="">
          <label class="accordion-header c-hand" for="accordion-3"><i class="icon icon-arrow-right mr-1"></i>Components</label>
          <div class="accordion-body">
            <ul class="menu menu-nav">
              <li class="menu-item"><a href="#accordions">Component 1</a></li>
              <li class="menu-item"><a href="#accordions">Component 2</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main" slot="content" style="padding: 0 15px;">
        <h1>Vue.js Radial Progress Bar</h1>
        <div class="timeline">
          <div class="timeline-item" id="timeline-example-1">
            <div class="timeline-left"><a class="timeline-icon tooltip" href="#timeline-example-1" data-tooltip="March 2016"></a></div>
            <div class="timeline-content">
              <div class="tile">
                <div class="tile-content">
                  <p class="tile-subtitle">March 2016</p>
                  <p class="tile-title">Initial commit</p>
                </div>
              </div>
            </div>
          </div>
          <div class="timeline-item" id="timeline-example-2">
            <div class="timeline-left"><a class="timeline-icon icon-lg tooltip" href="#timeline-example-2" data-tooltip="February 2017"><i class="icon icon-check"></i></a></div>
            <div class="timeline-content">
              <div class="tile">
                <div class="tile-content">
                  <p class="tile-subtitle">February 2017</p>
                  <p class="tile-title">New Documents experience</p>
                  <p class="tile-title">Bars: represent the progress of a task</p>
                  <p class="tile-title">Steps: progress indicators of a sequence of task steps</p>
                  <p class="tile-title">Tiles: repeatable or embeddable information blocks</p>
                </div>
                <div class="tile-action">
                  <button class="btn">View</button>
                </div>
              </div>
            </div>
          </div>
          <div class="timeline-item" id="timeline-example-3">
            <div class="timeline-left"><a class="timeline-icon icon-lg tooltip" href="#timeline-example-3" data-tooltip="March 2017"><i class="icon icon-check"></i></a></div>
            <div class="timeline-content">
              <div class="tile">
                <div class="tile-content">
                  <p class="tile-subtitle">March 2017</p>
                  <p class="tile-title">Icons: single-element, responsive and pure CSS icons</p>
                  <p class="tile-title">Popovers: small overlay content containers</p>
                  <p class="tile-title">Calendars: date or date range picker and events display</p>
                  <p class="tile-title">Carousels: slideshows for cycling images</p>
                </div>
                <div class="tile-action">
                  <button class="btn">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DrawerLayout>
  </div>
</template>

<script>
import DrawerLayout from './DrawerLayout.vue'

export default {
  name: 'app',
  components: {
    DrawerLayout
  },
  methods: {
    handleSlideStart() {
      // eslint-disable-next-line
      console.info('slide-start');
    },
    handleSlideMove(position) {
      // eslint-disable-next-line
      console.info('slide-move', position);
    },
    handleSlideEnd(visible) {
      // eslint-disable-next-line
      console.info('slide-end', visible);
    },
    handleMaskClick() {
      // eslint-disable-next-line
      console.info('mask-click');
      console.log(this.$refs.drawerLayout);
      this.$refs.drawerLayout.toggle(false);
    }
  }
}
</script>
<style>
@import url('https://unpkg.com/spectre.css/dist/spectre.min.css');
@import url('https://unpkg.com/spectre.css/dist/spectre-exp.min.css');
@import url('https://unpkg.com/spectre.css/dist/spectre-icons.min.css');
</style>

