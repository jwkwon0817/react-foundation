import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import swc from '@rollup/plugin-swc';
import terser from '@rollup/plugin-terser';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { defineConfig } from 'rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

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
        assetFileNames: 'styles.css',
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
      {
        format: 'cjs',
        dir: 'dist/cjs',
        sourcemap: true,
        assetFileNames: 'styles.css',
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
      postcss({
        minimize: true,
        sourceMap: true,
      }),
      swc({
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            runtime: 'automatic',
          },
          transform: {
            react: { runtime: 'automatic' },
          },
          baseUrl: './src',
          paths: {
            '@/*': ['*'],
          },
        },
        sourceMaps: true,
        minify: true,
      }),
      commonjs({
        extensions: ['.js', '.ts'],
      }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
]);

export default config;
