<style lang="scss" scoped>
section {
  padding: 10px;
  @include media(sm) {
    padding: 20px 40px;
    // margin-top: 20px;
  }
}
</style>
<template>
  <section>
    <imagesSection />
    <introduce />
    <workSampleSection />
    <!-- <aboutUsSection /> -->
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
// Component.registerHooks(['fetch'])
import imagesSection from '@/components/Pages/Home/Desktop/imagesSection.vue'
import aboutUsSection from '@/components/Pages/Home/Desktop/aboutUsSection.vue'
import workSampleSection from '@/components/Pages/Home/Desktop/workSampleSection.vue'
import introduce from '@/components/Pages/Home/Desktop/introduce.vue'

@Component({
  components: {
    imagesSection,
    aboutUsSection,
    workSampleSection,
    introduce
  }
})
export default class HomePage extends Vue {}
</script>
