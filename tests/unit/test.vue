<template>
  <vue-drawer-layout
    ref="drawerLayout">
    <div class="drawer" slot="drawer">
      <div class="text">This is drawer</div>
      <a href="javascript:void(0)" class="btn" id="hide" @click="handleToggleDrawer">Hide Drawer</a>
    </div>
    <div class="content" slot="content">
      <div class="text">This is content.</div>
      <a href="javascript:void(0)" class="btn" id="show" @click="handleToggleDrawer">Show Drawer</a>
    </div>
  </vue-drawer-layout>
</template>
<script>
  export default {
    created() {
      document.body.style.width = '800px'
    },
    methods: {
      handleToggleDrawer() {
        this.$refs.drawerLayout.toggle()
      }
    }
  }
</script>
