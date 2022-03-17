import baseConfig from './base.config';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, '../packages/index.ts'),
      name: 'AstarUI',
      fileName: (format) => `astar-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      resolve: {
        dedupe: ['vue']
      },
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    ...(baseConfig as any).plugins,
    dts(),
  ]
});
