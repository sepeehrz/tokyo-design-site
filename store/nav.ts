import { Module, VuexModule, Action } from 'vuex-module-decorators'

@Module({
  name: 'nav',
  namespaced: true
})
export default class Nav extends VuexModule {
  items = [
    {
      name: 'خانه',
      to: '/',
      icon: 'apps'
    },
    {
      name: 'نمونه کارها',
      to: '/work-samples',
      icon: 'la-network-wired'
    },
    {
      name: ' تماس با ما',
      to: '/contact-us',
      icon: 'la-phone-volume'
    },
    {
      name: 'درباره ما',
      to: '/about-us',
      icon: 'la-user-friends'
    }
  ]
  drawer = false
}
