<template>
  <div>
    <div
      class="Requestpage font-Kanit shadow-lg p-3 mb-5 rounded"
      style="background-color: #fffff0;"
    >
      <menu-bar></menu-bar>

      <div>

        <div role="main" class="container">
          
          <div class="container mt-4">
            <label>โปรดกรอกชื่อหน่วยงานของคุณ</label>
            <input type="text">
            <label> โปรดกรอกชื่อสิ่งของที่ต้องรับบริจาค</label>
            <input type="text">
            <label>โปรดกรอกจำนวนที่ต้องการรับบริจาค</label>
            <input type="number">
            <div style="text-align:center;">
              <button
                type="submit"
                class="btn btn-outline-primary"
                @click="updateDonate()"
                >ยืนยัน</button>
            </div>

            <table class="table">
              <thead>
                <tr>
                  <th>
                    ชื่อหน่วยงาน
                  </th>
                  <th>
                    สิ่งของที่ต้องการรับบริจาค
                  </th>
                  <th>
                    จำนวนที่ต้องการ
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>

                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import MenuBar from "../components/Menubar.vue";
import { mapState, mapActions } from "vuex";
import FooterBar from "../components/Footer.vue";
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
  components: {
    MenuBar,
    FooterBar
  },
  computed: {
    ...mapState("account", ["user"])
  }
};
</script>

<style>
.Requestpage {
  background-color: #fffff0;
  margin: 0;
}
@media (min-width: 768px) {
  .Requestpage .mb-md-5,
  .Requestpage .my-md-5 {
    margin-bottom: 0 !important;
  }
}
.mb-5,
.my-5 {
  margin-bottom: 0 !important;
}
</style>
