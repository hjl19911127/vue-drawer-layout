import DrawerLayout from "./DrawerLayout";

const install = function (Vue, opts = {}) {
    if (install.installed) return;
    Vue.component(DrawerLayout.name, DrawerLayout);
};
module.exports = {
    version: '0.1.0',
    DrawerLayout,
    install
};
module.exports.default = module.exports;