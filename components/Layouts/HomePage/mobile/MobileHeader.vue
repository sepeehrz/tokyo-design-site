<style lang="scss" scoped>
.main-header {
  ::v-deep {
    .v-app-bar__nav-icon {
      border: none;
      background: none;
      box-shadow: none !important;
      .v-btn__content {
        color: var(--v-primary-base);
      }
    }

    .theme--dark.v-btn.v-btn--icon {
      color: var(--v-primary-base);
    }

    .charge {
      height: 28px;
    }
  }
}
</style>

<template>
  <section>
    <v-app-bar class="main-header" dense dark fixed>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" right app fixed temporary>
      <navigation />
    </v-navigation-drawer>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import navigation from './navigation.vue'
@Component({
  components: {
    navigation
  }
})
export default class HeaderMobile extends Vue {
  drawer = false
}
</script>
