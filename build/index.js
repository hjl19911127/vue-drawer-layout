const path = require("path"),
    rm = require("rimraf"),
    rollup = require("rollup"),
    babel = require("rollup-plugin-babel"),
    nodeResolve = require("rollup-plugin-node-resolve"),
    vue = require("rollup-plugin-vue"),
    commonjs = require("rollup-plugin-commonjs");
const pkg = require("../package");

const inputOptions = {
    input: "src/index.js",
    plugins: [
        vue({
            css: true
        }),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true,
            extensions: [".vue", ".js", ".json"]
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
};
const outputOptions = [
    {
        file: `./dist/${pkg.name}.esm.js`,
        format: "es",
        name: "DrawerLayout"
    },
    {
        file: `./dist/${pkg.name}.js`,
        format: "umd",
        name: "DrawerLayout"
    }
];

function build() {
    rm('dist', () => {
        outputOptions.forEach(async (outputOption) => {
            const bundle = await rollup.rollup(inputOptions);
            await bundle.write(outputOption);
        })
    })
}

build();
