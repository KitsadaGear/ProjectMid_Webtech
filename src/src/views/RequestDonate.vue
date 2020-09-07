<template>
  <div>
    <div
      class="Requestpage font-Kanit shadow-lg p-3 mb-5 rounded"
      style="background-color: #fffff0;"
    >
      <menu-bar></menu-bar>
      <div>
        <div class="container">
          <div class="container mt-4">
            <label >โปรดกรอกชื่อหน่วยงานของคุณ</label>
            <input
              type="text"
              class="form-control"
              placeholder="โปรดกรอกชื่อหน่วยงานของคุณ"
              v-model="addDepartment.department_name"
            />
            <label> โปรดกรอกชื่อสิ่งของที่ต้องรับบริจาค</label>
            <input
              type="text"
              class="form-control"
              placeholder="โปรดกรอกชื่อสิ่งของที่ต้องรับบริจาค"
              v-model="addDepartment.require_name"
            />
            <label>โปรดกรอกจำนวนที่ต้องการรับบริจาค</label>
            <input
              type="number"
              class="form-control"
              placeholder="โปรดกรอกจำนวนที่ต้องการรับบริจาค"
              v-model="addDepartment.require_amount"
            />
            <div style="text-align:center;">
              <button
                type="submit"
                class="btn btn-outline-primary submit_btn"
                @click="AddRequirement()"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { departmentsCollection } from "../firebase.js";
import { firestore } from "firebase";
import MenuBar from "../components/Menubar.vue";
import { mapState, mapActions } from "vuex";
import FooterBar from "../components/Footer.vue";
export default {
  firestore() {
    return {
      departments: departmentsCollection
    };
  },
  data() {
    return {
      requirements: [],
      addDepartment: {
        department_name: "",
        require_name: "",
        require_amount: ""
      },
      Count: "",
      checkCount: "",
      requireDonateId: [],
      requireSameId: []
    };
  },

  methods: {
    AddRequirement() {
     
      if (
          !this.addDepartment.department_name ||
          !this.addDepartment.require_name ||
          !this.addDepartment.require_amount ||
          this.addDepartment.require_amount == 0
        ) {
          this.$fire({
            title: "ข้อมูลไม่ถูกต้อง",
            text: "โปรดกรอกข้อมูลให้ครบถ้วนถูกต้อง",
            type: "error",
            timer: 9000
          });
        }else{
          
        departmentsCollection
              .doc(this.addDepartment.department_name)
              .collection("Requirement")
              .doc(this.addDepartment.require_name)
              .set({
                name: this.addDepartment.require_name,
                amount: parseInt(this.addDepartment.require_amount),
                enough: false,
                status: false
              });

          departmentsCollection.doc(this.addDepartment.department_name).set({name : this.addDepartment.department_name})
          this.$fire({
                      title: "บริจาคสำเร็จ ขอขอบพระคุณเป็นอย่างสูง",
                      type: "success",
                      timer: 9000
                    });

          
        }
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

.container label {
  font-size: 30px;
  text-align: center;
}
.Requestpage input[type="number"] {
  padding: 1.5rem 1px;
  margin: 8px 0;
  box-sizing: border-box;
  font-size: 20px;
  text-align: center;
}
.Requestpage input[type="text"] {
  padding: 1.5rem 1px;
  margin: 8px 0;
  box-sizing: border-box;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.Requestpage .submit_btn {
  margin-top: 50px;
  margin-bottom: 25px;
}
</style>
