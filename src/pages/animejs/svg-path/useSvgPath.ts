import { EASING_MAP } from '@/helper/easing'
import anime from 'animejs'

export default () => {
  /**
   * 调试面板
   */
  const { gui } = useGui()
  /**
   * 调试参数
   */
  const params = {
    delay: 300,
    duration: 2500,
    easing: 'easeOutCirc',
    direction: 'alternate',
    stop: () => {},
    play: () => {},
    restart: () => {},
    reverse: () => {}
  }
  /**
   * 创建动画
   */
  const createAnime = () => {
    const animation = anime({
      targets: '.lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: params.easing,
      duration: params.duration,
      delay (_el, i) { return i * params.delay },
      direction: params.direction,
      loop: true
    })
    params.stop = () => animation?.pause()
    params.play = () => animation?.play()
    params.restart = () => animation?.restart()
    params.reverse = () => animation?.reverse()
  }
  /**
   * 创建调试参数
   */
  const createGui = () => {
    gui.add(params, 'delay').min(0)
      .max(2000)
      .step(50)
      .onFinishChange(createAnime)
    gui.add(params, 'duration').min(100)
      .max(5000)
      .step(100)
      .onFinishChange(createAnime)
    gui.add(params, 'easing', EASING_MAP).onFinishChange(createAnime)
    gui.add(params, 'direction', ['normal', 'reverse', 'alternate']).onFinishChange(createAnime)
    gui.add(params, 'stop')
    gui.add(params, 'play')
    gui.add(params, 'restart')
    gui.add(params, 'reverse')
  }
  createGui()
  onMounted(createAnime)
}
