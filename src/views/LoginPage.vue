<template>
  <div
    class="shadow-lg p-3 mb-5 rounded "
    style="background:-webkit-linear-gradient(#ff9966,#f05053);"
  >
    <div class="font-Kanit ">
      <div class="container ">
        <div
          class="rounded text-center "
          style="background:-webkit-linear-gradient(#F1F2B5,#eacda3);"
        >
          <figure class="figure">
            <img
              src="../assets/img/sm.png"
              class="figure-img img-fluid rounded"
              alt="..."
            />

            <h4>Login</h4>

            <form @submit.prevent="handelSubmit">
              <div class="form-group">
                <label for=""> Email Address </label>
                <input
                  type="text"
                  class="form-control rounded-pill"
                  placeholder="You Email "
                  v-model="form.email"
                />
              </div>
              <div class="form-group">
                <label for=""> Password </label>
                <input
                  type="password"
                  class="form-control rounded-pill"
                  placeholder="Your password "
                  v-model="form.password"
                />
              </div>
              <div class="from-group ">
                <button class="btn btn-primary rounded-pill">
                  เข้าสู่ระบบ
                </button>
                <p></p>
                <router-link
                  :to="{ name: 'RegisterPage' }"
                  class="btn btn-primary rounded-pill"
                >
                  สมัครสมาชิก
                </router-link>
              </div>
            </form>

            <!-- <figcaption class="figure-caption text-right"></figcaption> -->
          </figure>
        </div>

        <div class="card  " style=" background-color: #lightblue;">
          <span class="border border-warning"></span>
          <div
            class="card-header text-center "
            style=" background-color: #lightblue;"
          >
            <h4>ลงทะเบียนเพื่อเป็นส่วนหนึ่งของเราในการช่วยเหลือผู้ประสบภัย</h4>
          </div>

          <span class="border border-warning "></span>

          <div class="card-body " style=" background-color: #fffff0;">
            <blockquote
              class="blockquote mb-0 "
              style=" background-color: #fffff0;"
            >
              <p style="text-indent: 4em;">
                คุณสามารถเป็นส่วนหนึ่งกับเราเพื่อการช่วยเหลือที่ดีและมีประสิทธิภาพมากขึ้นจะทำให้เรานั้นสามารถบริหารสิ่งของต่างๆและกระไปตามพื้นที่ประสบภัยได้มากยิ่งขึ้น
              </p>
              <footer class="blockquote-footer text-center ">PunFun</footer>
              <center>
                <img
                  src="../assets/img/cropped.jpg"
                  class="img-fluid "
                  alt=""
                />
              </center>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FooterBar from "../components/Footer.vue";
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions("account", ["login"]),
    ...mapActions("alert", ["error"]),
    handelSubmit(e) {
      if (this.form.email && this.form.password) {
        this.login(this.form);
        // this.$fire({
        // title: "Suceesss",
        // text: "ยินดีต้อนรับ",
        // type: "success",
        // timer: 1000
        // }).then(r => {
        //   console.log(r.value);
        // });
      } else {
        this.$fire({
          title: "Warinig",
          text: "กรุณากรอกให้ครบทุกช่อง",
          type: "warning",
          timer: 3000
        }).then(r => {
          console.log(r.value);
        });
      }
    }
  },
  components: {
    FooterBar
  }
};
</script>

<style>
div#two {
  color: cadetblue;
}
</style>
