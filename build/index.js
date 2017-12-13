const rm = require("rimraf"),
    rollup = require("rollup"),
    babel = require("rollup-plugin-babel"),
    nodeResolve = require("rollup-plugin-node-resolve"),
    vue = require("rollup-plugin-vue"),
    commonjs = require("rollup-plugin-commonjs");
const pkg = require("../package");

const buildOptions = [
    {
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
                    exclude: 'node_modules/**'
                })
            ]
        },
        output: {
            file: `./dist/${pkg.name}.esm.js`,
            format: "es",
            name: "DrawerLayout"
        }
    },
    {
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
                    exclude: 'node_modules/**'
                })
            ]
        },
        output: {
            file: `./dist/${pkg.name}.js`,
            format: "umd",
            name: "DrawerLayout"
        }
    }
];

function build() {
    rm('dist', () => {
        buildOptions.forEach(async (o) => {
            const bundle = await rollup.rollup(o.input);
            await bundle.write(o.output);
        })
    })
}

build();
