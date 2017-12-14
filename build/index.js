const rm = require("rimraf"),
    rollup = require("rollup"),
    babel = require("rollup-plugin-babel"),
    nodeResolve = require("rollup-plugin-node-resolve"),
    vue = require("rollup-plugin-vue"),
    commonjs = require("rollup-plugin-commonjs");
const pkg = require("../package");
const buildOption = {
    input: {
        input: "src/index.js",
        plugins: [
            nodeResolve({
                jsnext: true,
                main: true,
                browser: true,
                extensions: [".vue", ".js", ".json"]
            }),
            commonjs(),
            vue({
                css: true
            }),
            babel({
                exclude: 'node_modules/**',
                runtimeHelpers: true
            })
        ]
    },
    output: {
        file: `./dist/${pkg.name}.js`,
        format: "umd",
        name: "DrawerLayout"
    }
}


function build() {
    rm('dist', async () => {
        const bundle = await rollup.rollup(buildOption.input);
        await bundle.write(buildOption.output);
    })
}

build();
