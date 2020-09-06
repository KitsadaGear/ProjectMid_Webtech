<template>
  <div id="app">
<<<<<<< HEAD
=======

    <div v-if="alert.message" :class="`alert ${alert.type}`" class="alert alert-dismissible fade show">
      <botton type="botton" class="close" aria-label="Close" data-dismiss="alert">
        <span aria-hidden="true">&times;</span>
      </botton>
        {{ alert.message }}
    </div>
<!-- 
    <div v-if="alert.message" :class="alert ${alert.type}" class="alert alert-dismissible fade show">
      <botton type="botton" class="close" aria-label="Close" data-dismiss="alert">
        <span aria-hidden="true">&times;</span>
      </botton>
      {{ alert.message }}
    </div> -->

>>>>>>> decb4ab640d513cfb6590e5d2f9cc911fd0266ca
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "app",
  methods: {
    ...mapActions({
      clearAlert: "alert/clear"
    })
  },
  watch: {
    $route(to, from) {
      this.clearAlert();
    }
  },
  computed:{
      ...mapState({
      alert: state => state.alert
      })
  }
};
</script>
<style>
#app {
  margin: 0%;
  height: 100%;
}
</style>
