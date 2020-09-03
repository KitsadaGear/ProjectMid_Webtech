<template>
  <div>
    <div class="AdminPage font-Kanit shadow-lg p-3 mb-5 rounded">
      <menu-bar></menu-bar>
      <div role="main" class="container">
        <div class="row">
          <div class="col-md-8 blog-main">
            <h1 style="margin-bottom:20px;text-align:center">สรุปยอดการบริจาคของหน่วยงาน</h1>
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
                  >ชื่อสิ่งของที่ได้รับการบริจาค</th>
                  <th
                    scope="col"
                    style="text-align:center; font-size:20px"
                  >จำนวนสิ่งของที่ได้รับการบริจาค</th>
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
            <!-- ยืนยันบริจาค-->
            <form class="donate_form" @submit.prevent="acceptDonate()">
              <div class="p-4 mb-3 rounded aside-form" style="background-color:#F8F8FF">
                <h4 style="text-align:center;font-size: 30px;">ยืนยันรายการบริจาค</h4>
                <p class="paragraph_info">รายชื่อสิ่งของบริจาค</p>

                <div class="custom" style="text-align:center">
                  <select v-model="acceptDonated.name">
                    <option value disabled selected hidden></option>
                    <optgroup style="font-size:20px;">
                      <option
                        v-for="requirement in requirements"
                        :key="requirement.id"
                      >{{ requirement.name }}</option>
                    </optgroup>
                  </select>
                </div>

                <div style="text-align:center;">
                  <button type="submit" class="btn btn-outline-primary">ยืนยันรายการบริจาค</button>
                </div>
              </div>
            </form>

            <!--Custom -->
            <form @submit.prevent="modifyDonate()" class="donate_form" style="margin-top:30px">
              <div class="p-4 mb-3 rounded aside-form">
                <h4 style="text-align:center;font-size: 30px;">แก้ไขรายการบริจาค</h4>
                <p class="paragraph_info">รายชื่อสิ่งของบริจาค</p>
                <div class="custom" style="text-align:center">
                  <select v-model="modifyDonated.name">
                    <option value disabled selected hidden></option>
                    <optgroup style="font-size:20px;">
                      <option
                        v-for="requirement in requirements"
                        :key="requirement.id"
                      >{{ requirement.name }}</option>
                    </optgroup>
                  </select>
                </div>
                <p class="paragraph_info">จำนวนสิ่งของที่ท่านต้องการแก้ไข</p>
                <div class="input-group mb-3">
                  <input
                    type="number"
                    class="form-control"
                    aria-describedby="button-addon2"
                    style="text-align:center;"
                    placeholder="โปรดกรอกจำนวนสิ่งของที่ท่านต้องการแก้ไข"
                    id="donate_amount"
                    v-model="modifyDonated.amount"
                  />
                </div>
                <div style="text-align:center;">
                  <button type="submit" class="btn btn-outline-primary">แก้ไขรายการบริจาค</button>
                </div>
              </div>
            </form>

            <div class="p-4 mb-3 rounded aside-form" style="margin-top:30px">
              <h1 style="text-align:center;font-size: 30px;">ประวัติการแก้ไขรายการบริจาค</h1>
              <button
                class="btn btn-outline-primary logDonate"
                type="button"
                data-toggle="modal"
                data-target="#modifyDonateLog"
              >คลิกทีนี่</button>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="modifyDonateLog" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-scrollable modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4
                      style="font-size: 2.5rem;margin-top:30px;margin-bottom:20px"
                    >แก้ไขรายการบริจาค</h4>
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
                          >ชื่อสิ่งของที่แก้ไข</th>
                          <th
                            scope="col"
                            style="text-align:center;font-size:20px"
                          >จำนวนสิ่งของที่แก้ไข</th>
                          <th
                            scope="col"
                            style="text-align:center;font-size:20px"
                          >หน่วยงานสิ่งของที่แก้ไข</th>
                          <th scope="col" style="text-align:center;font-size:20px">วันเวลาที่แก้ไข</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr></tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Modal -->
          </aside>
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
      requirements: [],
      dept_name: "",
      depart: {
        depart_name: "",
        name: "",
        amount: 0,
        enough: "",
      },
      acceptDonated: {
        name: "",
      },
      modifyDonated: {
        name: "",
        amount: "",
        enough: "",
      },
    };
  },
  beforeMount() {
    this.getData();
  },
  components: {
    MenuBar,
    FooterBar,
  },
  firestore() {
    return {
      departments: departmentsCollection,
      storages: storeCollection,
    };
  },
  methods: {
    ...mapActions("alert", ["error"]),
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

            querySnapshot.forEach((doc) => {
              let requirements = doc.data();
              if (
                requirements.enough == true &&
                requirements.status != "Accept"
              ) {
                dataArray.push(requirements);
              }
            });
            this.requirements = dataArray;
          });
      }
    },
    acceptDonate() {
      departmentsCollection
        .doc(this.depart.depart_name)
        .collection("Requirement")
        .doc(this.acceptDonated.name)
        .update({ status: "Accept" });
    },
    modifyDonate() {
      departmentsCollection
        .doc(this.depart.depart_name)
        .collection("Requirement")
        .doc(this.modifyDonated.name)
        .get()
        .then((snapshot) => {
          const document = snapshot.data();
          var modifyAmount = 0;

          if (
            parseInt(document.amount) - parseInt(this.modifyDonated.amount) <
            1
          ) {
            modifyAmount = 0;
          } else {
            modifyAmount =
              parseInt(document.amount) - parseInt(this.modifyDonated.amount);
          }
        });
    },
  },
};
</script>

<style>
.AdminPage {
  background-color: #fffff0;
  margin: 0;
}

.AdminPage .bg-light {
  background-color: #b0c4de !important;
}
.container {
  margin-top: 20px;
}
.Admin .table {
  background-color: white;
  margin: 0;
}
.modal-header h4 {
  text-align: center;
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
  .AdminPage .container,
  .AdminPage .container-sm,
  .AdminPage .container-md,
  .AdminPage .container-lg,
  .AdminPage .container-xl {
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .AdminPage .col-md-8 {
    -ms-flex: 0 0 65%;
    -webkit-box-flex: 0;
    flex: 0 0 65%;
    max-width: 65%;
  }
}

@media (min-width: 768px) {
  .AdminPage .col-md-4 {
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
  margin-top: 20px;
  font-size: 25px;
}
.AdminPage input[type="text"] {
  padding: 1.5rem 1px;
  margin: 8px 0;
  box-sizing: border-box;
  font-size: 20px;
}

.AdminPage input[type="number"] {
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