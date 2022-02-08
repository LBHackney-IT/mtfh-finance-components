import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import packageJson from './package.json';

const rootPath = dirname(fileURLToPath(import.meta.url));

// NOTE Has to use CJS for postcss plugin
const autoImport = require('./autoImport');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        entries: [{ find: '@assets', replacement: `${rootPath}/src/assets` }],
      }),
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extract: false,
        modules: true,
        plugins: [autoImport()],
        use: ['sass'],
      }),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
