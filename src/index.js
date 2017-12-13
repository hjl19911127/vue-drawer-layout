import DrawerLayout from "./DrawerLayout";

const install = function (Vue, opts = {}) {
    if (install.installed) return;
    Vue.component(DrawerLayout.name, DrawerLayout);
};
module.exports = {
    DrawerLayout,
    install
};
module.exports.default = module.exports;