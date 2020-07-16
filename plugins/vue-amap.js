import Vue from 'vue'
import VueAMap from 'vue-amap'
Vue.use(VueAMap)

if (!Vue.prototype.$isServer) {
  VueAMap.initAMapApiLoader({
    key: '5e6a0267e959d1859762bfab64d31cb9',
    plugin: [
      'AMap.Geolocation',
      'AMap.Marker',
      'AMap.ToolBar',
      'AMap.Circle',
      'AMap.PolyLine',
    ],
    uiVersion: '1.0',
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.8',
  })
}
