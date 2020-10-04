<style lang="scss" scoped>
.v-footer {
  background-color: #212121 !important;
  position: relative;
  border-top: 24px solid var(--v-primary-base) !important;
  .scroll_up {
    width: 51px;
    height: 51px;
    border-radius: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 10px;
    background-color: var(--v-primary-base);
    @include media(sm) {
      left: 20px;
      bottom: 20px;
      margin: 0;
      right: unset;
    }
    cursor: pointer;
    .v-icon {
      color: #ffffff;
      font-size: 20px;
    }
  }
}
.column_wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px 0;
  @include media(768) {
    display: flex;
    justify-content: space-around;
    flex-direction: unset;
  }
  @include media(lg) {
    width: 80%;
  }
  color: #ffffff;
  margin: 0 auto;
  > div {
    width: 100%;
    margin-bottom: 30px;
    @include media(lg) {
      flex: 0 0 30%;
      width: 30%;
      margin-bottom: 0;
    }
  }
  .title {
    h3 {
      font-size: 16px;
      font-weight: 600;
      position: relative;
      line-height: 50px;
      color: #ffffff;
      margin-bottom: 30px;
      margin-right: 20px;
      &::after {
        background-color: var(--v-primary-base);
        height: 6px;
        width: 60px;
        content: '';
        position: absolute;
        bottom: -8px;
        right: -20px;
      }
    }
  }
  .icons {
    color: #ffffff;
    margin-top: 60px;
    .v-icon {
      margin-left: 10px;
    }
  }
  .contact_us {
    > div {
      display: flex;
      align-items: center;
      padding: 5px 0;
      span {
        padding-right: 15px;
        color: #b1b1b1;
        font-size: 18px;
      }
    }
  }
  .news_title {
    text-align: center;
    font-size: 16px;
  }
  .input {
    position: relative;
    margin-top: 30px;
    input {
      padding: 20px;
      border-radius: 20px;
      background-color: #232423;
      width: 100%;
    }
    ::placeholder {
      color: #ffffff;
      font-size: 20px;
      padding-right: 20px;
    }
    .telegram_icon {
      width: 64px;
      height: 64px;
      border-radius: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 0;
      top: 0;
      background-color: var(--v-primary-base);
      .v-icon {
        color: #ffffff;
        font-size: 45px;
      }
    }
  }
}
.copy_right {
  text-align: center;
  width: 100%;
  padding-bottom: 60px;
  @include media(lg) {
    padding-bottom: 0;
  }
  span {
    font-size: 22px;
    color: #ffffff;
  }
}
</style>
<template>
  <v-footer>
    <div class="column_wrapper">
      <div>
        <div class="title">
          <h3>درباره ما</h3>
        </div>
        <div class="text">
          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
          بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
        </div>
        <div class="icons">
          <v-icon color="#fff" dark>lab la-instagram</v-icon>
          <v-icon color="#fff" dark>lab la-facebook</v-icon>
          <v-icon color="#fff" dark>lab la-twitter</v-icon>
          <v-icon color="#fff" dark>lab la-linkedin-in</v-icon>
        </div>
      </div>
      <div>
        <div class="title">
          <h3>تماس با ما</h3>
        </div>
        <div class="contact_us">
          <div>
            <img src="~static/img/screen.png" alt />
            <span>info@hellischool.com</span>
          </div>
          <div>
            <img src="~static/img/screen.png" alt />
            <span>info@hellischool.com</span>
          </div>
          <div>
            <img src="~static/img/phone.png" alt />
            <span>021 22 55 8797</span>
          </div>
          <div>
            <img src="~static/img/phone.png" alt />
            <span>021 22 55 8797</span>
          </div>
        </div>
      </div>
      <div>
        <div class="title">
          <h3>خبرنامه</h3>
        </div>
        <div class="newsletter">
          <div class="news_title">
            با عضویت در خبرنامه ما از اخبار سایت مطلع شوید
          </div>
          <div class="input">
            <input type="email" placeholder="وارد کردن ایمیل" />
            <div class="telegram_icon">
              <v-icon>lab la-telegram</v-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copy_right">
      <span>کلیه حقوق طراحی به نام موسسه علامه حلی محفوض می باشد</span>
    </div>
    <div class="scroll_up" @click="$emit('scroll-to-top')">
      <v-icon>la-arrow-up</v-icon>
    </div>
  </v-footer>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class FooterDesktop extends Vue {}
</script>
