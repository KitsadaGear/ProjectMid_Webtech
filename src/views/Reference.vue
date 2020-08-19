<template>
  <div>
    <menu-bar></menu-bar>
    <div class="Homepage">
      <div class="container shadow-lg p-3 mb-5 rounded" style="margin-top:70px">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col" style="text-align:center">รายชิ่อเอกสารการอ้างอิง</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center">Test</td>
            </tr>
            <tr>
              <td style="text-align:center">Otto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from "../components/Menubar.vue";
export default {
  components: {
    MenuBar,
  },
};
</script>

<style></style>
