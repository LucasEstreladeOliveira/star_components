// rollup.config.js

import vue from "rollup-plugin-vue";
import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify-es";
import url from "@rollup/plugin-url";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const config = {
  input: "src/main.js",
  output: {
    name: "starComponents"
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    url({
      destDir: "dist/assets/",
      publicPath: "/assets/icons/",
      sourceDir: "src",
      limit: 0,
      include: ["**/*.svg", "**/*.png", "**/*.gif", "**/*.jpg", "**/*.jpeg"]
    }),
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
      template: {
        isProduction: true
      }
    }),
    buble()
  ]
};

// Only minify browser (iife) version
if (argv.format === "iife") {
  config.plugins.push(uglify());
}

export default config;
