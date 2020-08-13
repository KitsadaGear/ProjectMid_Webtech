<template>
  <div>
    <div role="main" class="container">
      <div class="row">
        <div class="col-md-8 blog-main">
          <label class="pb-4 mb-4 border-bottom">โปรดเลือกหน่วยงานที่คุณต้องการ :</label>

          <select name="department_list" id="department_list">
            <option value disabled selected hidden></option>
            <option v-for="department in departments" :key="department.id">{{ department.name }}</option>
          </select>

          <button @click="getRequire()">Select</button>

          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">ชื่อ</th>
                <th scope="col">จำนวน</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Test</td>
                <td>Otto</td>
              </tr>
            </tbody>
          </table>
        </div>

        <aside class="col-md-4 blog-sidebar">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="font-italic">ประวัติส่วนตัวของคุณ</h4>
            <p></p>
            <a class="mb-0">
              <p></p>
            </a>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import { departmentsCollection } from "../firebase.js";

export default {
  data() {
    return {
      departments: [],

      new_department: {
        name: "",
      },
    };
  },
  firestore() {
    return {
      departments: departmentsCollection,
    };
  },
  methods: {
    getRequire(department) {
      console.log("test");
    },
  },
};
</script>

<style>
aside .bg-light {
  background-color: #f0f8ff !important;
}

.container {
  margin-top: 20px;
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
</style>
