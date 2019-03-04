<template>
  <vue-drawer-layout
    ref="drawerLayout">
    <div class="drawer" slot="drawer">
      <div class="text">This is drawer</div>
      <a href="javascript:void(0)" class="btn" @click="handleToggleDrawer">Hide Drawer</a>
    </div>
    <div class="content" slot="content">
      <div class="text">This is content.</div>
      <a href="javascript:void(0)" class="btn" @click="handleToggleDrawer">Show Drawer</a>
    </div>
  </vue-drawer-layout>
</template>
<script>
  export default {
    methods: {
      handleToggleDrawer() {
        this.$refs.drawerLayout.toggle();
      }
    }
  }
</script>
