import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import { presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    /**
     * 自动导入插件
     * @see https://www.npmjs.com/package/unplugin-auto-import
     */
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          from: 'vue-router',
          imports: ['RouterLink', 'createRouter', 'createWebHistory']
        },
        {
          from: 'vue-router',
          imports: ['RouteRecordRaw', 'RouteRecordName'],
          type: true
        }
      ],
      dirs: ['src/hooks'],
      eslintrc: {
        enabled: true
      }
    }),
    /**
       * 组件自动导入插件
       * @see https://www.npmjs.com/package/unplugin-vue-components
       */
    Components({
      dirs: ['src/components'],
      dts: true,
      types: [{
        from: 'vue-router',
        names: ['RouterLink', 'RouterView']
      }]
    }),
    /**
       * 原子化css插件
       * @see https://unocss.dev/guide/
       */
    UnoCSS({
      presets: [
        presetIcons({
          cdn: 'https://esm.sh/'
          // collections: { linemd: () => import('@iconify-json/line-md/icons.json', { assert: { type: 'json' } }).then(i => i.default) }
        })
      ]
    })
  ]
})
