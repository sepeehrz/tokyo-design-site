<style lang="scss" scoped>
section {
  background-color: #ffffff;
}
.space-top {
  height: 250px;
}

.contactUs-wrapper {
  .content-wrapper {
    background-image: linear-gradient(to bottom, #707070, #c7c7c7, #fcfcfc);
    padding-bottom: 40px;
    padding-top: 178px;
    @include media(md) {
      padding-bottom: 0;
    }

    .form-wrapper {
      display: block;
      width: 100%;
      margin: 0 auto;
      @include media(md) {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 80%;
        padding: 36px 0;
      }
      .form {
        width: 100%;
        padding: 0 20px 30px;
        @include media(md) {
          width: 100%;
          padding: 0;
        }
        .question {
          padding-bottom: 45px;
          color: #000;
          font-size: 25px;
          font-weight: 600;
        }
        .name {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          @include media(md) {
            flex-direction: row;
          }
          input:first-child {
            margin-bottom: 20px;
            @include media(md) {
              margin-bottom: 0;
            }
          }
          input {
            padding: 20px;
            border-radius: 10px;
            background-color: rgba(89, 89, 89, 30%);
            width: 100%;
            display: block;
            color: #000;
            @include media(md) {
              width: 49%;
            }
          }
          ::placeholder {
            color: #000;
            font-size: 20px;
          }
        }
        .message {
          padding-top: 20px;
          textarea {
            border-radius: 10px;
            padding: 20px;
            background-color: rgba(89, 89, 89, 30%);
            width: 100%;
            color: #000;
            resize: none;
            font-size: 20px;
            @include media(md) {
              width: 100%;
            }
          }
          ::placeholder {
            color: #000;
          }
          .button {
            margin-top: 20px;
            padding: 0 20px;
            @include media(md) {
              padding: 0;
            }
            button {
              width: 100%;
              height: 75px;
              font-size: 28px;
              color: #000;
              background-color: var(--v-primary-base);
              text-align: center;
              border-radius: 32px;
              @include media(md) {
                width: 320px;
                height: 77px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <section>
    <div class="space-top"></div>
    <div class="contactUs-wrapper">
      <div class="content-wrapper">
        <div class="form-wrapper" ref="wrapper">
          <div class="form">
            <div class="question">سوالی دارید؟ در تماس باشید</div>
            <div class="name">
              <input placeholder="نام" v-model="contactus.name" />
              <input placeholder="ایمیل" v-model="contactus.email" />
            </div>
            <div class="message">
              <textarea
                placeholder="پیام"
                rows="9"
                cols="50"
                v-model="contactus.message"
              />
              <div class="button">
                <button @click="save()">ارسال پیام</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class contactUs extends Vue {
  contactus = {}
  async save() {
    // let valid = await this.$validator.validateAll()
    // if (valid) {
    //   let loader = this.$loader.show(this.$refs.wrapper)
    //   try {
    //     await this.$service.contactus.contactus(this.contactus)
    //     this.contactus = {}
    //     this.$validator.errors.clear()
    //     this.$toast
    //       .timeout(10000)
    //       .success()
    //       .showSimple(
    //         'درخواست شما با موفقیت ثبت شده به زودی با شما تماس گرفته خواهد شد'
    //       )
    //   } catch (error) {
    //     let array: any = []
    //     for (let value of error.response.data) {
    //       array.push(value.message)
    //     }
    //     this.$toast
    //       .error()
    //       .showSimple(array || 'خطایی رخ داده است لطفا با پشتیبانی تماس بگیرید')
    //   }
    //   loader.hide()
    // }
  }
}
</script>
