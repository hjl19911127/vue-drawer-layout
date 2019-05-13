import Component from './DrawerLayout';

const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component(Component.name, Component);
};

export const DrawerLayout = Component;
export default {
  DrawerLayout,
  install
};
