import { IEqual } from './types/global'
import Button from './components/button'
import Icon from './components/icon'
import Loading from './components/loading'
import Loadingbar from './components/loadingbar'

import './styles/index.less'
import { App } from 'vue'

const components = {
  // Breadcrumbs,
  Button,

  Icon,

  Loading,
}

function install(Vue: App) {
  // tslint:disable-next-line: forin
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component])
  }
  // Vue.config.globalProperties.$Message = Message
  // Vue.config.globalProperties.$Notification = Notification
  Vue.config.globalProperties.$Loading = Loadingbar
  Vue.config.globalProperties.$Equal = {
    drawers: [],
    modals: [],
  } as IEqual
}

export default { install }

export { default as Button } from './components/button'
export { default as Icon } from './components/icon'
export { default as Loading } from './components/loading'
export { default as Loadingbar } from './components/loadingbar'
