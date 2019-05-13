<template>
  <vue-drawer-layout drawer-position="bottom">
    <div class="drawer" slot="drawer">
      <div class="text">
        This is drawer
      </div>
    </div>
    <div class="content" slot="content">
      <div class="text">This is content.</div>
    </div>
  </vue-drawer-layout>
</template>
<script>
export default {
  methods: {
    handleTouchmove($event) {
      console.log($event);
    }
  }
};
</script>
