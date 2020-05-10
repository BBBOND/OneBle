import typescript from "rollup-plugin-typescript2";
import {uglify} from "rollup-plugin-uglify";

const pkg = require('./package.json');

export default {
    input: "src/index.ts",
    output: {
        name: pkg.name,
        file: pkg.main,
        format: "umd",
        exports: "named",
        globals: {
            'crypto-js': 'CryptoJS'
        },
    },
    plugins: [
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    "declaration": false,
                }
            }
        }),
        process.env.ENV !== "dev" && uglify({
            keep_fnames: true
        })
    ]
}