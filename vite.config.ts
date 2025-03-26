import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sassConfig from './sass.config'
import { readFileSync } from 'node:fs'

// Get the repository name from package.json for GitHub Pages
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'))
const repoName = packageJson.name.split('.github.io')[0]
const baseConfig = process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/'

export default defineConfig({
  base: baseConfig,
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (source, id) => {
          if (!id.endsWith('variables.scss')) {
            return `@use "@/assets/styles/variables.scss" as *;\n${source}`;
          }
          return source;
        },
        ...sassConfig
      }
    },
    modules: {
      localsConvention: 'camelCase'
    }
  },
  build: {
    assetsDir: 'assets',
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.svg')) {
            return 'assets/logos/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    sourcemap: false,
    reportCompressedSize: false
  },
  server: {
    open: true,
    cors: true,
    port: 5174
  },
  preview: {
    port: 4173
  }
}) 