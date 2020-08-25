<template>
  <div style>
    <menu-bar></menu-bar>

    <div class="Donatepage">
      <!-- Carousel class -->
      <div class="shadow-none p-3 mb-5 bg-light rounded">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            img-width="800"
            img-height="600"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Picture Slider Here -->
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block w-100 rounded"
                  width="800"
                  height="600"
                  src="../assets/img/shutterstock_180809027-696x367.jpg"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>

            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block rounded w-100"
                  width="800"
                  height="600"
                  src="../assets/img/download.jpg"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>
          </b-carousel>
          <!-- /Picture Slider Here -->
        </div>
      </div>

      <!-- /Carousel class -->

      <div role="main" class="container">
        <div class="row">
          <div class="col-md-8 blog-main">
            <div class="select_row">
              <label class="pb-4 mb-4" style="font-size:20px"
                >โปรดเลือกหน่วยงานที่คุณต้องการ :</label
              >
              <select
                name="department_list"
                id="department_list"
                v-model="depart.depart_name"
                style="text-align:center"
              >
                <option value disabled selected hidden></option>
                <option
                  v-for="department in departments"
                  :key="department.id"
                  >{{ department.name }}</option
                >
              </select>
              <button class="btn btn-outline-info" @click="getData()">
                Select
              </button>
            </div>

            <h1 class="depart_header" style="text-align:center">
              {{ dept_name }}
            </h1>

            <table class="table" v-if="dept_name">
              <thead class="thead-dark">
                <tr>
                  <th scope="col" style="text-align:center; font-size:20px">
                    ชื่อสิ่งที่ท่านต้องการบริจาค
                  </th>
                  <th scope="col" style="text-align:center; font-size:20px">
                    จำนวนที่ต้องการการบริจาค
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="requirement in requirements" :key="requirement.id">
                  <td style="text-align:center; font-size:25px">
                    {{ requirement.name }}
                  </td>
                  <td style="text-align:center; font-size:25px">
                    {{ requirement.amount }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <aside class="col-md-4 blog-sidebar">
            <!-- บริจาค-->
            <form v-if="dept_name">
              <div class="p-4 mb-3 bg-light rounded">
                <h4 style="text-align:center;font-size: 30px;">
                  ช่องทางการบริจาค
                </h4>
                <p class="paragraph_info">โปรดเลือกสิ่งที่ท่านต้องการบริจาค</p>

                <div class="custom" style="text-align:center">
                  <select v-model="depart.new_require.name">
                    <option value disabled selected hidden></option>
                    <option
                      v-for="requirement in requirements"
                      :key="requirement.id"
                      >{{ requirement.name }}</option
                    >
                  </select>
                </div>

                <p class="paragraph_info" style="margin-top:-10px">
                  จำนวนของสิ่งที่ท่านต้องการบริจาค
                </p>
                <div class="input-group mb-3">
                  <input
                    type="number"
                    class="form-control"
                    aria-describedby="button-addon2"
                    style="text-align:center;"
                    placeholder="โปรดกรอกจำนวนของสิ่งของที่ต้องการบริจาค"
                    v-model="depart.new_require.amount"
                  />
                </div>
                <div style="text-align:center;">
                  <button
                    type="submit"
                    class="btn btn-outline-primary"
                    @click="updateDonate()"
                  >
                    ยืนยันรายการบริจาคของท่าน
                  </button>
                </div>
                <div
                  v-if="!depart.new_require.amount"
                  :class="`alert ${alert.type}`"
                  style="margin-top:20px"
                >
                  {{ alert.message }}
                </div>
              </div>
            </form>

            <!--Custom -->
            <form @submit.prevent="submitCustomDonate()" v-if="dept_name">
              <div class="p-4 mb-3 bg-light rounded">
                <h4 style="text-align:center;font-size: 30px;">
                  บริจาคเพิ่มเติม
                </h4>
                <p class="paragraph_info">ชื่อสิ่งของที่ท่านต้องการบริจาค</p>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    aria-describedby="button-addon2"
                    style="text-align:center;"
                    placeholder="โปรดกรอกชื่อสิ่งของที่ต้องการบริจาค"
                    id="donate_name"
                    v-model="customDonate.name"
                  />
                </div>
                <p class="paragraph_info">จำนวนของสิ่งที่ท่านต้องการบริจาค</p>
                <div class="input-group mb-3">
                  <input
                    type="number"
                    class="form-control"
                    aria-describedby="button-addon2"
                    style="text-align:center;"
                    placeholder="โปรดกรอกจำนวนของสิ่งของที่ต้องการบริจาค"
                    id="donate_amount"
                    v-model="customDonate.amount"
                  />
                </div>
                <div style="text-align:center;">
                  <button type="submit" class="btn btn-outline-primary">
                    ยืนยันรายการบริจาคของท่าน
                  </button>
                </div>
                <div
                  v-if="!this.customDonate.name || !this.customDonate.amount"
                  :class="`alert ${alert.type}`"
                  style="margin-top:20px"
                >
                  {{ alert.message }}
                </div>
              </div>
            </form>

            <div class="p-4 mb-3 bg-light rounded">
              <h4 style="text-align:center;font-size: 30px;">
                สรุปรายการบริจาคทั้งหมดของท่าน
              </h4>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" style="text-align:center">
                      ชื่อสิ่งที่ท่านบริจาค
                    </th>
                    <th scope="col" style="text-align:center">
                      จำนวนที่ท่านบริจาค
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align:center">N/A</td>
                    <td style="text-align:center">N/A</td>
                  </tr>
                  <tr>
                    <td style="text-align:center">N/A</td>
                    <td style="text-align:center">N/A</td>
                  </tr>
                  <tr>
                    <td style="text-align:center">N/A</td>
                    <td style="text-align:center">N/A</td>
                  </tr>
                  <tr>
                    <td style="text-align:center">N/A</td>
                    <td style="text-align:center">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { departmentsCollection } from "../firebase.js";
import MenuBar from "../components/Menubar.vue";
import { firestore } from "firebase";

import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      departments: [],
      departmented: [],
      requirements: [],

      dept_name: "",
      depart: {
        depart_name: "",
        name: "",
        amount: 0,
        enough: "",
        new_require: {
          name: "",
          amount: 0,
          enough: "",
          depart_name: ""
        }
      },
      slide: 0,
      sliding: null,
      customDonate: {
        name: "",
        amount: 0,

        enough: ""
      }
    };
  },
  firestore() {
    return {
      departments: departmentsCollection,
      departmented: departmentsCollection
    };
  },
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },

  beforeMount() {
    this.getData();
  },
  methods: {
    ...mapActions("alert", ["error"]),

    submitCustomDonate() {
      if (!this.customDonate.name || !this.customDonate.amount) {
        this.error("โปรดกรอกข้อมูลให้ครบถ้วน");
      } else {
        departmentsCollection
          .doc(this.depart.depart_name)
          .collection("Requirement")
          .doc(this.customDonate.name)
          .set({
            name: this.customDonate.name,
            amount: parseInt(this.customDonate.amount),
            donateDate: new Date(),
            enough: false
          });
      }
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },

    getData: function() {
      if (this.depart.depart_name != "") {
        var element = document.getElementById("department_list");
        var selectedValue = element.options[element.selectedIndex].text;
        this.dept_name = selectedValue;
        departmentsCollection
          .doc(this.depart.depart_name)
          .collection("Requirement")
          .onSnapshot(querySnapshot => {
            let dataArray = [];
            querySnapshot.forEach(doc => {
              let requirements = doc.data();

              if (requirements.enough == false) {
                dataArray.push(requirements);
              }
            });
            this.requirements = dataArray;
          });
      }
    },
    updateDonate() {
      if (this.depart.depart_name != "") {
        departmentsCollection
          .doc(this.depart.depart_name)
          .collection("Requirement")
          .doc(this.depart.new_require.name)
          .get()
          .then(snapshot => {
            const document = snapshot.data();
            var amountLeft =
              parseInt(document.amount) -
              parseInt(this.depart.new_require.amount);
            if (document.amount >= this.depart.new_require.amount) {
              if (amountLeft <= 0) {
                departmentsCollection
                  .doc(this.depart.depart_name)
                  .collection("Requirement")
                  .doc(this.depart.new_require.name)
                  .update({
                    amount: amountLeft,
                    enough: true
                  });
              } else {
                departmentsCollection
                  .doc(this.depart.depart_name)
                  .collection("Requirement")
                  .doc(this.depart.new_require.name)
                  .update({
                    amount: amountLeft
                  });
              }
            }
          });
      }
    }
  },
  components: {
    MenuBar
  }
};
</script>

