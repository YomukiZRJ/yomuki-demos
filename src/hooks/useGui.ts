import { GUI } from 'lil-gui'
export default () => {
  const gui = new GUI()
  onBeforeUnmount(() => {
    gui.destroy()
  })
  return {
    gui
  }
}
