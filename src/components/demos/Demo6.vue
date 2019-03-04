<template>
  <vue-drawer-layout
    ref="drawerLayout"
    @slide-start="handleSlideStart"
    @slide-move="handleSlideMove"
    @slide-end="handleSlideEnd"
    @mask-click="handleMaskClick">
    <div class="drawer" slot="drawer">
      <div class="text">This is drawer</div>
    </div>
    <div class="content" slot="content">
      <div class="text">This is content.</div>
    </div>
  </vue-drawer-layout>
</template>
<script>
  export default {
    methods: {
      handleSlideStart() {
        console.info('slide-start');
      },
      handleSlideMove(position) {
        console.info('slide-move', position);
      },
      handleSlideEnd(visible) {
        console.info('slide-end', visible);
      },
      handleMaskClick() {
        console.info('mask-click');
        this.$refs.drawerLayout.toggle(false);
      }
    }
  }
</script>
