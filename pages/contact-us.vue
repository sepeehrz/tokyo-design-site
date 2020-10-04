<style lang="scss" scoped></style>
<template>
  <section>
    <contactUs />
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import contactUs from '~/components/Pages/contact-us/index.vue'
@Component({
  components: {
    contactUs
  }
})
export default class HomePage extends Vue {}
</script>
