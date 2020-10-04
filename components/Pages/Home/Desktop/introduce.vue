<style lang="scss" scoped>
.wrapper {
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 100%;
    background: var(--v-primary-base);
    margin: 30px 0;
    border-radius: 20px;
    span {
      font-size: 30px;
      color: #ffffff;
    }
  }
  .description_wrapper {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
    .img {
      display: none;
      @include media(lg) {
        display: block;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      text-align: justify;
      color: #000;
      width: 100%;
      padding: 0 20px;
      @include media(md) {
        font-size: 20px;
        font-weight: 600;
      }

      @include media(lg) {
        padding-right: 0;
        padding-left: 20px;
        font-size: 20px;
        font-weight: normal;
        width: 60%;
      }
    }
  }
}
</style>
<template>
  <section>
    <div class="wrapper">
      <div class="title">
        <span>معرفی توکیو دیزاین</span>
      </div>
      <div class="description_wrapper">
        <div class="text">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </div>
        <div class="img">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          ></v-img>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component({})
export default class TopHeader extends Vue {}
</script>
