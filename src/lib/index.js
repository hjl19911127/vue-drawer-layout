import DrawerLayout from './DrawerLayout'

const install = function (Vue) {
  if (install.installed) return
  Vue.component(DrawerLayout.name, DrawerLayout)
}

export default {
  DrawerLayout,
  install
}
