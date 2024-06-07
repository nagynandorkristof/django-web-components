import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'frontend/quasar-variables.sass'
    })
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  root: resolve('./frontend/'),
  base: "/static/",
  build: {
    manifest: "manifest.json",
    outDir: resolve('./dist'),
    rollupOptions: {
      input: {
        main: resolve("main.js"),
      }
    }
  }
})
