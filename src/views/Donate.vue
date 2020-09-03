<template>
  <div>
    <div
      class="DonatePage font-Kanit shadow-lg p-3 mb-5 rounded"
      style="background-color: #fffff0;"
    >
      <menu-bar></menu-bar>
      <div>
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
              <h1 style="margin-bottom:20px;text-align:center">
                ยินดีต้อนรับ
                <h2 id="username">{{ user.displayName }}</h2>
              </h1>
              <div class="select_row">
                <label class="pb-4 mb-4" style="font-size:25px">โปรดเลือกหน่วยงานที่คุณต้องการ :</label>
                <select
                  name="department_list"
                  id="department_list"
                  v-model="depart.depart_name"
                  style="font-size:20px;"
                >
                  <option value disabled selected hidden></option>
                  <optgroup style="font-size:20px;">
                    <option
                      v-for="department in departments"
                      :key="department.id"
                    >{{ department.name }}</option>
                  </optgroup>
                </select>
                <button class="btn btn-outline-info" @click="getData()">Select</button>
              </div>

              <h1 class="depart_header" style="text-align:center">{{ dept_name }}</h1>

              <table class="table" v-if="dept_name">
                <thead class="thead-dark">
                  <tr>
                    <th
                      scope="col"
                      style="text-align:center; font-size:20px"
                    >ชื่อสิ่งที่ท่านต้องการบริจาค</th>
                    <th
                      scope="col"
                      style="text-align:center; font-size:20px"
                    >จำนวนที่ต้องการการบริจาค</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="requirement in requirements" :key="requirement.id">
                    <td style="text-align:center; font-size:25px">{{ requirement.name }}</td>
                    <td style="text-align:center; font-size:25px">{{ requirement.amount }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <aside class="col-md-4 blog-sidebar">
              <!-- บริจาค-->
              <form class="donate_form" @submit.prevent="updateDonate()" v-if="dept_name">
                <div class="p-4 mb-3 rounded aside-form" style="background-color:#F8F8FF">
                  <h4 style="text-align:center;font-size: 30px;">ช่องทางการบริจาค</h4>
                  <p class="paragraph_info">โปรดเลือกสิ่งที่ท่านต้องการบริจาค</p>

                  <div class="custom" style="text-align:center">
                    <select v-model="depart.new_require.name">
                      <option value disabled selected hidden></option>
                      <optgroup style="font-size:20px;">
                        <option
                          v-for="requirement in requirements"
                          :key="requirement.id"
                        >{{ requirement.name }}</option>
                      </optgroup>
                    </select>
                  </div>

                  <p
                    class="paragraph_info"
                    style="margin-top:-10px"
                  >จำนวนของสิ่งที่ท่านต้องการบริจาค</p>
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
                    >ยืนยันรายการบริจาคของท่าน</button>
                  </div>
                </div>
              </form>

              <!--Custom -->
              <form
                @submit.prevent="submitCustomDonate()"
                v-if="dept_name"
                class="donate_form"
                style="margin-top:30px"
              >
                <div class="p-4 mb-3 rounded aside-form">
                  <h4 style="text-align:center;font-size: 30px;">บริจาคเพิ่มเติม</h4>
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
                    <button type="submit" class="btn btn-outline-primary">ยืนยันรายการบริจาคของท่าน</button>
                  </div>
                </div>
              </form>

              <div class="p-4 mb-3 rounded aside-form" style="margin-top:30px">
                <h1 style="text-align:center;font-size: 30px;">ประวัติการบริจาคของท่าน</h1>
                <button
                  class="btn btn-outline-primary logDonate"
                  type="button"
                  data-toggle="modal"
                  data-target="#donateLogForm"
                  @click="getDonateLog()"
                >คลิกทีนี่</button>
              </div>
              <!-- Modal -->
              <div
                class="modal fade"
                id="donateLogForm"
                tabindex="-1"
                aria-labelledby="donateLogFormLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-scrollable modal-xl">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4
                        style="text-align:center;font-size: 2.5rem;margin-top:30px;margin-bottom:20px"
                      >สรุปรายการบริจาคทั้งหมดของท่าน</h4>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <table class="table">
                        <thead class="thead-dark">
                          <tr>
                            <th
                              scope="col"
                              style="text-align:center;font-size:20px"
                            >ชื่อสิ่งที่ท่านบริจาค</th>
                            <th
                              scope="col"
                              style="text-align:center;font-size:20px"
                            >จำนวนที่ท่านบริจาค</th>
                            <th
                              scope="col"
                              style="text-align:center;font-size:20px"
                            >หน่วยงานที่ท่านบริจาค</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="donateLog in userDonateLog" :key="donateLog.id">
                            <td style="text-align:center; font-size:25px">{{donateLog.name}}</td>
                            <td style="text-align:center; font-size:25px">{{donateLog.amount}}</td>
                            <td style="text-align:center; font-size:25px">{{donateLog.department}}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-outline-primary"
                        data-dismiss="modal"
                      >Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import { departmentsCollection } from "../firebase.js";
import { userLogCollection } from "../firebase.js";
import { storeCollection } from "../firebase.js";
import MenuBar from "../components/Menubar.vue";
import FooterBar from "../components/Footer.vue";
import { firestore } from "firebase";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      departments: [],
      storages: [],
      userDonateLog: [],
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
          depart_name: "",
        },
      },
      requireDonate: {
        storeId: [],
      },
      customDonate: {
        name: "",
        amount: 0,
        enough: "",
        count: "",
        customCount: "",
      },

      customStorage: {
        customId: [],
        customAmount: [],
        requireId: [],
        requireAmount: [],
      },
      slide: 0,
      sliding: null,
    };
  },
  firestore() {
    return {
      departments: departmentsCollection,
      userDonateLog: userLogCollection,
      storages: storeCollection,
    };
  },
  computed: {
    ...mapState({
      alert: (state) => state.alert,
    }),
    ...mapState("account", ["user"]),
  },
  beforeMount() {
    this.getData();
  },

  methods: {
    ...mapActions("alert", ["error"]),
    submitCustomDonate() {
      var name = document.getElementById("username").innerHTML;
      if (!this.customDonate.name || !this.customDonate.amount) {
        this.error("โปรดกรอกข้อมูลให้ครบถ้วน");
      } else {
        // มีใน Requirement หรือไม่
        for (var i = 0; i <= this.requireDonate.storeId.length; i++) {
          if (this.customDonate.name == this.requireDonate.storeId[i]) {
            this.customDonate.count = 1;
            break;
          } else {
            this.customDonate.count = 0;
          }
        }
        // มีใน CustomDonate หรือไม่
        for (var x = 0; x <= this.customStorage.customId.length; x++) {
          if (this.customDonate.name == this.customStorage.customId[x]) {
            this.customDonate.customCount = 1;
            break;
          } else {
            this.customDonate.customCount = 0;
          }
        }

        console.log("this.customDonate.count : " + this.customDonate.count);
        console.log("this.customDonate.amount : " + this.customDonate.amount);
        console.log(
          "this.customDonate.customCount : " + this.customDonate.customCount
        );
        if (
          this.customDonate.count < 1 &&
          this.customDonate.amount > 0 &&
          this.customDonate.customCount < 1
        ) {
          // ----------------------- ของใหม่ -----------------------
          var name = document.getElementById("username").innerHTML;
          storeCollection
            .doc(this.depart.depart_name)
            .collection("CustomStore")
            .doc(this.customDonate.name)
            .set({
              name: this.customDonate.name,
              amount: parseInt(this.customDonate.amount),
              donateDate: new Date(),
              enough: true,
              status: false,
              userDonate: name,
            });

          userLogCollection
            .doc(name)
            .collection("donate_log")
            .doc(this.customDonate.name)
            .set({
              name: this.customDonate.name,
              amount: parseInt(this.customDonate.amount),
              department: this.depart.depart_name,
              donateDate: new Date(),
              status: false,
            });
          console.log("Update ของใหม่");
          this.customDonate.name = "";
          this.customDonate.amount = "";
        } else if (
          // ----------------------- มีของซ้ำใน Requirement อยู่แล้ว -----------------------
          this.customDonate.count >= 1
        ) {
          alert(
            "คุณได้กรอกความต้องการที่มีความต้องการในหน่วยงาน กรุณากรอกในฟอร์ม ช่องทางการบริจาค"
          );
          // ----------------------- ไม่มีของเดิมซ้ำใน Requirement-----------------------
        } else {
          storeCollection
            .doc(this.depart.depart_name)
            .collection("CustomStore")
            .doc(this.customDonate.name)
            .get()
            .then((snapshot) => {
              const docData = snapshot.data();
              storeCollection
                .doc(this.depart.depart_name)
                .collection("CustomStore")
                .doc(this.customDonate.name)
                .update({
                  amount:
                    parseInt(docData.amount) +
                    parseInt(this.customDonate.amount),
                  donateDate: new Date(),
                });
              this.customDonate.name = "";
              this.customDonate.amount = "";
            });
        }
      }
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },

    getDonateLog: function () {
      var name = document.getElementById("username").innerHTML;
      userLogCollection
        .doc(name)
        .collection("donate_log")
        .onSnapshot((querySnapshot) => {
          let logArray = [];

          querySnapshot.forEach((doc) => {
            let logDonate = doc.data();
            logArray.push(logDonate);
          });
          this.userDonateLog = logArray;
        });
    },

    getData: function () {
      if (this.depart.depart_name != "") {
        var element = document.getElementById("department_list");
        var selectedValue = element.options[element.selectedIndex].text;
        this.dept_name = selectedValue;
        departmentsCollection
          .doc(this.depart.depart_name)
          .collection("Requirement")
          .onSnapshot((querySnapshot) => {
            let dataArray = [];
            let dataId = [];

            querySnapshot.forEach((doc) => {
              let requirements = doc.data();
              dataId.push(doc.id);
              if (requirements.enough == false) {
                dataArray.push(requirements);
              }
            });
            this.requirements = dataArray;
            this.requireDonate.storeId = dataId;
          });
        storeCollection
          .doc(this.depart.depart_name)
          .collection("RequireStore")
          .onSnapshot((querySnapshot) => {
            let requireIds = [];
            let requireAmounts = [];
            querySnapshot.forEach((doc) => {
              let stored = doc.data();
              if (stored.status == false) {
                requireIds.push(doc.id);
                requireAmounts.push(doc.amount);
              }
            });
            this.customStorage.requireId = requireIds;
            this.customStorage.requireAmount = requireAmounts;
          });

        storeCollection
          .doc(this.depart.depart_name)
          .collection("CustomStore")
          .onSnapshot((querySnapshot) => {
            let customIds = [];
            let customAmounts = [];
            querySnapshot.forEach((doc) => {
              let stored = doc.data();
              if (stored.status == false) {
                customIds.push(doc.id);
                customAmounts.push(doc.amount);
              }
            });
            this.customStorage.customId = customIds;
            this.customStorage.customAmount = customAmounts;
          });
      }
    },

    updateDonate: function (event) {
      var name = document.getElementById("username").innerHTML;
      if (this.depart.depart_name != "") {
        departmentsCollection
          .doc(this.depart.depart_name)
          .collection("Requirement")
          .doc(this.depart.new_require.name)
          .get()
          .then((snapshot) => {
            const document = snapshot.data();
            var amountLeft =
              parseInt(document.amount) -
              parseInt(this.depart.new_require.amount);

            if (document.amount >= this.depart.new_require.amount) {
              //-----------------------บริจาคครบ--------------------------
              if (amountLeft <= 0) {
                departmentsCollection
                  .doc(this.depart.depart_name)
                  .collection("Requirement")
                  .doc(this.depart.new_require.name)
                  .update({
                    amount: amountLeft,
                    enough: true,
                  });

                userLogCollection
                  .doc(name)
                  .collection("donate_log")
                  .doc()
                  .set({
                    name: this.depart.new_require.name,
                    amount: parseInt(this.depart.new_require.amount),
                    department: this.depart.depart_name,
                    donateDate: new Date(),
                    status: false,
                  });

                storeCollection
                  .doc(this.depart.depart_name)
                  .collection("RequireStore")
                  .doc(this.depart.new_require.name)
                  .set({
                    name: this.depart.new_require.name,
                    amount: parseInt(this.depart.new_require.amount),
                    enough: true,
                    donateDate: new Date(),
                    status: false,
                  });
                this.depart.new_require.name = "";
                this.depart.new_require.amount = "";
                //-----------------------บริจาคไม่ครบ--------------------------
              } else if (amountLeft > 0) {
                departmentsCollection
                  .doc(this.depart.depart_name)
                  .collection("Requirement")
                  .doc(this.depart.new_require.name)
                  .update({
                    amount: amountLeft,
                  });

                userLogCollection
                  .doc(name)
                  .collection("donate_log")
                  .doc()
                  .set({
                    name: this.depart.new_require.name,
                    amount: parseInt(this.depart.new_require.amount),
                    department: this.depart.depart_name,
                    donateDate: new Date(),
                    status: false,
                  });

                for (var x = 0; x <= this.customStorage.requireId.length; x++) {
                  if (
                    this.depart.new_require.name ==
                    this.customStorage.requireId[x]
                  ) {
                    this.customDonate.customCount = 1;
                    break;
                  } else {
                    this.customDonate.customCount = 0;
                  }
                }
                if (this.customDonate.customCount > 0) {
                  storeCollection
                    .doc(this.depart.depart_name)
                    .collection("RequireStore")
                    .doc(this.depart.new_require.name)
                    .get()
                    .then((snapshot) => {
                      const documentData = snapshot.data();
                      var amounted =
                        parseInt(documentData.amount) +
                        parseInt(this.depart.new_require.amount);
                      storeCollection
                        .doc(this.depart.depart_name)
                        .collection("RequireStore")
                        .doc(this.depart.new_require.name)
                        .set({
                          name: this.depart.new_require.name,
                          amount: parseInt(amounted),
                          enough: true,
                          donateDate: new Date(),
                          status: false,
                        });
                    });
                  this.depart.new_require.name = "";
                  this.depart.new_require.amount = "";
                } else {
                  storeCollection
                    .doc(this.depart.depart_name)
                    .collection("RequireStore")
                    .doc(this.depart.new_require.name)
                    .set({
                      name: this.depart.new_require.name,
                      amount: parseInt(this.depart.new_require.amount),
                      enough: true,
                      donateDate: new Date(),
                      status: false,
                    });
                  this.depart.new_require.name = "";
                  this.depart.new_require.amount = "";
                }
              }
              //-----------------------บริจาคเกิน--------------------------
            } else {
              this.depart.new_require.name = "";
              this.depart.new_require.amount = "";
              alert(
                "คุณบริจาคเกินความต้องการของหน่วยงาน หากต้องการบริจาคเพิ่มเติมให้กรอกที่ บริจาคเพิ่มเติม"
              );
            }
          });
      }
    },
  },
  components: {
    MenuBar,
    FooterBar,
  },
};
</script>

