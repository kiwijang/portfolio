import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

console.log('😊 rollup');
export default {
  input: './js/main.js',
  output: {
    file: './js/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({ browser: true, preferBuiltins: true }),
    commonjs({ include: ['node_modules/**'] }),
    babel({
      exclude: 'node_modules/**',
      configFile: './babel.config.json',
      babelHelpers: 'bundled',
    }),
    terser(),
  ],
};
