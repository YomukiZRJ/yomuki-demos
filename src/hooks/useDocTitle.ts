import { useDark, useTitle } from '@vueuse/core'

export default () => {
  const isDark = useDark()
  const title = useTitle('yomuki的学习demo')
  const route = useRoute()
  watchEffect(() => {
    const curTitle = route.meta.title || 'yomuki的学习demo'
    title.value = isDark.value ? `🌙 ${curTitle}` : `☀️ ${curTitle}`
  })
}
