import pkg from './package.json'

/*
    The dev version of the Rollup config does not transpile to ES5
    and outputs a single umd package.
*/

import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import glsl from 'rollup-plugin-glsl'

export default [
  {
    input: pkg.entry,
    output: {
      file: pkg.es6,
      name: pkg.name,
      sourcemap: true,
      format: 'umd'
    },

    plugins: [
      nodeResolve({
        preferBuiltins: false
      }),
      commonjs(),
      globals(),
      builtins(),
      glsl({
        include: 'src/shaders/*.glsl',
      })
    ]
  }
];
