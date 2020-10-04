<style lang="scss" scoped>
::v-deep {
  .v-list-group__items {
    padding-right: 30px;
  }
}
</style>

<template>
  <v-list dense nav class="py-0">
    <v-list-item two-line>
      <v-list-item-avatar>
        <img src="~static/img/logo.png" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>موسسه دیتیلینگ توکیو دیزاین</v-list-item-title>
        <v-list-item-subtitle>شعبه شهرک غرب</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-subheader inset>منوی موبایل</v-subheader>
    <template v-for="(item, index) in $store.state.nav.items">
      <v-list-item :key="index" :to="item.to" link v-if="!item.child">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group :prepend-icon="item.icon" :key="index" v-else>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="(child, i) in item.child" :key="i" link>
          <v-list-item-icon>
            <v-icon>{{ child.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ child.name }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </template>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class HeaderMobile extends Vue {}
</script>
