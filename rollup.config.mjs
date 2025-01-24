import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import swc from '@rollup/plugin-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { defineConfig } from 'rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import removeCSS from './scripts/rollup/remove-css.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'esm',
        dir: 'dist/esm',
        sourcemap: true,
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
      {
        format: 'cjs',
        dir: 'dist/cjs',
        sourcemap: true,
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      alias({
        entries: [
          {
            find: '@',
            replacement: resolve(__dirname, 'src'),
          },
        ],
      }),
      peerDepsExternal(),
      nodeResolve({
        extensions: ['.js', '.ts', '.tsx'],
        moduleDirectories: ['node_modules', 'src'],
      }),
      vanillaExtractPlugin({
        identifiers: 'short',
      }),
      swc({
        swc: {
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
            baseUrl: resolve(__dirname, 'src'),
            paths: {
              '@/*': ['*'],
            },
          },
          minify: true,
          sourceMaps: true,
        },
      }),
      commonjs(),
      removeCSS(),
    ],
  },
]);

export default config;
