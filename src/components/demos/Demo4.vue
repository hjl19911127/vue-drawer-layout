<template>
  <vue-drawer-layout
    :drawer-width="480"
    :drawable-distance="160"
    :z-index="0"
    :content-drawable="true">
    <div class="drawer" slot="drawer">
      <div class="text">This is drawer</div>
    </div>
    <div class="content" slot="content">
      <div class="text">This is content.</div>
    </div>
  </vue-drawer-layout>
</template>