<style>
.DonatePage {
  background-color: #fffff0;
  margin: 0;
}

.DonatePage .bg-light {
  background-color: #b0c4de !important;
}
.container {
  margin-top: 20px;
}
.DonatePage .table {
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
  padding: 0.4rem;
  border-radius: 4px;
  margin-left: 5px;
}
.select_row button {
  margin-bottom: 5px;
  margin-left: 10px;
  padding: 0.5rem 2rem;
  font-size: 20px;
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
  .DonatePage .container,
  .DonatePage .container-sm,
  .DonatePage .container-md,
  .DonatePage .container-lg,
  .DonatePage .container-xl {
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .DonatePage .col-md-8 {
    -ms-flex: 0 0 65%;
    -webkit-box-flex: 0;
    flex: 0 0 65%;
    max-width: 65%;
  }
}

@media (min-width: 768px) {
  .DonatePage .col-md-4 {
    -ms-flex: 0 0 35%;
    -webkit-box-flex: 0;
    flex: 0 0 35%;
    max-width: 35%;
  }
}
.depart_header {
  margin-bottom: 20px;
}
.paragraph_info {
  margin-top: 30px;
  font-size: 25px;
}
.DonatePage input[type="text"] {
  padding: 1.5rem 1px;
  margin: 8px 0;
  box-sizing: border-box;
  font-size: 20px;
}

.DonatePage input[type="number"] {
  padding: 1.5rem 1px;
  margin: 8px 0;
  box-sizing: border-box;
  font-size: 20px;
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

.donate_form button {
  margin-top: 20px;
  font-size: 20px;
}
.donate_form h4 {
  font-size: 40px;
}

@media (min-width: 768px) {
  .DonatePage .mb-md-5,
  .DonatePage .my-md-5 {
    margin-bottom: 0 !important;
  }
}

.blog-sidebar select {
  font-size: 20px;
}
.aside-form {
  background-color: #f8f8ff;
}
.logDonate {
  margin-top: 20px;
  padding: 1rem 6.8rem !important;
}

.mb-5,
.my-5 {
  margin-bottom: 0 !important;
}
</style>
