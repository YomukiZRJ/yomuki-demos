import { useWindowSize } from '@vueuse/core'
import { BoxGeometry, Clock, LoadingManager, MathUtils, Mesh, MeshBasicMaterial, MeshPhongMaterial, MirroredRepeatWrapping, PerspectiveCamera, PlaneGeometry, PointLight, PointLightHelper, RectAreaLight, RepeatWrapping, Scene, TextureLoader, Vector2, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// 文字插件
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import type { Font } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
// 平行光辅助
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'
// 镜面反射
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'
// 着色器
import floorVertexShader from './floor_vertex.vert'
import floorFragmentShader from './floor_fragment.frag'
export default (el: HTMLCanvasElement) => {
  const { width, height } = useWindowSize()
  const aspect = computed(() => width.value / height.value)
  /**
   * 调试参数
   */
  const params = {
    light: {
      color: '#ef77eb',
      x: 0,
      y: 2,
      z: 0,
      intensity: 0.5,
      distance: 17,
      decay: 0.8,
      helper: false,
      castShadow: true
    },
    light2: {
      color: '#81C8F2',
      x: 0,
      y: 15,
      z: 0,
      intensity: 2,
      distance: 25,
      decay: 2
    },
    lightStrip: {
      color: '#89D7FF'
    },
    wall: {
      color: '#111',
      shininess: 200
    },
    text: {
      color: '#ef77eb'
    }
  }
  /**
   * 调试面板
   */
  const { gui } = useGui()
  gui.close()
  const lightFolder = gui.addFolder('底部灯光参数')
  const light2Folder = gui.addFolder('顶部灯光参数')
  const lightStripFolder = gui.addFolder('灯带参数')
  const wallFolder = gui.addFolder('墙壁参数')
  const textFolder = gui.addFolder('文字参数')
  /**
   * 资源加载
   */
  const loadManager = new LoadingManager()
  loadManager.onLoad = () => {
    console.log('load success')
    init()
  }
  const textureLoader = new TextureLoader(loadManager)
  // 青沥法向量纹理
  const asphaltNormalTexture = textureLoader.load('//assets.yomuki.com/texture/Asphalt_001/Asphalt_001_NRM.jpg')
  // 地板法向量纹理
  const floorNormalTexture = textureLoader.load('//assets.yomuki.com/texture/Ground_Wet_002_SD/Ground_Wet_002_normal.jpg')
  // 地板粗糙度纹理
  const floorRoughnessTexture = textureLoader.load('//assets.yomuki.com/texture/Ground_Wet_002_SD/Ground_Wet_002_roughness.jpg')
  // 地板透明度纹理
  const floorAlphaTexture = textureLoader.load('//assets.yomuki.com/texture/Ground_Wet_002_SD/Ground_Wet_002_mask.jpg')
  // 雨滴法向量纹理
  // const rainNormalTexture = textureLoader.load('http://assets.yomuki.com/texture/Rain_001/rain-normal.png')
  // 文字 @see http://gero3.github.io/facetype.js/
  let font: Font | null = null
  const fontLoader = new FontLoader(loadManager)
  fontLoader.load('//assets.yomuki.com/webgl_font/Verdana_Bold_Italic.json', (responseFont) => {
    font = responseFont
  })

  /**
   * 渲染器
   */
  const renderer = new WebGLRenderer({
    canvas: el
  })
  renderer.setSize(width.value, height.value)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // 设置像素比
  /**
 * 场景
 */
  const scene = new Scene()
  /**
   * 相机
   */
  const camera = new PerspectiveCamera(75, aspect.value, 1, 100)
  camera.position.set(0, 3, 15)
  scene.add(camera)

  /**
   * 控制器
   */
  const controls = new OrbitControls(camera, el)
  controls.enableDamping = true // 阻尼

  // const axesHelper = new AxesHelper(25)
  // scene.add(axesHelper)

  /**
   * 创建3D文字
   */
  function create3DText () {
    if (!font) return {}
    const textGeometry = new TextGeometry('YOMUKI', {
      font,
      size: 2,
      height: 0.2,
      curveSegments: 120
    })
    // 文字居中
    textGeometry.center()
    textGeometry.computeBoundingBox()
    textGeometry.translate(0, textGeometry.boundingBox?.max.y || 0, 0)
    const text3D = new Mesh(textGeometry, new MeshBasicMaterial({ color: params.text.color }))
    scene.add(text3D)
    textFolder.addColor(params.text, 'color').onChange((color: string) => {
      text3D.material.color.set(color)
    })
    return {
      maxX: textGeometry.boundingBox?.max.x || 0,
      minX: textGeometry.boundingBox?.min.x || 0
    }
  }

  /**
   * 创建墙壁
   */
  function createWall (maxX: number, minX: number) {
    const wallWidth = 25
    const wallHeight = 30
    const wallDepth = 0.5
    asphaltNormalTexture.rotation = MathUtils.degToRad(90)// 自身旋转90度
    asphaltNormalTexture.wrapS = asphaltNormalTexture.wrapT = RepeatWrapping // 修改纹理在水平和垂直方向的包裹方式为重复
    asphaltNormalTexture.repeat.set(5, 8)
    const wallMeterial = new MeshPhongMaterial({
      color: params.wall.color,
      normalMap: asphaltNormalTexture,
      normalScale: new Vector2(0.5, 0.5),
      shininess: params.wall.shininess // 高光度
    })
    const wallGeometry = new BoxGeometry(wallWidth, wallHeight, wallDepth)
    const backWall = new Mesh(wallGeometry, wallMeterial) // 后面的墙
    backWall.position.y = wallHeight * 0.5
    backWall.position.z = -10
    scene.add(backWall)
    const wall3 = backWall.clone() // 左边的墙
    wall3.rotateY(MathUtils.degToRad(90))
    wall3.position.x = minX - 0.5
    wall3.position.y = wallHeight * 0.5
    wall3.position.z = 0
    scene.add(wall3)
    const wall4 = backWall.clone() // 右边的墙
    wall4.rotateY(MathUtils.degToRad(90))
    wall4.position.x = maxX + 0.5
    wall4.position.y = wallHeight * 0.5
    wall4.position.z = 0
    scene.add(wall4)
    wallFolder.addColor(params.wall, 'color').onChange((color: string) => {
      backWall.material.color.set(color)
    })
    wallFolder.add(params.wall, 'shininess').min(0)
      .max(300)
      .step(10)
      .name('高光')
      .onChange((shininess: number) => {
        backWall.material.shininess = shininess
      })
  }

  /**
   * 创建底部灯光
   */
  function createBottomLight () {
    const pointLight = new PointLight(params.light.color, params.light.intensity, params.light.distance, params.light.decay)
    pointLight.position.set(params.light.x, params.light.y, params.light.z)
    if (params.light.castShadow)
      pointLight.castShadow = true
    scene.add(pointLight)
    const sphereSize = 1
    const pointLightHelper = new PointLightHelper(pointLight, sphereSize)
    if (params.light.helper)
      scene.add(pointLightHelper)

    lightFolder.addColor(params.light, 'color').onChange((color: string) => {
      pointLight.color.set(color)
    })
    lightFolder.add(params.light, 'x').min(0)
      .max(10)
      .step(0.01)
      .onChange((x: number) => {
        pointLight.position.x = x
      })
    lightFolder.add(params.light, 'y').min(0)
      .max(10)
      .step(0.01)
      .onChange((y: number) => {
        pointLight.position.y = y
      })
    lightFolder.add(params.light, 'z').min(0)
      .max(10)
      .step(0.01)
      .onChange((z: number) => {
        pointLight.position.z = z
      })
    lightFolder.add(params.light, 'intensity').min(0)
      .max(5)
      .step(0.01)
      .onChange((intensity: number) => {
        pointLight.intensity = intensity
      })
    lightFolder.add(params.light, 'distance').min(0)
      .max(50)
      .step(1)
      .name('最大距离')
      .onChange((distance: number) => {
        pointLight.distance = distance
      })
    lightFolder.add(params.light, 'decay').min(0)
      .max(5)
      .step(0.01)
      .name('衰退量')
      .onChange((decay: number) => {
        pointLight.decay = decay
      })
    lightFolder.add(params.light, 'helper').name('是否显示灯源辅助')
      .onChange((helper: boolean) => {
        if (helper)
          scene.add(pointLightHelper)
        else
          scene.remove(pointLightHelper)
      })
  }

  /**
   * 创建顶部灯光
   */
  function createTopLight () {
    const pointLight2 = new PointLight(params.light2.color, params.light2.intensity, params.light2.distance)
    pointLight2.position.set(params.light2.x, params.light2.y, params.light2.z)
    scene.add(pointLight2)
    light2Folder.addColor(params.light2, 'color').onChange((color: string) => {
      pointLight2.color.set(color)
    })
    light2Folder.add(params.light2, 'x').min(0)
      .max(10)
      .step(0.01)
      .onChange((x: number) => {
        pointLight2.position.x = x
      })
    light2Folder.add(params.light2, 'y').min(0)
      .max(10)
      .step(0.01)
      .onChange((y: number) => {
        pointLight2.position.y = y
      })
    light2Folder.add(params.light2, 'z').min(0)
      .max(10)
      .step(0.01)
      .onChange((z: number) => {
        pointLight2.position.z = z
      })
    light2Folder.add(params.light2, 'intensity').min(0)
      .max(5)
      .step(0.01)
      .onChange((intensity: number) => {
        pointLight2.intensity = intensity
      })
    light2Folder.add(params.light2, 'distance').min(0)
      .max(50)
      .step(1)
      .name('最大距离')
      .onChange((distance: number) => {
        pointLight2.distance = distance
      })
    light2Folder.add(params.light2, 'decay').min(0)
      .max(5)
      .step(0.01)
      .name('衰退量')
      .onChange((decay: number) => {
        pointLight2.decay = decay
      })
  }

  /**
   * 创建灯带
   */
  function createLightStrip () {
    /**
     * 平面光源
     * 借用平面光源的辅助类来显示文字头上那条灯带
     */
    const rectLight1 = new RectAreaLight(params.lightStrip.color, 200, 19, 0.2)
    rectLight1.position.set(0, 8, 0)
    rectLight1.rotation.set(
      MathUtils.degToRad(90),
      MathUtils.degToRad(180),
      0
    )
    scene.add(rectLight1)
    const rectLight1Helper = new RectAreaLightHelper(rectLight1)
    scene.add(rectLight1Helper)
    lightStripFolder.addColor(params.lightStrip, 'color').onChange((color: string) => {
      rectLight1.color.set(color)
    })
  }
  /**
   * 创建地板
   */
  let floorMaterial: THREE.ShaderMaterial | null = null
  function createFloor () {
    floorNormalTexture.wrapS = floorNormalTexture.wrapT = MirroredRepeatWrapping // 每次重复的时候进行镜像
    floorRoughnessTexture.wrapS = floorRoughnessTexture.wrapT = MirroredRepeatWrapping // 每次重复的时候进行镜像
    floorAlphaTexture.wrapS = floorAlphaTexture.wrapT = MirroredRepeatWrapping // 每次重复的时候进行镜像
    // 镜面反射
    const floor = new Reflector(new PlaneGeometry(40, 40), {
      textureWidth: width.value,
      textureHeight: height.value
    })
    // floor.position.z = -25
    // floor.rotation.x = -Math.PI / 2
    floor.rotateX(MathUtils.degToRad(-90))
    floorMaterial = floor.material as THREE.ShaderMaterial
    floorMaterial.uniforms = {
      ...floorMaterial.uniforms,
      ...{
        uNormalTexture: {
          value: floorNormalTexture
        },
        uOpacityTexture: {
          value: floorAlphaTexture
        },
        uRoughnessTexture: {
          value: floorRoughnessTexture
        },
        uTime: {
          value: 0
        },
        uTexScale: {
          value: new Vector2(1, 5)
        },
        uTexOffset: {
          value: new Vector2(1, -0.5)
        },
        uDistortionAmount: {
          value: 0.3
        }
      }
    }
    floorMaterial.vertexShader = floorVertexShader
    floorMaterial.fragmentShader = floorFragmentShader
    console.log(floorMaterial)
    scene.add(floor)
  }

  function init () {
    const { maxX = 0, minX = 0 } = create3DText() // 3d文字
    createWall(maxX, minX) // 墙壁
    createBottomLight() // 底部灯光
    createTopLight() // 顶部灯光
    createLightStrip() // 灯带
    createFloor() // 地板
  }

  /**
 * 动画
 */
  const clock = new Clock()
  // let oldTime = 0
  const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    // const deltaTime = elapsedTime - oldTime
    // oldTime = elapsedTime
    // 更新材质
    if (floorMaterial)
      floorMaterial.uniforms.uTime.value = elapsedTime

    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
  }
  tick()
}
