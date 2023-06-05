import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
export default defineConfig({
  presets: [
    /**
     * 默认预设
     * @see https://unocss.dev/presets/uno
     * @doc https://tailwindcss.com/docs/installation
     */
    presetUno()
  ],
  theme: {

  },
  rules: [
    [/^ww-([.\d]+)$/, ([_, num]) => ({ width: `${num}vw` })],
    [/^hh-([.\d]+)$/, ([_, num]) => ({ height: `${num}vh` })],
    [/^max-hh-([.\d]+)$/, ([_, num]) => ({ 'max-height': `${num}vh` })]
  ]
})
