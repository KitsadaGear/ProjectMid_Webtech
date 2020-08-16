<template>
  <div>
    <div class="Homepage">
      <!-- Carousel class -->
      <div class="shadow-none p-3 mb-5 bg-light rounded">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
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
            <label class="pb-4 mb-4">โปรดเลือกหน่วยงานที่คุณต้องการ :</label>
            <select name="department_list" id="department_list">
              <option value disabled selected hidden></option>
              <option v-for="department in departments" :key="department.id">{{ department.name }}</option>
            </select>
            <button @click="getData()">Select</button>

            <h1 class="depart_header">{{ depart_name }}</h1>

            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col" style="text-align:center">ชื่อสิ่งที่ท่านต้องการบริจาค</th>
                  <th scope="col" style="text-align:center">จำนวนที่ต้องการการบริจาค</th>
                  <th scope="col" style="text-align:center">จำนวนที่ท่านต้องการบริจาค</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="text-align:center">Test</td>
                  <td style="text-align:center">Otto</td>
                  <td style="text-align:center">
                    <input type="text" />
                    <button type="button" class="btn btn-outline-primary">ยืนยัน</button>
                  </td>
                </tr>
                <tr>
                  <td style="text-align:center">Test</td>
                  <td style="text-align:center">Otto</td>
                  <td style="text-align:center">
                    <input type="text" />
                    <button type="button" class="btn btn-outline-primary">ยืนยัน</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <aside class="col-md-4 blog-sidebar">
            <div class="p-4 mb-3 bg-light rounded">
              <h4 style="text-align:center;font-size: 30px;">บริจาคเพิ่มเติม</h4>
              <p class="paragraph_info">ชื่อสิ่งที่ท่านต้องการบริจาค</p>
              <div class="input-group mb-3">
                <input type="text" class="form-control" aria-describedby="button-addon2" />
              </div>
              <p class="paragraph_info">จำนวนของสิ่งที่ท่านต้องการบริจาค</p>
              <div class="input-group mb-3">
                <input type="text" class="form-control" aria-describedby="button-addon2" />
              </div>
              <div style="text-align:center;">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                >ยืนยันรายการบริจาคเพิ่มเติมของท่าน</button>
              </div>
            </div>

            <div class="p-4 mb-3 bg-light rounded">
              <h4 style="text-align:center;font-size: 30px;">สรุปรายการบริจาคของท่าน</h4>
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" style="text-align:center">ชื่อสิ่งที่ท่านบริจาค</th>
                    <th scope="col" style="text-align:center">จำนวนที่ท่านบริจาค</th>
                  </tr>
                  <tr>
                    <td style="text-align:center">N/A</td>
                    <td style="text-align:center">N/A</td>
                  </tr>
                  <tr>
                    <td style="text-align:center">N/A</td>
                    <td style="text-align:center">N/A</td>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
              <div style="text-align:center;">
                <button type="button" class="btn btn-outline-primary">ยืนยันรายการบริจาคของท่าน</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { departmentsCollection } from "../firebase.js";
import { firestore } from "firebase";
import { db } from "../firebase.js";
export default {
  data() {
    return {
      departments: [],
      depart_name: "",
      slide: 0,
      sliding: null,
    };
  },
  firestore() {
    return {
      departments: departmentsCollection,
    };
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    getData() {
      var element = document.getElementById("department_list");
      var selectedValue = element.options[element.selectedIndex].text;
      console.log(selectedValue);
      this.depart_name = selectedValue;
    },
  },
};
</script>

<style>
aside .bg-light {
  background-color: #f0f8ff !important;
}

.Homepage {
  background-color: #fffff0;
  margin: 0;
}

.container {
  margin-top: 20px;
}
.table {
  background-color: white;
}
.blog-post h2 {
  margin-bottom: 10px;
}

.blog-form {
  margin-bottom: 20px;
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
  text-align: center;
}
.paragraph_info {
  margin-top: 30px;
  text-align: center;
  font-size: 20px;
}

input[type="text"] {
  padding: 9px 1px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>
