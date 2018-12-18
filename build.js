import DrawerLayout from './src/DrawerLayout.vue'

function install(Vue) {
  Vue.component(DrawerLayout.name, DrawerLayout)
  window.DrawerLayout = DrawerLayout
}

export {
  DrawerLayout
}

// Plugin
const plugin = {
  install
};

export default plugin;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
