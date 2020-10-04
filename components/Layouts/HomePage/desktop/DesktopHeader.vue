<style lang="scss" scoped>
.header {
  display: flex;
  height: 51px;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  background-color: var(--v-primary-base);
}

.logo-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 3rem;
  color: var(--v-primary-darken2);
  font-weight: 600;
  margin-top: 10px;
  margin-right: 20px;
  img {
    max-width: 100%;
  }
}
.nav {
  display: flex;
  margin-top: 8px;
  margin-left: 30px;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      position: relative;
      padding: 0 20px;
      @include media(lg) {
        padding: 0 40px;
      }
      @include media(1400) {
        padding: 0 45px;
      }
      @include media(1600) {
        padding: 0 65px;
      }
      a {
        font-size: 16px;
        font-weight: 600;
        color: #ffffff;
      }
      .nuxt-link-exact-active {
        &:before {
          content: '';
          width: 60%;
          background-color: #8d5000;
          position: absolute;
          height: 2px;
          right: 15px;
          @include media(lg) {
            right: 20px;
            width: 80%;
          }
          @include media(1600) {
            right: 35px;
            width: 60%;
          }

          bottom: -8px;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
<template>
  <header>
    <div class="header">
      <div class="logo-wrapper">
        <nuxt-link to="/">
          <!-- <img src="~static/img/logo.png" /> -->
        </nuxt-link>
      </div>
      <nav class="nav">
        <ul>
          <li v-for="(item, index) in $store.state.nav.items" :key="index">
            <nuxt-link :to="item.to">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  drawer = false
}
</script>
