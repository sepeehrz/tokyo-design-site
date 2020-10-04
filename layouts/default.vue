<style lang="scss">
.v-content {
  background-color: #ffffff;
  display: block;
}
</style>

<template>
  <v-app dark v-scroll:#scroll-target="onScroll">
    <v-content>
      <MobileHeader v-if="$device.isMobile" />
      <DesktopHeader v-else />
      <nuxt />
      <Footer @scroll-to-top="scrollToTop" />
    </v-content>
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
  toTopButton = false
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  }
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  }
  onScroll(e: any) {
    if (window.pageYOffset > 200) {
      this.toTopButton = true
    } else {
      this.toTopButton = false
    }
  }
  scrollToTop() {
    this.$vuetify.goTo(0, {
      duration: 1000
    })
  }
}
</script>
