<template>
  <div
    class="rounded "
    style="background:-webkit-linear-gradient(#C9D6FF,#E2E2E2);"
  >
    <div class="register">
      <div
        class="card container font-Kanit "
        style="background:-webkit-linear-gradient(#FFAFBD,#ffc3a0); "
      >
        <div class="card rounded-pill text-darkness ">
          <img
            src="../assets/img/hand.jpg"
            style="opacity:0.4;filter:alpha(opacity=40)"
            class="card-img  rounded-pill "
            alt="..."
            width="500"
            height="400"
          />
          <div class="card-img-overlay  " style=" margin-top: 140px;">
            <h1 class="card-title text-center">Register</h1>
          </div>
        </div>

        <div class="card-body text-center">
          <figure class="figure">
            <div class="rounded-pill">
              <form @submit.prevent="handleSubmit()">
                <div class="form-group ">
                  <label for="">Email Address *</label>
                  <input
                    type="text"
                    class="form-control rounded-pill"
                    placeholder=" You Email *"
                    v-model="form.email"
                  />
                </div>
                <div class="form-group">
                  <label for=""> Password *</label>
                  <input
                    type="password"
                    class="form-control rounded-pill"
                    placeholder=" Your password *"
                    v-model="form.password"
                  />
                </div>
                <div class="form-group">
                  <label for=""> Displat Name *</label>
                  <input
                    type="text"
                    class="form-control rounded-pill"
                    placeholder=" Your name *"
                    v-model="form.displayName"
                  />
                </div>
                <div class="from-group ">
                  <button class="btn btn-success rounded-pill">
                    สมัครสมาชิก
                  </button>

                  <router-link
                    :to="{ name: 'Home' }"
                    class="btn btn-danger rounded-pill"
                  >
                    ยกเลิก
                  </router-link>
                  <p></p>
                </div>
                <img
                  src="../assets/img/Do.jpg"
                  class="card-img-bottom rounded-pill"
                  alt="..."
                />
              </form>
            </div>
          </figure>
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
        password: "",
        displayName: ""
      }
    };
  },
  methods: {
    ...mapActions("account", ["register"]),
    ...mapActions("alert", ["error"]),
    handleSubmit() {
      if (this.form.email && this.form.password && this.form.displayName) {
        this.register(this.form);
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
<style></style>
