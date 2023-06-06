import { defineConfig, presetIcons, presetUno } from 'unocss'
export default defineConfig({
  presets: [
    /**
     * 默认预设
     * @see https://unocss.dev/presets/uno
     * @doc https://tailwindcss.com/docs/installation
     */
    presetUno(),
    presetIcons({
      cdn: 'https://esm.sh/'
    })
  ],
  theme: {

  },
  shortcuts: {
    'center-full-page': 'w-100vw h-100vh bg-black flex items-center justify-center'
  },
  rules: [
    [/^max-hh-([.\d]+)$/, ([_, num]) => ({ 'max-height': `${num}vh` })]
  ]
})
