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
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component({})
export default class SliderSection extends Vue {
  items = [
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
    }
  ]
}
</script>
