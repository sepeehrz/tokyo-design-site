<template>
  <v-app dark>
    <v-content>
      <v-container>
        <!-- <MenuMobile v-model="drawer" v-if="$device.isMobile" /> -->
        <!-- <MobileHeader
          @toggle-navbar="drawer = !drawer"
          v-if="$device.isMobile"
        />
        <DesktopHeader v-if="$device.isDesktop" /> -->
        <nuxt />
      </v-container>
    </v-content>
    <!-- <Footer /> -->
  </v-app>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import Footer from '@/components/Layouts/HomePage/Footer.vue'
import DesktopHeader from '@/components/Layouts/HomePage/desktop/DesktopHeader.vue'
import MobileHeader from '@/components/Layouts/HomePage/mobile/MobileHeader.vue'
@Component({
  components: {
    Footer,
    DesktopHeader,
    MobileHeader
  }
})
export default class HomePageLayout extends Vue {
  drawer = false
  // user = {
  //   firstName: 'آرمین',
  //   lastName: 'خیرخواهان'
  // }
  // clipped = false
  // drawer = false
  // fixed = false
  // items = [
  //   {
  //     icon: 'mdi-apps',
  //     title: 'Welcome',
  //     to: '/'
  //   },
  //   {
  //     icon: 'mdi-chart-bubble',
  //     title: 'Inspire',
  //     to: '/inspire'
  //   }
  // ]
  // miniVariant = false
  // right = true
  // rightDrawer = false
  // title = 'Vuetify.js'
}
</script>
