<template>
  <div id="app">

    <div v-if="alert.message" :class="`alert ${alert.type}`">
        {{ alert.message }}
        </div>

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
