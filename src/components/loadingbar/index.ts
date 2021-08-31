import LoadingVue from './Loadingbar.vue'
import { createApp, App, ComponentPublicInstance } from 'vue'

interface CILoading {
  loadingInstance: App
  loadEl: ComponentPublicInstance
  start(): void
  update(value: number): void
  finish(): void
}

interface CLoadingProps {
  start: boolean
  progress: number
  height: number
}

class Loading implements CILoading {
  loadingInstance = createApp(LoadingVue)
  loadEl: ComponentPublicInstance

  constructor() {
    const el = this.loadingInstance.mount(document.createElement('div'))
    document.body.appendChild(el.$el)
    this.loadEl = el
  }

  start() {
    ;(this.loadEl.$data as CLoadingProps).start = true
    ;(this.loadEl.$data as CLoadingProps).progress = 90
  }

  update(value: number) {
    ;(this.loadEl.$data as CLoadingProps).start = false
    ;(this.loadEl.$data as CLoadingProps).progress = value
  }

  finish() {
    ;(this.loadEl.$data as CLoadingProps).start = false
    ;(this.loadEl.$data as CLoadingProps).progress = 100
    ;(this.loadEl.$data as CLoadingProps).height = 0
  }
}

const instance = new Loading()
export default instance
