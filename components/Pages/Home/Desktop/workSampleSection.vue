<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  background: var(--v-primary-base);
  margin: 10px 0 50px;
  border-radius: 20px;
  span {
    font-size: 30px;
    color: #ffffff;
  }
}
.swiper-wrapper {
  .swiper-slide {
    height: 450px;
    .v-card {
      height: 350px;
      border-radius: 10px;
      .v-image {
        height: 200px;
      }
      .title-card {
        span {
          color: #000;
          font-weight: 600;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
<template>
  <section>
    <div class="title">
      <span>نمونه کار ها</span>
    </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in 10" :key="index">
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div class="title-card">
              <span>لوروم ایپسوم عنوان</span>
            </div>
          </v-card-title>
        </v-card>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component({})
export default class TopHeader extends Vue {
  show = false
  swiperOption = {
    slidesPerView: 4,
    spaceBetween: 30,
    // slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      320: {
        slidesPerView: 1
        // spaceBetween: 20
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 4
      },
      1600: {
        slidesPerView: 5
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
}
</script>
