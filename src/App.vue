<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#main-menu {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 100;
  transition-duration: 0.2s;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
  background-color: none;
  padding: 0 40px;
}
</style>