<style>
aside .bg-light {
  background-color: #f0f8ff !important;
}

.Donatepage {
  background-color: #fffff0;
  margin: 0;
}

.container {
  margin-top: 20px;
}
.table {
  background-color: white;
  margin: 0;
}
.blog-post h2 {
  margin-bottom: 10px;
}

.blog-form {
  margin-bottom: 20px;
}

.select_row select {
  width: 50%;
  padding: 0.4rem 0.2rem;
  border-radius: 4px;
  margin-left: 5px;
}

.select_row button {
  margin-bottom: 5px;
  margin-left: 10px;
  padding: 0.4rem 2rem;
}

.blog-sidebar {
  text-align: center;
}

.form-row b {
  margin-left: 5px;
}

.mb-4 {
  color: black;
}

@media (min-width: 1200px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
    max-width: 1500px;
  }
}

.depart_header {
  margin-bottom: 20px;
}
.paragraph_info {
  margin-top: 30px;

  font-size: 20px;
}

input[type="text"] {
  padding: 9px 1px;
  margin: 8px 0;
  box-sizing: border-box;
}

@media screen and (max-width: 600px) {
  input[type="text"] {
    width: 100%;
    margin-top: 0;
  }
}

.table-row:after {
  content: "";
  display: table;
  clear: both;
}

.custom select {
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 20px;
}
</style>
