import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/Astar-Kit',
  build: {
    outDir: 'docs',
  },
});
