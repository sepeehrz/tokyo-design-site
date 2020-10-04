<style lang="scss" scoped>
section {
  .slider_wrapper {
    width: 100%;
    height: 600px;
    background-color: red;
    > div {
      border: 1px solid black;
      color: red;
    }
  }
}
</style>
<template>
  <section>
    <div class="slider_wrapper">
      <div>
        2
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component({})
export default class SliderSection extends Vue {}
</script>
